import { Globe2, LineChart, Network, MessageCircle, AlignLeft, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/landing/Reveal";
import { scrollToSection } from "@/lib/scrollTo";

const BENEFITS = [
  {
    icon: Globe2,
    title: "Timely macro updates",
    copy: "Market observations around FX, commodities, indices, bonds, central banks, and global risk sentiment.",
  },
  {
    icon: LineChart,
    title: "Chart-based analysis",
    copy: "Visual setups, key levels, and chart context without overcrowded technical noise.",
  },
  {
    icon: Network,
    title: "Intermarket framework",
    copy: "Understand how currencies, yields, metals, equities, and central bank expectations connect.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp delivery",
    copy: "Updates arrive directly where you can see them quickly, instead of requiring constant website refreshes.",
  },
  {
    icon: AlignLeft,
    title: "Concise market context",
    copy: "Short, direct updates designed for active market participants.",
  },
  {
    icon: ShieldCheck,
    title: "Premium member focus",
    copy: "A cleaner, more focused channel for serious market followers.",
  },
];

export const WhatYouGet = () => (
  <section id="what-you-get" data-testid="what-you-get-section" className="py-20 md:py-28 scroll-mt-20">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <Reveal>
        <h2 className="text-[28px] md:text-[36px] font-bold tracking-tight text-[#111827]">
          What you get inside
        </h2>
      </Reveal>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {BENEFITS.map(({ icon: Icon, title, copy }, i) => (
          <Reveal key={title} delay={(i % 3) * 0.08}>
            <div
              data-testid={`benefit-card-${i + 1}`}
              className="h-full bg-white rounded-xl border border-[#E4E4E7] p-7 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className="h-10 w-10 rounded-lg bg-[#F97316]/[0.08] border border-[#F97316]/20 flex items-center justify-center mb-5">
                <Icon className="h-5 w-5 text-[#F97316]" />
              </div>
              <h3 className="text-xl font-semibold text-[#111827]">{title}</h3>
              <p className="mt-2 text-base leading-[28px] text-[#6B7280]">{copy}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <p className="text-lg font-medium text-[#111827]">Ready to receive updates directly?</p>
          <Button
            data-testid="what-you-get-cta"
            onClick={() => scrollToSection("pricing")}
            className="bg-[#F97316] hover:bg-[#EA580C] text-white rounded-full h-11 px-7 font-semibold transition-all hover:shadow-lg hover:shadow-orange-500/20"
          >
            Join WhatsApp Access
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </Reveal>
    </div>
  </section>
);
