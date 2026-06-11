import { ShieldAlert } from "lucide-react";
import { Reveal } from "@/components/landing/Reveal";

export const RiskDisclaimer = () => (
  <section id="risk-disclaimer" data-testid="risk-disclaimer-section" className="py-16 md:py-20 scroll-mt-20">
    <div className="max-w-4xl mx-auto px-6 lg:px-10">
      <Reveal>
        <div className="rounded-xl border border-[#E4E4E7] bg-[#F4F4F5] p-7 md:p-9">
          <div className="flex items-center gap-3 mb-4">
            <ShieldAlert className="h-5 w-5 text-[#6B7280]" />
            <h2 className="text-xl font-semibold text-[#111827]">Important risk notice</h2>
          </div>
          <p className="text-sm leading-[24px] text-[#6B7280]">
            Trading and investing involve risk. Market analysis provided through this service is for
            educational and informational purposes only and does not constitute investment advice,
            financial advice, or a recommendation to buy or sell any instrument. Past performance,
            examples, or market commentary do not guarantee future results. Subscribers are
            responsible for their own decisions and risk management.
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);
