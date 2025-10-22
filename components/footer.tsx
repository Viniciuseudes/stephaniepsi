"use client"

import Image from "next/image"
import Link from "next/link"
import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: "#sobre", label: "Sobre" },
    { href: "#abordagens", label: "Abordagens" },
    { href: "#atendimento", label: "Atendimento" },
    { href: "#workshops", label: "Workshops" },
    { href: "#blog", label: "Blog" },
    { href: "#depoimentos", label: "Depoimentos" },
  ]

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/psistephaniebarb?igsh=dWtrazliMHg0NHRw", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  return (
    <footer id="contato" className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LogoStephanie-LeNBZkurOYKwpRemWVYagoOQbBCd0M.png"
              alt="Stephanie Barbosa - Psicóloga"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Psicóloga clínica e educacional dedicada ao seu bem-estar emocional e desenvolvimento pessoal.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} className="text-primary" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Phone size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <span>(84) 99846-5130</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Mail size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <span>contato@stephaniebarbosa.com.br</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <span>Rua da Saudade, 762 - Lagoa Nova, Natal-RN</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-bold text-lg mb-4">Horário de Atendimento</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Segunda a Sexta: 8h - 20h</li>
              <li>Sábado: 8h - 14h</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} Stephanie Barbosa - Psicóloga. Todos os direitos reservados. CRP XX/XXXXX</p>
        </div>
      </div>
    </footer>
  )
}
