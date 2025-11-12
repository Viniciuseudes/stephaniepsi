"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "COLL",
      role: "Setembro 2023",
      content:
        "Profissional excelente! Já estou na sexta sessão e só vejo melhoras. A forma dela abordar os temas e de lidar com o paciente traz conforto e segurança para continuar. Além de ser gentil e empática. Percebe-se o conhecimento que ela possui e sua ética no trabalho. Recomendaria com toda certeza!",
      rating: 5,
    },
    {
      name: "VSC",
      role: "Março 2024",
      content:
        "Agradeço por encontrar a Stephanie, por ela ter uma escuta ativa incrível, por se dedicar nas anotações, me fazendo entender pontos e enxergar avanços que a correria do dia levaria ao esquecimento. Esse processo de me conhecer e estabelecer limites para que o externo não interfira negativamente na minha vida seria impossível ser o suporte e profissionalismo da Stephanie.",
      rating: 5,
    },
    {
      name: "VEG",
      role: "Abril 2024",
      content:
        "A Stephanie está me ajudando a entender meus sentimentos e atitudes de uma forma respeitosa, leve, com provocações positivas que me trazem boas reflexos e o melhor de tudo: com retornos durante cada encontro. Eu literalmente tenho uma troca, não me sinto falando sozinha.",
      rating: 5,
    },
    {
      name: "SERA",
      role: "Maio 2025",
      content:
        "Tem sido incrível finalmente ter ajuda no caminho a percorrer, sempre me senti muito só e mesmo, já tentei outros profissionais e nenhum deles me alcançou da forma que ela fez. Eu agradeço por isso",
      rating: 5,
    },
  ];

  return (
    <section
      id="depoimentos"
      className="py-20 md:py-32"
      style={{ backgroundColor: "#dbaa6a" }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Depoimentos
          </h2>
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
                    <Star
                      key={i}
                      className="fill-accent text-accent"
                      size={20}
                    />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                <div className="pt-4 border-t border-border">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
