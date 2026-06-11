import { Check } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/landing/Reveal";

const PLANS = [
  {
    id: "6-months",
    name: "6 Months",
    price: "$550",
    period: "USD / 6 months",
    description:
      "For traders and market followers who want premium access for the next market cycle.",
    features: [
      "WhatsApp market updates",
      "Macro and FX commentary",
      "Gold, silver, indices, bonds",
      "Chart-based observations",
      "Key levels and market context",
      "Access for 6 months",
    ],
    cta: "Join for 6 Months",
    highlighted: false,
  },
  {
    id: "yearly",
    name: "Yearly",
    badge: "Best Value",
    price: "$995",
    period: "USD / year",
    description:
      "For serious market participants who want continuous access across cycles.",
    features: [
      "Everything in 6-month access",
      "Full year of WhatsApp updates",
      "Better value over time",
      "Continued macro and intermarket coverage",
      "Ideal for active traders and professionals",
    ],
    cta: "Join Yearly",
    highlighted: true,
  },
];

export const Pricing = () => {
  const handleJoin = (plan) => {
    toast.success(`${plan} selected`, {
      description: "Checkout placeholder — the payment flow will be connected soon.",
    });
  };

  return (
    <section id="pricing" data-testid="pricing-section" className="py-20 md:py-28 bg-white border-y border-[#E4E4E7] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <h2 className="text-[28px] md:text-[36px] font-bold tracking-tight text-[#111827]">
            Choose your access
          </h2>
          <p className="mt-4 text-base leading-[28px] text-[#6B7280] max-w-2xl">
            Premium market updates delivered directly to WhatsApp.
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-4xl">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 0.1}>
              <div
                data-testid={`pricing-card-${plan.id}`}
                className={`relative h-full rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                  plan.highlighted
                    ? "bg-[#09090B] border border-[#F97316]/40 shadow-xl shadow-orange-500/[0.07]"
                    : "bg-[#FAFAFA] border border-[#E4E4E7] hover:shadow-md"
                }`}
              >
                {plan.badge && (
                  <Badge
                    data-testid="best-value-badge"
                    className="absolute -top-3 left-8 bg-[#F97316] hover:bg-[#F97316] text-white font-semibold rounded-full px-3"
                  >
                    {plan.badge}
                  </Badge>
                )}
                <h3 className={`text-xl font-semibold ${plan.highlighted ? "text-[#F5F5F5]" : "text-[#111827]"}`}>
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span
                    data-testid={`pricing-amount-${plan.id}`}
                    className={`font-mono text-5xl font-semibold tracking-tight ${
                      plan.highlighted ? "text-[#F5F5F5]" : "text-[#111827]"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span className={`font-mono text-sm ${plan.highlighted ? "text-[#A1A1AA]" : "text-[#A1A1AA]"}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`mt-4 text-[15px] leading-relaxed ${plan.highlighted ? "text-[#A1A1AA]" : "text-[#6B7280]"}`}>
                  {plan.description}
                </p>

                <ul className="mt-7 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="h-5 w-5 rounded-full bg-[#10B981]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-[#10B981]" />
                      </span>
                      <span className={`text-[15px] ${plan.highlighted ? "text-[#F5F5F5]" : "text-[#111827]"}`}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  data-testid={`pricing-cta-${plan.id}`}
                  onClick={() => handleJoin(plan.name)}
                  className={`mt-8 w-full rounded-full h-12 text-base font-semibold transition-all ${
                    plan.highlighted
                      ? "bg-[#F97316] hover:bg-[#EA580C] text-white hover:shadow-lg hover:shadow-orange-500/25"
                      : "bg-[#111827] hover:bg-[#1F2937] text-white"
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p data-testid="pricing-disclaimer" className="mt-10 text-sm text-[#A1A1AA] max-w-2xl">
            Market analysis is educational and informational only. It is not financial advice and
            does not guarantee results.
          </p>
        </Reveal>
      </div>
    </section>
  );
};
