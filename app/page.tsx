// app/page.tsx
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ApproachesSection } from "@/components/approaches-section";
import { ExperienceSection } from "@/components/experience-section";
import { ServiceFormatsSection } from "@/components/service-formats-section";
import { WorkshopsSection } from "@/components/workshops-section";
import { BlogSection } from "@/components/blog-section"; // Importar o componente
import { TestimonialsSection } from "@/components/testimonials-section";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Header } from "@/components/header";
import { getLatestBlogPosts } from "@/lib/sanity.queries"; // Importar função de busca

export default async function Home() {
  const latestPosts = await getLatestBlogPosts(); // Buscar os posts recentes

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ApproachesSection />
      <ExperienceSection />
      <ServiceFormatsSection />
      <WorkshopsSection />
      {/* Passar os posts como prop */}
      <BlogSection latestPosts={latestPosts} />
      <TestimonialsSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
