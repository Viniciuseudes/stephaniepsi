import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ApproachesSection } from "@/components/approaches-section"
import { ExperienceSection } from "@/components/experience-section"
import { ServiceFormatsSection } from "@/components/service-formats-section"
import { WorkshopsSection } from "@/components/workshops-section"
import { BlogSection } from "@/components/blog-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ApproachesSection />
      <ExperienceSection />
      <ServiceFormatsSection />
      <WorkshopsSection />
      <BlogSection />
      <TestimonialsSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
