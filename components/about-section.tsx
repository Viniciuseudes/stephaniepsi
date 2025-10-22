"use client"

import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function AboutSection() {
  const imageAnimation = useScrollAnimation({ threshold: 0.2 })
  const contentAnimation = useScrollAnimation({ threshold: 0.2, rootMargin: "-50px" })
  const highlightsAnimation = useScrollAnimation({ threshold: 0.3 })

  const highlights = [
    "Psicóloga Clínica e Educacional",
    "Especialista em Autoconhecimento",
    "Atendimento Humanizado",
    "Abordagem Integrativa",
  ]

  return (
    <section id="sobre" className="py-20 md:py-32" style={{ backgroundColor: "#dbaa6a" }}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div
            ref={imageAnimation.ref}
            className={`relative transition-all duration-1000 ${
              imageAnimation.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-08-27-20-30-17-jyDw3PiJvZRsYwzWwnYIHNLMplqwgu.jpg"
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
              contentAnimation.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-balance">Sobre Mim</h2>
              <div className="w-20 h-1 bg-primary rounded-full" />
            </div>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Olá! Sou Stephanie Barbosa, psicóloga clínica e educacional com paixão por ajudar pessoas a descobrirem
                seu verdadeiro potencial através do autoconhecimento.
              </p>
              <p>
                Minha jornada na psicologia começou com o desejo de compreender a mente humana e contribuir para o
                bem-estar emocional das pessoas. Ao longo dos anos, desenvolvi uma abordagem integrativa que combina
                diferentes técnicas terapêuticas para oferecer um atendimento personalizado e eficaz.
              </p>
              <p>
                Acredito que cada pessoa possui recursos internos únicos para superar desafios e alcançar uma vida mais
                plena e significativa. Meu papel é facilitar esse processo de descoberta e transformação.
              </p>
            </div>

            <div ref={highlightsAnimation.ref} className="grid sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 transition-all duration-700 ${
                    highlightsAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 400}ms` }}
                >
                  <CheckCircle2 className="text-primary flex-shrink-0" size={24} />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
