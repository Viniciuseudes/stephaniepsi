// app/blog/page.tsx
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { getAllBlogPosts } from "@/lib/sanity.queries"; // Importar função de busca
import { urlFor } from "@/lib/sanity.client"; // Importar helper de imagem
import { format } from "date-fns"; // Para formatar datas
import { ptBR } from "date-fns/locale"; // Para formato brasileiro
// --- ADIÇÃO DE IMPORTS ---
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
// --- FIM DA ADIÇÃO ---

// Componente reutilizável para o card do post
function BlogPostCard({ post }: { post: any }) {
  // ... (código do card sem alteração) ...
  const formattedDate = post.publishedAt
    ? format(new Date(post.publishedAt), "d 'de' MMMM, yyyy", { locale: ptBR })
    : "Data inválida";

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
      {/* Link para o post individual */}
      <Link href={`/blog/${post.slug?.current ?? "#"}`} className="block">
        <div className="relative h-48 overflow-hidden">
          {post.mainImage && (
            <Image
              // Usar urlFor para gerar URL da imagem do Sanity
              src={urlFor(post.mainImage).height(300).width(500).url()}
              alt={post.title || "Imagem do post"}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
              {post.category || "Categoria"}
            </span>
          </div>
        </div>
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar size={16} />
            <span>{formattedDate}</span>
          </div>
          <h3 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
            {post.title || "Sem Título"}
          </h3>
          <p className="text-muted-foreground line-clamp-3 leading-relaxed">
            {post.excerpt || "Sem resumo."}
          </p>
        </CardContent>
      </Link>
    </Card>
  );
}

export default async function BlogPage() {
  const allPosts = await getAllBlogPosts(); // Buscar dados do Sanity

  return (
    <>
      <Header />
      <main
        className="min-h-screen pt-32 pb-16"
        style={{ backgroundColor: "#dfccb8" }}
      >
        {" "}
        {/* Aumentado pt */}
        <div className="container mx-auto px-4 max-w-6xl">
          {/* --- ADIÇÃO DOS BREADCRUMBS --- */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Blog</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          {/* --- FIM DA ADIÇÃO --- */}

          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Blog
          </h1>

          {allPosts.length === 0 ? (
            <p className="text-center text-muted-foreground">
              Nenhum post encontrado.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {allPosts.map((post) => (
                <BlogPostCard key={post._id} post={post} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
