"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/types"; // Importar tipo Post
import { urlFor } from "../lib/sanity.client"; // Caminho corrigido
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

// Props para receber os posts
interface BlogSectionProps {
  latestPosts: Post[];
}

// Componente reutilizável para o card (igual ao da página /blog)
function BlogPostCard({ post }: { post: Post }) {
  const formattedDate = post.publishedAt
    ? format(new Date(post.publishedAt), "d 'de' MMMM, yyyy", { locale: ptBR })
    : "Data inválida";

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
      <Link href={`/blog/${post.slug?.current ?? "#"}`} className="block">
        <div className="relative h-48 overflow-hidden">
          {post.mainImage && (
            <Image
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
          <div className="text-primary font-semibold group-hover:underline flex items-center">
            Ler mais{" "}
            <ArrowRight
              size={16}
              className="ml-1 group-hover:translate-x-1 transition-transform"
            />
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}

// Componente principal da seção, agora recebe `latestPosts`
export function BlogSection({ latestPosts }: BlogSectionProps) {
  return (
    <section
      id="blog"
      className="py-20 md:py-32 bg-secondary/30"
      style={{ backgroundColor: "#dfccb8" }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Blog</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Artigos e reflexões sobre psicologia, saúde mental e desenvolvimento
            pessoal
          </p>
        </div>

        {latestPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {latestPosts.map((post, index) => (
              <div
                key={post._id}
                className="animate-in fade-in zoom-in duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <BlogPostCard post={post} />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">
            Nenhum post recente encontrado.
          </p>
        )}

        <div className="text-center mt-12 animate-in fade-in zoom-in duration-700 delay-500">
          {/* BOTÃO CORRIGIDO AQUI */}
          <Button size="lg" variant="outline">
            <Link
              href="/blog"
              className="flex items-center justify-center w-full h-full"
            >
              Ver Todos os Artigos
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
