"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Users, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function WorkshopsSection() {
  const titleAnimation = useScrollAnimation({ threshold: 0.3 })
  const cardAnimation = useScrollAnimation({ threshold: 0.2 })
  const pastAnimation = useScrollAnimation({ threshold: 0.3 })

  const currentWorkshop = {
    title: "Autoconhecimento e Inteligência Emocional",
    description:
      "Workshop prático para desenvolver habilidades emocionais e promover o autoconhecimento através de exercícios vivenciais e reflexões guiadas.",
    date: "15 de Novembro, 2025",
    duration: "4 horas",
    spots: "20 vagas",
    image: "/workshop-therapy-group-session.jpg",
  }

  const pastWorkshops = [
    "Gestão de Ansiedade no Cotidiano",
    "Relacionamentos Saudáveis",
    "Mindfulness e Bem-Estar",
    "Desenvolvimento Pessoal e Carreira",
  ]

  return (
    <section id="workshops" className="py-20 md:py-32" style={{ backgroundColor: "#dbaa6a" }}>
      <div className="container mx-auto px-4">
        <div
          ref={titleAnimation.ref}
          className={`text-center space-y-4 mb-16 transition-all duration-1000 ${
            titleAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Workshops</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experiências transformadoras em grupo para desenvolvimento pessoal e emocional
          </p>
        </div>

        {/* Current Workshop Highlight */}
        <Card
          ref={cardAnimation.ref}
          className={`max-w-5xl mx-auto mb-12 overflow-hidden border-2 border-primary/20 shadow-xl transition-all duration-1000 ${
            cardAnimation.isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
          }`}
        >
          <div className="grid lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto">
              <Image
                src={currentWorkshop.image || "/placeholder.svg"}
                alt={currentWorkshop.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
            </div>

            <CardContent className="p-8 lg:p-10 space-y-6">
              <div className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                Próximo Workshop
              </div>

              <h3 className="text-3xl font-bold text-balance">{currentWorkshop.title}</h3>

              <p className="text-muted-foreground leading-relaxed">{currentWorkshop.description}</p>

              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3 text-sm">
                  <Calendar className="text-primary" size={20} />
                  <span>{currentWorkshop.date}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Users className="text-primary" size={20} />
                  <span>{currentWorkshop.spots} disponíveis</span>
                </div>
              </div>

              <Button size="lg" className="w-full bg-primary hover:bg-primary/90 group">
                Participar do Workshop
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </div>
        </Card>

        {/* Past Workshops */}
        <div
          ref={pastAnimation.ref}
          className={`max-w-3xl mx-auto transition-all duration-1000 ${
            pastAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Workshops Anteriores</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {pastWorkshops.map((workshop, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 transition-all duration-500 ${
                  pastAnimation.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <p className="font-medium">{workshop}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
