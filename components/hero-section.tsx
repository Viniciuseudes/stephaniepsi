"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
      style={{ backgroundColor: "#dfccb8" }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="flex justify-center mb-4">
              <div
                className={`transition-all duration-700 ${
                  isScrolled ? "opacity-0 -translate-y-8 scale-75" : "opacity-100 translate-y-0 scale-100"
                }`}
              >
                <Image
                  src="/images/logo-circular.png"
                  alt="Stephanie Barbosa - Psicóloga"
                  width={200}
                  height={200}
                  className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain animate-in zoom-in duration-700"
                  priority
                />
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance leading-tight">
                Te levo ao{" "}
                <span className="text-primary relative inline-block">
                  autoconhecimento
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="12"
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
                através da psicoterapia!
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                Psicóloga clínica e educacional, especializada em ajudar você a descobrir seu potencial e viver com mais
                equilíbrio emocional.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg group">
                <Link href="#contato">
                  Agendar Consulta
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg bg-transparent">
                <Link href="#sobre">Conheça Meu Trabalho</Link>
              </Button>
            </div>
          </div>

          {/* Image with Creative Effect */}
          <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-300">
            <div className="relative">
              {/* Decorative border effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary via-accent to-primary/50 rounded-[2rem] blur-2xl opacity-30 animate-pulse" />

              {/* Main image container with 3D effect */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 mix-blend-overlay z-10" />
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-08-27-20-28-55-cMFLDnb8EnG2t67AluSQb7tGYdNPKx.jpg"
                  alt="Stephanie Brynha - Psicóloga"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />

                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-accent rounded-tl-[2rem]" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-primary rounded-br-[2rem]" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-xl border-2 border-accent animate-in zoom-in delay-700">
                <p className="text-sm font-medium text-muted-foreground">Atendimento</p>
                <p className="text-2xl font-bold text-primary">Online & Presencial</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
