// app/page.tsx
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ApproachesSection } from "@/components/approaches-section";
import { ExperienceSection } from "@/components/experience-section";
import { ServiceFormatsSection } from "@/components/service-formats-section";
import { WorkshopsSection } from "@/components/workshops-section";
import { BlogSection } from "@/components/blog-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Header } from "@/components/header";
// 1. ATUALIZAR IMPORTS
import {
  getLatestBlogPosts,
  getNextWorkshop,
  getPastWorkshops,
} from "@/lib/sanity.queries";

export default async function Home() {
  const latestPosts = await getLatestBlogPosts();

  // --- MINHAS ADIÇÕES ---
  // 2. Buscar dados dos workshops
  const nextWorkshop = await getNextWorkshop();
  const pastWorkshops = await getPastWorkshops();
  // --- FIM DAS ADIÇÕES ---

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ApproachesSection />
      <ExperienceSection />
      <ServiceFormatsSection />

      {/* 3. Passar os dados do workshop como props */}
      <WorkshopsSection {...({ nextWorkshop, pastWorkshops } as any)} />

      <BlogSection latestPosts={latestPosts} />
      <TestimonialsSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
