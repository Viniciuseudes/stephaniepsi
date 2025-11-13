"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function AboutSection() {
  const imageAnimation = useScrollAnimation({ threshold: 0.2 });
  const contentAnimation = useScrollAnimation({
    threshold: 0.2,
    rootMargin: "-50px",
  });
  const highlightsAnimation = useScrollAnimation({ threshold: 0.3 });

  const highlights: string[] = [];

  return (
    <section
      id="sobre"
      className="py-20 md:py-32"
      style={{ backgroundColor: "#dbaa6a" }}
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div
            ref={imageAnimation.ref}
            className={`relative transition-all duration-1000 ${
              imageAnimation.isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/essa.jpeg"
                alt="Stephanie Barbosa"
                width={600}
                height={800}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>

            {/* Decorative element */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent rounded-full blur-2xl opacity-50" />
          </div>

          {/* Content */}
          <div
            ref={contentAnimation.ref}
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              contentAnimation.isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-balance">
                Sobre Mim
              </h2>
              <div className="w-20 h-1 bg-primary rounded-full" />
            </div>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Meu nome é Stephanie Barbosa, sou psicóloga clínica e escolar.
                Desde 2018 acolhendo e cuidando das dores humanas. Atraves da
                psicoterapia presencio grandes transformações em meu
                consultório. Na escuta diária surgem temas como ansiedade,
                relacionamentos, autoestima, luto, medos, autorregulação,
                autoconhecimento.
              </p>
              <p>
                Ajudo jovens e adultos, que desejam vivenciar mudanças reais e
                transformações em suas vidas. Sou graduada em Psicologia pelo
                UNIRN desde 2017 e na graduação já inquieta e curiosa busquei
                outros conteúdos, estudei Libras Básico em 2013. Me atualizei em
                Clínica Ampliada e Desenvolvimento Humano em 2019. Em meio a
                pandemia iniciei estudos em Escrita terapêutica e Comunicação
                Não Violente concluidos em 2022, e atualmente Pós-Graduanda em
                Relacionamentos.
              </p>
              <p>
                Sou Colérica/melancólica, amo praia e nasci no lugar certo pra
                isso Natal/RN. Amante de bons livros e ideias interressantes. E
                falando em boas histórias, também curto filmes e séries. Movida
                a música e estudante por hobbie. Amo transformações e desejo te
                ajudar no que for possível. Até logo.
              </p>
            </div>

            <div
              ref={highlightsAnimation.ref}
              className="grid sm:grid-cols-2 gap-4 pt-4"
            >
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 transition-all duration-700 ${
                    highlightsAnimation.isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 400}ms` }}
                >
                  <CheckCircle2
                    className="text-primary flex-shrink-0"
                    size={24}
                  />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
