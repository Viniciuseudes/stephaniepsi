"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// 1. Importar novos ícones e helpers
import { Calendar, Users, ArrowRight, Video, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // Para o botão
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import type { Workshop } from "@/types"; // 2. Importar tipo Workshop
import { urlFor } from "@/lib/sanity.client"; // 3. Importar urlFor
import { format } from "date-fns"; // Para formatar datas
import { ptBR } from "date-fns/locale"; // Para formato brasileiro
import { cn } from "@/lib/utils"; // Importar cn

// 4. Interface para as props que vêm da page.tsx
interface WorkshopSectionProps {
  nextWorkshop: Workshop | null;
  pastWorkshops: { _id: string; title: string }[];
}

// 5. Mapear modalidade para ícone
const modalityIcons = {
  online: Video,
  presencial: MapPin,
};

export function WorkshopsSection({
  nextWorkshop,
  pastWorkshops,
}: WorkshopSectionProps) {
  const titleAnimation = useScrollAnimation({ threshold: 0.3 });
  const cardAnimation = useScrollAnimation({ threshold: 0.2 });
  const pastAnimation = useScrollAnimation({ threshold: 0.3 });

  // 6. Remover dados mocados (currentWorkshop e pastWorkshops)

  // 7. Formatar data se o workshop existir
  const formattedDate = nextWorkshop?.date
    ? format(new Date(nextWorkshop.date), "d 'de' MMMM, yyyy", { locale: ptBR })
    : null;

  const ModalityIcon = nextWorkshop
    ? modalityIcons[nextWorkshop.modality]
    : null;

  return (
    <section
      id="workshops"
      className="py-20 md:py-32"
      style={{ backgroundColor: "#dbaa6a" }}
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
            Workshops
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experiências transformadoras em grupo para desenvolvimento pessoal e
            emocional
          </p>
        </div>

        {/* 8. Workshop Futuro (Highlight) - Adicionar verificação se nextWorkshop existe */}
        {nextWorkshop ? (
          <Card
            ref={cardAnimation.ref}
            className={`max-w-5xl mx-auto mb-12 overflow-hidden border-2 border-primary/20 shadow-xl transition-all duration-1000 ${
              cardAnimation.isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-12 scale-95"
            }`}
          >
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <Image
                  // 9. ATUALIZAR SRC DA IMAGEM
                  src={urlFor(nextWorkshop.mainImage).url()}
                  alt={nextWorkshop.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
              </div>

              <CardContent className="p-8 lg:p-10 space-y-6">
                {/* --- 10. INÍCIO DA SEÇÃO DE TAGS ATUALIZADA (COM A NOVA TAG) --- */}
                <div className="flex flex-wrap gap-2">
                  {nextWorkshop.status === "proximo" && (
                    <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                      Próximo Workshop
                    </span>
                  )}
                  {ModalityIcon && (
                    <span
                      className={cn(
                        "inline-flex items-center gap-1.5 px-4 py-1 text-sm font-semibold rounded-full",
                        nextWorkshop.modality === "online"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-green-100 text-green-800"
                      )}
                    >
                      <ModalityIcon size={16} />
                      {nextWorkshop.modality === "online"
                        ? "Online"
                        : "Presencial"}
                    </span>
                  )}
                </div>
                {/* --- FIM DA SEÇÃO DE TAGS ATUALIZADA --- */}

                <h3 className="text-3xl font-bold text-balance">
                  {nextWorkshop.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {nextWorkshop.description}
                </p>

                <div className="space-y-3 pt-4">
                  {formattedDate && (
                    <div className="flex items-center gap-3 text-sm">
                      <Calendar className="text-primary" size={20} />
                      <span>{formattedDate}</span>
                    </div>
                  )}
                  {nextWorkshop.spots && (
                    <div className="flex items-center gap-3 text-sm">
                      <Users className="text-primary" size={20} />
                      <span>{nextWorkshop.spots}</span>
                    </div>
                  )}
                </div>

                {/* 11. ATUALIZAR BOTÃO PARA USAR Link e href */}
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 group"
                  asChild
                >
                  <Link
                    href={nextWorkshop.buttonLink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Participar do Workshop
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </div>
          </Card>
        ) : (
          // 12. Fallback caso não haja "Próximo Workshop"
          <Card
            ref={cardAnimation.ref}
            className={`max-w-5xl mx-auto mb-12 overflow-hidden border-2 border-border/20 shadow-lg transition-all duration-1000 ${
              cardAnimation.isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-12 scale-95"
            }`}
          >
            <CardContent className="p-8 lg:p-10 space-y-4 text-center">
              <span className="inline-block px-4 py-1 bg-secondary/70 text-secondary-foreground text-sm font-semibold rounded-full">
                Em Breve
              </span>
              <h3 className="text-2xl font-bold text-balance">
                Novos workshops estão sendo preparados
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
                Fique de olho nesta seção para futuras oportunidades de
                desenvolvimento pessoal e emocional.
              </p>
            </CardContent>
          </Card>
        )}
        {/* Fim do Workshop Futuro */}

        {/* 13. Workshops Anteriores (Atualizar para usar dados do Sanity) */}
        {pastWorkshops && pastWorkshops.length > 0 && (
          <div
            ref={pastAnimation.ref}
            className={`max-w-3xl mx-auto transition-all duration-1000 ${
              pastAnimation.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              Workshops Anteriores
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {pastWorkshops.map((workshop, index) => (
                <div
                  key={workshop._id} // Usar _id como key
                  className={`p-4 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 transition-all duration-500 ${
                    pastAnimation.isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <p className="font-medium">{workshop.title}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
