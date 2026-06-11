import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { CredibilityStrip } from "@/components/landing/CredibilityStrip";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { ProductPreview } from "@/components/landing/ProductPreview";
import { WhatYouGet } from "@/components/landing/WhatYouGet";
import { ExampleUpdates } from "@/components/landing/ExampleUpdates";
import { MarketsCovered } from "@/components/landing/MarketsCovered";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Pricing } from "@/components/landing/Pricing";
import { Testimonials } from "@/components/landing/Testimonials";
import { PartnerAds } from "@/components/landing/PartnerAds";
import { FAQ } from "@/components/landing/FAQ";
import { RiskDisclaimer } from "@/components/landing/RiskDisclaimer";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { StickyMobileCTA } from "@/components/landing/StickyMobileCTA";

export default function LandingPage() {
  return (
    <div data-testid="landing-page" className="min-h-screen bg-[#FAFAFA] text-[#111827] antialiased">
      <Header />
      <main>
        <Hero />
        <CredibilityStrip />
        <ProblemSection />
        <ProductPreview />
        <WhatYouGet />
        <ExampleUpdates />
        <MarketsCovered />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <PartnerAds />
        <FAQ />
        <RiskDisclaimer />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
      <Toaster position="top-center" richColors />
    </div>
  );
}
