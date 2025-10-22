"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Paciente há 2 anos",
      content:
        "A terapia com a Stephanie transformou minha vida. Aprendi a lidar com minha ansiedade e hoje me sinto muito mais confiante e equilibrada. Seu atendimento é acolhedor e profissional.",
      rating: 5,
    },
    {
      name: "João Santos",
      role: "Paciente há 1 ano",
      content:
        "Excelente profissional! Me ajudou a superar momentos difíceis e a desenvolver o autoconhecimento. As sessões são sempre produtivas e me sinto verdadeiramente ouvido.",
      rating: 5,
    },
    {
      name: "Ana Costa",
      role: "Participante de Workshop",
      content:
        "O workshop de Inteligência Emocional foi incrível! Aprendi técnicas práticas que uso no meu dia a dia. A Stephanie tem uma didática excelente e cria um ambiente muito acolhedor.",
      rating: 5,
    },
    {
      name: "Pedro Oliveira",
      role: "Paciente há 6 meses",
      content:
        "Recomendo muito! A abordagem da Stephanie é humanizada e eficaz. Me ajudou a entender melhor minhas emoções e a tomar decisões mais conscientes na minha vida.",
      rating: 5,
    },
  ]

  return (
    <section id="depoimentos" className="py-20 md:py-32" style={{ backgroundColor: "#dbaa6a" }}>
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Depoimentos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            O que meus pacientes dizem sobre o trabalho que realizamos juntos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 animate-in fade-in zoom-in duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 space-y-4">
                <Quote className="text-primary/20" size={48} />

                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="fill-accent text-accent" size={20} />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed italic">"{testimonial.content}"</p>

                <div className="pt-4 border-t border-border">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
