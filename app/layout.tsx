import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stephanie Barbosa - Psicóloga Clínica e Educacional",
  description:
    "Psicóloga clínica e educacional especializada em autoconhecimento e desenvolvimento pessoal. Atendimento online e presencial.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // --- AJUSTE: Definindo o JSON-LD (Schema.org) para o site ---
  const schema = {
    "@context": "https://schema.org",
    "@type": "Psychologist", // Tipo específico para Psicóloga
    name: "Stephanie Barbosa",
    description:
      "Psicóloga clínica e educacional especializada em autoconhecimento e desenvolvimento pessoal. Atendimento online e presencial em Natal/RN.",
    image: "https://psistephaniebarbosa.com/essa.jpeg", // Imagem da seção "Sobre"
    telephone: "+5584998465130", //
    email: "stephaniepsicris@gmail.com", //
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua da Saudade, 762", //
      addressLocality: "Natal",
      addressRegion: "RN",
      addressCountry: "BR",
    },
    url: "https://psistephaniebarbosa.com", // Seu domínio final
    serviceType: "Psicoterapia",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços de Psicologia",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Psicoterapia Individual", //
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Consulta de Urgência (Plantão Psicológico)", //
          },
        },
      ],
    },
  };
  // --- FIM DO AJUSTE ---

  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />

        {/* --- AJUSTE: Inserindo o script na página --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      </body>
    </html>
  );
}
