// lib/sanity.queries.ts
import { groq } from 'next-sanity'
import { client } from './sanity.client'
import type { Post, Workshop } from '@/types' // 1. Importar o tipo Workshop

export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id, title, slug, mainImage, category, publishedAt, excerpt, body,
    likes // <-- ADICIONEI AQUI
  }
`

export const latestPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) [0...3] {
     _id, title, slug, mainImage, category, publishedAt, excerpt,
     likes // <-- ADICIONEI AQUI
  }
`
export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
     _id, title, slug, mainImage, category, publishedAt, excerpt, body,
     likes // <-- ADICIONEI AQUI
  }
 `
export const postSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)][].slug.current
`

export async function getAllBlogPosts(): Promise<Post[]> {
  return await client.fetch(postsQuery)
}

export async function getLatestBlogPosts(): Promise<Post[]> {
  return await client.fetch(latestPostsQuery)
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  return await client.fetch(postBySlugQuery, { slug })
}

export async function getAllPostSlugs(): Promise<string[]> {
  return await client.fetch(postSlugsQuery) || []
}

// --- MINHAS ADIÇÕES ---

// 2. Query para buscar o próximo workshop (status == 'proximo')
export const nextWorkshopQuery = groq`
  *[_type == "workshop" && status == "proximo"] | order(date asc) [0] {
    _id, title, mainImage, description, date, spots, modality, status, buttonLink
  }
`

// 3. Query para buscar workshops passados (status == 'encerrado')
export const pastWorkshopsQuery = groq`
  *[_type == "workshop" && status == "encerrado"] | order(date desc) [0...4] {
    _id, title
  }
`

// 4. Função para buscar o próximo workshop
export async function getNextWorkshop(): Promise<Workshop | null> {
  return await client.fetch(nextWorkshopQuery)
}

// 5. Função para buscar workshops passados
export async function getPastWorkshops(): Promise<{_id: string, title: string}[]> {
  return await client.fetch(pastWorkshopsQuery) || []
}
// --- FIM DAS ADIÇÕES ---