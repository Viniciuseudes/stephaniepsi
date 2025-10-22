"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  const whatsappNumber = "5584998465130" // Updated WhatsApp number to 84 99846-5130
  const message = "Olá! Gostaria de agendar uma consulta."

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <Button
      onClick={handleClick}
      size="lg"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl bg-[#25D366] hover:bg-[#20BA5A] p-0 animate-in zoom-in duration-500 hover:scale-110 transition-transform"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={28} className="text-white" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
    </Button>
  )
}
