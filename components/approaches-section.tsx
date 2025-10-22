"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Brain, Heart, Users, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function ApproachesSection() {
  const titleAnimation = useScrollAnimation({ threshold: 0.3 });
  const cardsAnimation = useScrollAnimation({ threshold: 0.2 });

  const approaches = [
    {
      icon: Brain,
      title: "Terapia Cognitivo-Comportamental",
      description:
        "Trabalho com pensamentos, emoções e comportamentos para promover mudanças positivas e duradouras.",
    },
    {
      icon: Heart,
      title: "Abordagem Humanista",
      description:
        "Foco no potencial humano, autoconhecimento e desenvolvimento pessoal através de uma escuta empática.",
    },
    {
      icon: Users,
      title: "Psicologia Educacional",
      description:
        "Apoio a estudantes, pais e educadores no processo de aprendizagem e desenvolvimento.",
    },
    {
      icon: Sparkles,
      title: "Terapia Integrativa",
      description:
        "Combinação de diferentes abordagens para criar um tratamento personalizado e eficaz.",
    },
  ];

  return (
    <section
      id="abordagens"
      className="py-20 md:py-32"
      style={{ backgroundColor: "#dfccb8" }}
    >
      <div className="container mx-auto px-4">
        <div
          ref={titleAnimation.ref}
          className={`text-center space-y-4 mb-16 transition-all duration-1000 ${
            titleAnimation.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Abordagens Terapêuticas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Utilizo diferentes abordagens para oferecer um atendimento
            personalizado e eficaz, adaptado às suas necessidades únicas.
          </p>
        </div>

        <div
          ref={cardsAnimation.ref}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {approaches.map((approach, index) => (
            <Card
              key={index}
              /* Adicionado mt-7 (metade da altura do ícone) e relative */
              className={`relative mt-7 group hover:shadow-xl transition-all duration-700 hover:-translate-y-2 border-2 hover:border-primary/50 ${
                cardsAnimation.isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-12 scale-95"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Movido o container do ícone para fora do CardContent e adicionado posicionamento absoluto */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors border-4 border-background">
                  {" "}
                  {/* Adicionado border-4 border-background */}
                  <approach.icon className="text-primary" size={28} />
                </div>
              </div>

              {/* Adicionado pt-10 para compensar o espaço do ícone */}
              <CardContent className="p-6 pt-10 space-y-4 text-center">
                {" "}
                {/* Adicionado text-center */}
                <h3 className="text-xl font-bold">{approach.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {approach.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
