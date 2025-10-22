"use client"

import { Award, BookOpen, Users, TrendingUp } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ExperienceSection() {
  const titleAnimation = useScrollAnimation({ threshold: 0.3 })
  const statsAnimation = useScrollAnimation({ threshold: 0.2 })

  const stats = [
    { icon: Award, value: "8+", label: "Anos de Experiência" },
    { icon: Users, value: "500+", label: "Pacientes Atendidos" },
    { icon: BookOpen, value: "15+", label: "Workshops Realizados" },
    { icon: TrendingUp, value: "95%", label: "Taxa de Satisfação" },
  ]

  return (
    <section className="py-20 md:py-32" style={{ backgroundColor: "#dbaa6a" }}>
      <div className="container mx-auto px-4">
        <div
          ref={titleAnimation.ref}
          className={`text-center space-y-4 mb-16 transition-all duration-1000 ${
            titleAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Experiência</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Anos dedicados ao cuidado da saúde mental e ao desenvolvimento humano
          </p>
        </div>

        <div ref={statsAnimation.ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center space-y-4 transition-all duration-700 ${
                statsAnimation.isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-90"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <stat.icon className="text-primary" size={36} />
              </div>
              <div className="space-y-2">
                <p className="text-4xl md:text-5xl font-bold text-primary">{stat.value}</p>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
