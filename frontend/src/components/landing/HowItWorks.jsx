import { Reveal } from "@/components/landing/Reveal";

const STEPS = [
  {
    num: "01",
    title: "Choose your access",
    copy: "Select 6-month or yearly WhatsApp access.",
  },
  {
    num: "02",
    title: "Complete subscription",
    copy: "Use the checkout flow placeholder and register your WhatsApp number.",
  },
  {
    num: "03",
    title: "Receive updates",
    copy: "Get premium market updates directly through WhatsApp.",
  },
];

export const HowItWorks = () => (
  <section data-testid="how-it-works-section" className="py-20 md:py-28">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <Reveal>
        <h2 className="text-[28px] md:text-[36px] font-bold tracking-tight text-[#111827]">
          How it works
        </h2>
      </Reveal>

      <div className="mt-12 grid md:grid-cols-3 gap-6 relative">
        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-[#E4E4E7]" aria-hidden="true" />
        {STEPS.map((step, i) => (
          <Reveal key={step.num} delay={i * 0.1}>
            <div data-testid={`how-it-works-step-${i + 1}`} className="relative bg-white rounded-xl border border-[#E4E4E7] p-7">
              <span className="font-mono text-sm font-semibold text-[#F97316] bg-[#F97316]/[0.08] border border-[#F97316]/20 rounded-full h-10 w-10 flex items-center justify-center mb-5">
                {step.num}
              </span>
              <h3 className="text-xl font-semibold text-[#111827]">{step.title}</h3>
              <p className="mt-2 text-base leading-[28px] text-[#6B7280]">{step.copy}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
