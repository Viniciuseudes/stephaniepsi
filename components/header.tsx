// components/header.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#sobre", label: "Sobre" },
    { href: "#abordagens", label: "Serviços" },
    { href: "#atendimento", label: "Atendimento" },
    { href: "#workshops", label: "Workshops" },
    { href: "#blog", label: "Blog" },
    { href: "#depoimentos", label: "Depoimentos" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        // --- AJUSTE AQUI ---
        // Adiciona 'isMobileMenuOpen' à condição
        isScrolled || isMobileMenuOpen
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
        // --- FIM DO AJUSTE ---
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="relative h-12 w-auto">
              <Image
                src="/images/logo-circular.png"
                alt="Stephanie Barbosa - Psicóloga"
                width={48}
                height={48}
                className={`h-12 w-12 object-contain transition-all duration-500 ${
                  isScrolled ? "opacity-100 scale-100" : "opacity-0 scale-50"
                }`}
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LogoStephanie-LeNBZkurOYKwpRemWVYagoOQbBCd0M.png"
                alt="Stephanie Barbosa - Psicóloga"
                width={180}
                height={60}
                className={`h-12 w-auto absolute top-0 left-0 transition-all duration-500 ${
                  isScrolled ? "opacity-0 scale-50" : "opacity-100 scale-100"
                }`}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="#contato">Agendar Consulta</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation 
          Esta seção agora será exibida sobre o fundo sólido do header
        */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-in slide-in-from-top">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="bg-primary hover:bg-primary/90 w-full">
              <Link href="#contato" onClick={() => setIsMobileMenuOpen(false)}>
                Agendar Consulta
              </Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
