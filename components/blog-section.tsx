"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function BlogSection() {
  const posts = [
    {
      title: "Como Lidar com a Ansiedade no Dia a Dia",
      excerpt: "Descubra técnicas práticas e eficazes para gerenciar a ansiedade e recuperar o controle emocional.",
      date: "10 de Outubro, 2025",
      image: "/person-meditating-calm.jpg",
      category: "Saúde Mental",
    },
    {
      title: "A Importância do Autoconhecimento",
      excerpt: "Entenda como o autoconhecimento pode transformar sua vida e seus relacionamentos.",
      date: "5 de Outubro, 2025",
      image: "/person-journaling-reflection.jpg",
      category: "Desenvolvimento Pessoal",
    },
    {
      title: "Inteligência Emocional na Prática",
      excerpt: "Aprenda a desenvolver e aplicar a inteligência emocional no seu cotidiano.",
      date: "28 de Setembro, 2025",
      image: "/emotional-intelligence.png",
      category: "Psicologia",
    },
  ]

  return (
    <section id="blog" className="py-20 md:py-32 bg-secondary/30" style={{ backgroundColor: "#dfccb8" }}>
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Blog</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Artigos e reflexões sobre psicologia, saúde mental e desenvolvimento pessoal
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 animate-in fade-in zoom-in duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar size={16} />
                  <span>{post.date}</span>
                </div>

                <h3 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                <p className="text-muted-foreground line-clamp-3 leading-relaxed">{post.excerpt}</p>

                <Button variant="ghost" className="group/btn p-0 h-auto font-semibold">
                  Ler mais
                  <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-in fade-in zoom-in duration-700 delay-500">
          <Button asChild size="lg" variant="outline">
            <Link href="#blog">Ver Todos os Artigos</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
