import { Newspaper, GitBranch, RefreshCw } from "lucide-react";
import { Reveal } from "@/components/landing/Reveal";

const PROBLEMS = [
  {
    icon: Newspaper,
    title: "Too much noise",
    copy: "Headlines move markets, but not every headline matters.",
  },
  {
    icon: GitBranch,
    title: "Too many disconnected charts",
    copy: "FX, yields, gold, indices, and central banks need to be read together.",
  },
  {
    icon: RefreshCw,
    title: "Too slow to refresh websites",
    copy: "Important updates should reach you where you already are.",
  },
];

export const ProblemSection = () => (
  <section data-testid="problem-section" className="py-20 md:py-28">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <Reveal>
        <h2 className="text-[28px] md:text-[36px] font-bold tracking-tight text-[#111827] max-w-2xl">
          Markets move fast. Context is usually late.
        </h2>
        <p className="mt-4 text-base leading-[28px] text-[#6B7280] max-w-2xl">
          Most traders either drown in headlines or wait too long for structured analysis. The
          WhatsApp Broadcast is designed to compress the market noise into timely, chart-backed
          updates with macro and intermarket context.
        </p>
      </Reveal>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {PROBLEMS.map(({ icon: Icon, title, copy }, i) => (
          <Reveal key={title} delay={i * 0.1}>
            <div
              data-testid={`problem-card-${i + 1}`}
              className="h-full bg-white rounded-xl border border-[#E4E4E7] p-7 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className="h-10 w-10 rounded-lg bg-[#F4F4F5] border border-[#E4E4E7] flex items-center justify-center mb-5">
                <Icon className="h-5 w-5 text-[#2563EB]" />
              </div>
              <h3 className="text-xl font-semibold text-[#111827]">{title}</h3>
              <p className="mt-2 text-base leading-[28px] text-[#6B7280]">{copy}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <p className="mt-12 text-lg font-medium text-[#111827]">
          That is why the premium WhatsApp access exists.
        </p>
      </Reveal>
    </div>
  </section>
);
