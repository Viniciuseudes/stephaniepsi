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
      title: "Psicoterapia Individual",
      description:
        "Na sessão você terá um espaço para falar e compartilhar suas questões, com intervenções leves e assertivas. Meu objetivo é entender melhor o que você está passando, aprofundar essa compreensão e, juntos encontrarmos maneiras de lidar com o sofrimento.",
    },
    {
      icon: Heart,
      title: "Consulta de Urgência",
      description:
        "Também chamada de Plantão Psicológico, é uma sessão que não precisa de agendamento antecipado. Ela exite para atender pessoas que estão passando por crises ou momentos de emergência emocional.",
    },
    {
      icon: Users,
      title: "Treinamento e Palestras",
      description:
        "Ofereço capacitações técnicas sob medida para sua empresa ou equipe, levando em conta suas necessidades e situação. Minha abordagem combina teoria e prática para atingir cada objetivo de forma eficaz.",
    },
    {
      icon: Sparkles,
      title: "Acessoria e Consultoria Escolar",
      description:
        "Ofereço suporte técnico para questões relacionadas ao ensino e aprendizagem, inclusão, comportamento e emoções, especialmente diante das mudanças sociais que as instituições têm enfrentado atualmente. Meu trabalho inclui visitas com objetivos definidos previamente, sempre levando em conta a necessidade do momento. Essas visitas podem envolver acolhimento aos alunos e suas famílias, orientação à equipe escolar ou a implementação de projetos e intervenções em sala de aula. Tudo é pensado e adaptado para a realidade da sua escola",
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
            Meus Serviços
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
