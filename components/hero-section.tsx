"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 md:pt-32 md:pb-16" // <-- MUDANÇA 1: h-screen para min-h-screen e ajuste de padding
      style={{ backgroundColor: "#dfccb8" }}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 max-h-full">
        {" "}
        {/* <-- MUDANÇA 2: Removido py-8 md:py-10 */}
        {/* Alterado para items-start para alinhar colunas ao topo */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start max-h-full">
          {/* Alterado para flex flex-col items-center lg:items-start */}
          <div className="flex flex-col items-center lg:items-start space-y-4 animate-in fade-in slide-in-from-left duration-700">
            <div className="flex justify-center lg:justify-start">
              {" "}
              {/* Mantido flex aqui para controle fino se necessário */}
              <div
                className={`transition-all duration-700 ${
                  isScrolled
                    ? "opacity-0 -translate-y-8 scale-75"
                    : "opacity-100 translate-y-0 scale-100"
                }`}
              >
                <Image
                  src="/images/logo-circular.png"
                  alt="Stephanie Barbosa - Psicóloga"
                  width={160} // <-- MUDANÇA 3: Reduzido (era 180)
                  height={160} // <-- MUDANÇA 3: Reduzido (era 180)
                  className="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 object-contain animate-in zoom-in duration-700" // <-- MUDANÇA 3: Reduzido (era w-32 ... lg:w-44)
                  priority
                />
              </div>
            </div>

            <div className="space-y-4 text-center lg:text-left">
              {" "}
              {/* Adicionado text-center lg:text-left */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance leading-tight">
                Te levo ao bom{" "}
                <span className="text-primary relative inline-block">
                  relacionamento
                  <svg
                    className="absolute -bottom-1 left-0 w-full"
                    height="8"
                    viewBox="0 0 300 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 10C50 5 100 2 150 3C200 4 250 7 298 10"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      className="text-accent"
                    />
                  </svg>
                </span>{" "}
                consigo e com os outros através da psicoterapia!
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                {" "}
                {/* Adicionado mx-auto lg:mx-0 */}
                Sou o apoio que te ajuda no fortalecimento de quem você é,
                auxilio a melhorar seus relacionamentos e se posicionar com mais
                clareza e tranquilidade.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              {" "}
              {/* Adicionado justify-center lg:justify-start */}
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-lg group"
              >
                <Link href="#contato">
                  Agendar Consulta
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg bg-transparent"
              >
                <Link href="#sobre">Conheça Meu Trabalho</Link>
              </Button>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-300 h-full max-h-[75vh] lg:max-h-[80vh] flex items-center justify-center">
            <div className="relative w-full h-full max-w-md lg:max-w-none mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary via-accent to-primary/50 rounded-[2rem] blur-2xl opacity-30 animate-pulse" />

              <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500 aspect-[3/4]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 mix-blend-overlay z-10" />
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-08-27-20-28-55-cMFLDnb8EnG2t67AluSQb7tGYdNPKx.jpg"
                  alt="Stephanie Brynha - Psicóloga"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 40vw"
                />
                <div className="absolute top-0 left-0 w-16 h-16 md:w-20 md:h-20 border-t-4 border-l-4 border-accent rounded-tl-[2rem]" />
                <div className="absolute bottom-0 right-0 w-16 h-16 md:w-20 md:h-20 border-b-4 border-r-4 border-primary rounded-br-[2rem]" />
              </div>

              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-card p-3 md:p-4 rounded-xl md:rounded-2xl shadow-xl border-2 border-accent animate-in zoom-in delay-700">
                <p className="text-xs md:text-sm font-medium text-muted-foreground">
                  Atendimento
                </p>
                <p className="text-lg md:text-2xl font-bold text-primary">
                  Online & Presencial
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
