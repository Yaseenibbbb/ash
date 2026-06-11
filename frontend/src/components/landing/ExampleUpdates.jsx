import { Reveal } from "@/components/landing/Reveal";

const EXAMPLES = [
  {
    type: "Metals",
    title: "Silver Confluence",
    message:
      "Take a look at the message from Silver's daily and weekly charts. Does this mean $60/oz is inevitable? Both timeframes are aligning at key confluence levels.",
    tags: ["Silver", "XAGUSD", "Charts", "Confluence"],
    time: "Jun 11 • 10:47",
  },
  {
    type: "Indices",
    title: "How we obtained 28200 & 7280",
    message:
      "On Monday, we posted a chart showing the path to 28200 on Nasdaq100 — published when Nasdaq was at 28957. On Tuesday, Nasdaq recovered to 29800 ahead of the NY open, before dropping 1600 pts to print a session low of 28200 — not 28250 nor 28170, but 28200.",
    tags: ["Nasdaq", "SP500", "Key Levels"],
    time: "Jun 10 • 10:37",
  },
  {
    type: "Indices",
    title: "Nasdaq Bounce",
    message:
      "Nasdaq100 peaked at the 19% extension from its 200-day moving average, before tumbling 6%. The market will likely hold above the 28000 support — underlined by the May 6 gap — and capped by the 29700 resistance. More details to members of the WhatsApp Bdcst Group.",
    tags: ["Nasdaq", "200-DMA", "Gaps", "Risk"],
    time: "Jun 8 • 12:17",
  },
  {
    type: "FX",
    title: "USD pressure after yields roll over",
    message:
      "DXY is losing short-term momentum as US yields soften. EURUSD and gold both confirm the move for now. Watch for reversal if yields regain traction.",
    tags: ["DXY", "EURUSD", "Gold", "US10Y"],
    time: "Jun 5 • 09:18",
  },
];

export const ExampleUpdates = () => (
  <section
    id="examples"
    data-testid="example-updates-section"
    className="relative py-20 md:py-28 bg-[#09090B] scroll-mt-20 overflow-hidden"
  >
    <div className="absolute inset-0 dark-grid-bg" aria-hidden="true" />
    <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
      <Reveal>
        <h2 className="text-[28px] md:text-[36px] font-bold tracking-tight text-[#F5F5F5]">
          Example updates
        </h2>
        <p className="mt-4 text-base leading-[28px] text-[#A1A1AA] max-w-2xl">
          Preview the format. Short, structured, and focused on what matters.
        </p>
      </Reveal>

      <div className="mt-12 grid md:grid-cols-2 gap-6">
        {EXAMPLES.map((ex, i) => (
          <Reveal key={ex.title} delay={(i % 2) * 0.1}>
            <div
              data-testid={`example-update-card-${i + 1}`}
              className="h-full bg-[#18181B] rounded-xl border border-white/[0.08] p-7 transition-all duration-300 hover:border-white/20 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[11px] uppercase tracking-widest px-2.5 py-1 rounded bg-[#F97316]/10 text-[#F97316] border border-[#F97316]/20">
                  {ex.type}
                </span>
                <span className="font-mono text-[11px] text-[#A1A1AA]">{ex.time}</span>
              </div>
              <h3 className="text-xl font-semibold text-[#F5F5F5]">{ex.title}</h3>
              <p className="mt-3 text-[15px] leading-[26px] text-[#A1A1AA]">{ex.message}</p>
              <div className="flex flex-wrap gap-1.5 mt-5">
                {ex.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-[#A1A1AA]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
