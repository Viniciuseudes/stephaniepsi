"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Brain, Heart, Users, Sparkles, ArrowRight } from "lucide-react"; // Importar ArrowRight
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils"; // Importar cn
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"; // Importar Dialog
import { Button } from "@/components/ui/button"; // Importar Button

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
              /* Adicionado flex flex-col para forçar altura igual */
              className={cn(
                "relative mt-7 group hover:shadow-xl transition-all duration-700 hover:-translate-y-2 border-2 hover:border-primary/50 flex flex-col", // <-- Adicionado flex flex-col
                cardsAnimation.isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-12 scale-95"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors border-4 border-background">
                  <approach.icon className="text-primary" size={28} />
                </div>
              </div>

              {/* Adicionado flex flex-col flex-grow */}
              <CardContent className="p-6 pt-10 space-y-4 text-center flex flex-col flex-grow">
                <h3 className="text-xl font-bold">{approach.title}</h3>

                {/* Adicionado line-clamp-6 (trunca em 6 linhas) e flex-grow */}
                <p className="text-muted-foreground leading-relaxed line-clamp-6 flex-grow">
                  {approach.description}
                </p>

                {/* Adicionado wrapper com mt-auto para empurrar para baixo */}
                <div className="mt-auto pt-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="link"
                        className="text-primary p-0 h-auto justify-center group text-sm"
                      >
                        Ler mais
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-lg">
                      <DialogHeader>
                        <DialogTitle className="text-left text-2xl">
                          {approach.title}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="py-4 text-muted-foreground leading-relaxed text-left max-h-[60vh] overflow-y-auto">
                        {/* whiteSpace preserva as quebras de linha do texto original */}
                        <p style={{ whiteSpace: "pre-line" }}>
                          {approach.description}
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
