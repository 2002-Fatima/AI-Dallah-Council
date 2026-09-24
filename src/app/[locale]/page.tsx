import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features";
import { ShowcaseSection } from "@/components/sections/showcase";
import { VisionSection } from "@/components/sections/vision";
import { CtaSection } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ShowcaseSection />
        <VisionSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}