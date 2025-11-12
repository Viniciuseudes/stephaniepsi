"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Linkedin, Link2, Check, MessageCircle } from "lucide-react"; // Usando MessageCircle para WhatsApp
import { cn } from "@/lib/utils";

interface ShareButtonsProps {
  title: string;
  summary: string;
  className?: string;
}

export function ShareButtons({ title, summary, className }: ShareButtonsProps) {
  const [currentUrl, setCurrentUrl] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    // Garante que o window.location.href seja lido apenas no cliente
    setCurrentUrl(window.location.href);
  }, []);

  if (!currentUrl) {
    // Não renderiza nada no servidor ou antes da hidratação
    return null;
  }

  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedSummary = encodeURIComponent(summary);

  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedTitle} ${encodedUrl}`;
  const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedSummary}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500); // Mostra "Copiado!" por 2.5s
    });
  };

  return (
    <div
      className={cn("flex items-center justify-center gap-2 mb-8", className)}
    >
      <span className="text-sm font-medium text-muted-foreground mr-2">
        Compartilhar:
      </span>

      {/* WhatsApp */}
      <Button
        variant="outline"
        size="icon"
        asChild
        aria-label="Compartilhar no WhatsApp"
      >
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          {/* Usando MessageCircle que já está no projeto */}
          <MessageCircle className="h-4 w-4" />
        </a>
      </Button>

      {/* LinkedIn */}
      <Button
        variant="outline"
        size="icon"
        asChild
        aria-label="Compartilhar no LinkedIn"
      >
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <Linkedin className="h-4 w-4" />
        </a>
      </Button>

      {/* Copy Link */}
      <Button
        variant="outline"
        size="icon"
        onClick={handleCopy}
        aria-label="Copiar link"
      >
        {isCopied ? (
          <Check className="h-4 w-4 text-green-600" />
        ) : (
          <Link2 className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
}
