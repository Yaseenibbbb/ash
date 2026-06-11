import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/landing/Reveal";
import { scrollToSection } from "@/lib/scrollTo";

export const FinalCTA = () => (
  <section data-testid="final-cta-section" className="relative py-24 md:py-32 bg-[#09090B] overflow-hidden">
    <div className="absolute inset-0 dark-grid-bg" aria-hidden="true" />
    <div
      className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-10 blur-3xl"
      style={{ background: "radial-gradient(circle, #F97316 0%, transparent 70%)" }}
      aria-hidden="true"
    />
    <div className="relative max-w-3xl mx-auto px-6 lg:px-10 text-center">
      <Reveal>
        <h2 className="text-[32px] md:text-[44px] font-bold tracking-tight leading-tight text-[#F5F5F5]">
          Get Ashraf Laidi's market updates directly on WhatsApp.
        </h2>
        <p className="mt-5 text-lg leading-[30px] text-[#A1A1AA]">
          Join premium WhatsApp access for timely macro, FX, commodities, indices, bonds, and
          intermarket analysis.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            data-testid="final-cta-button"
            onClick={() => scrollToSection("pricing")}
            className="bg-[#F97316] hover:bg-[#EA580C] text-white rounded-full h-13 px-9 py-6 text-base font-semibold transition-all hover:shadow-lg hover:shadow-orange-500/25"
          >
            Join WhatsApp Access
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <button
            data-testid="final-cta-disclaimer-link"
            onClick={() => scrollToSection("risk-disclaimer")}
            className="text-sm font-medium text-[#A1A1AA] hover:text-[#F5F5F5] underline underline-offset-4 transition-colors"
          >
            Read risk disclaimer
          </button>
        </div>
        <p className="mt-7 font-mono text-xs uppercase tracking-[0.18em] text-[#A1A1AA]">
          No hype. No guaranteed returns. Just focused market analysis.
        </p>
      </Reveal>
    </div>
  </section>
);
