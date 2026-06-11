import { Reveal } from "@/components/landing/Reveal";

const EXAMPLES = [
  {
    type: "FX",
    title: "USD pressure after yields roll over",
    message:
      "DXY is losing short-term momentum as US yields soften. EURUSD and gold both confirm the move for now. Watch for reversal if yields regain traction.",
    tags: ["DXY", "EURUSD", "Gold", "US10Y"],
    time: "Mon • 09:18",
  },
  {
    type: "Metals",
    title: "Silver confirmation setup",
    message:
      "Silver remains the cleaner momentum read versus gold. XAG breakout needs confirmation from USD weakness and stable risk appetite.",
    tags: ["Silver", "Gold", "USD", "Risk"],
    time: "Tue • 13:44",
  },
  {
    type: "Indices",
    title: "Nasdaq extension warning",
    message:
      "Nasdaq remains extended versus moving averages. Momentum can continue, but risk/reward becomes less attractive without fresh macro support.",
    tags: ["Nasdaq", "Risk", "Momentum"],
    time: "Wed • 15:30",
  },
  {
    type: "Central Banks",
    title: "Fed pricing and FX reaction",
    message:
      "FX reaction remains tied to rate expectations. Watch whether the bond market confirms the Fed repricing before chasing USD moves.",
    tags: ["Fed", "Bonds", "USD"],
    time: "Thu • 10:05",
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
