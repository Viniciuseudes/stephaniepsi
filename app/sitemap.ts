// Salve este arquivo como: app/sitemap.ts

import { MetadataRoute } from 'next';
// Importa as funções de busca do Sanity
import { getAllPostSlugs, getNextWorkshop, getLatestBlogPosts } from '@/lib/sanity.queries'; 
import { Post } from '@/types'; //

// Domínio final
const BASE_URL = 'https://psistephaniebarbosa.com'; 

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  
  // 1. Páginas estáticas (Home e Blog)
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly', 
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // 2. Posts do Blog (Dinâmicos)
  // Busca todos os slugs de posts do Sanity
  const postSlugs = await getAllPostSlugs(); 
  
  // Tipagem explícita aqui ajuda a garantir
  const blogPosts: MetadataRoute.Sitemap = postSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(), 
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  // 3. Workshops (Dinâmicos)
  // Busca o próximo workshop para usar a data
  const nextWorkshop = await getNextWorkshop(); 
  
  // --- ESTA É A PARTE CORRIGIDA ---
  // Garantimos que 'workshopPages' seja sempre um array do tipo correto,
  // mesmo que 'nextWorkshop' seja nulo.
  const workshopPages: MetadataRoute.Sitemap = [];
  
  if (nextWorkshop && nextWorkshop.date) {
    workshopPages.push({
      url: `${BASE_URL}/#workshops`, // Link para a âncora na home
      lastModified: new Date(nextWorkshop.date), // Usa a data do workshop
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }
  // --- FIM DA CORREÇÃO ---

  // Combina todos os arrays e retorna
  return [...staticPages, ...blogPosts, ...workshopPages];
}