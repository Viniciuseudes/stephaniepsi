"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Video, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";

export function ServiceFormatsSection() {
  const [showOffice, setShowOffice] = useState(false);

  const formats = [
    {
      icon: Video,
      title: "Atendimento Online",
      description:
        "Pensada para a praticidade e no conforto do seu espaço viável para sessão. A Psicoterapia ou consulta de emergência online tem a mesma entrega e qualidade do presencial com mais flexibilidade de horário, sessão por videochamada e contato virtual via Whatsapp.",
      features: [
        "Plataforma segura",
        "Horários flexíveis",
        "Conforto do seu lar",
      ],
    },
    {
      icon: MapPin,
      title: "Atendimento Presencial",
      description:
        "Pensada para um melhor acolhimento, aqui no consultório terá o conforto do espaço, segurança para falar com privacidade e sigilo, além do  ambiente sem interrupções.",
      features: ["Ambiente acolhedor", "Fácil acesso", "Estacionamento"],
      location: "Rua da Saudade, 762 - Lagoa Nova, Natal-RN",
    },
  ];

  return (
    <section
      id="atendimento"
      className="py-20 md:py-32 bg-secondary/30"
      style={{ backgroundColor: "#dfccb8" }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Psicoterapia e Consulta de Urgência:
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha a modalidade que melhor se adapta à sua rotina e
            necessidades
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {formats.map((format, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 animate-in fade-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <format.icon className="text-primary" size={32} />
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">{format.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {format.description}
                  </p>
                </div>

                <ul className="space-y-2">
                  {format.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {format.location && (
                  <div className="pt-4 border-t border-border space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin
                        className="text-primary flex-shrink-0 mt-1"
                        size={20}
                      />
                      <p className="text-sm text-muted-foreground">
                        {format.location}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowOffice(!showOffice)}
                      className="w-full"
                    >
                      {showOffice ? "Ocultar Espaço" : "Conhecer Espaço"}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {showOffice && (
          <div className="mt-12 max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom duration-500">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PH8CqrpRRPAzaeQyzkFtukfnsgsF3o.png"
                  alt="Consultório - Vista 1"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-El5mvzHPEj5yxrs0ijEGOLA7wkQ7Jd.png"
                  alt="Consultório - Vista 2"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.1234567890!2d-35.2089!3d-5.8089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwNDgnMzIuMCJTIDM1wrAxMiczMi4wIlc!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do Consultório"
                  className="w-full"
                />
              </CardContent>
            </Card>
          </div>
        )}

        <div className="text-center mt-12 animate-in fade-in zoom-in duration-700 delay-500">
          <div className="inline-flex items-center gap-2 text-muted-foreground mb-6">
            <Clock size={20} />
            <span>Duração das sessões: 50 minutos</span>
          </div>
          <div>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Agendar Primeira Consulta
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
