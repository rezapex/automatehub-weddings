import { Container } from "@/components/container";
import { Hero } from "@/components/hero";
import { Background } from "@/components/background";
import { Features } from "@/components/features";
import { Companies } from "@/components/companies";
import { GridFeatures } from "@/components/grid-features";
import { Testimonials } from "@/components/testimonials";
import { CTA } from "@/components/cta";
import LandingHero from "@/components/landing-hero";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Background />
      <Container className="flex flex-col items-center justify-between">
        <Hero />
        <Features />
        <GridFeatures />
        <Testimonials />
      </Container>
      <div className="relative">
        <Background />
        <CTA />
      </div>
    </div>
  );
}
