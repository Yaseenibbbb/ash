import { Reveal } from "@/components/landing/Reveal";

const MARKETS = [
  "FX Majors",
  "EURUSD",
  "GBPUSD",
  "USDJPY",
  "Gold",
  "Silver",
  "Oil",
  "US Dollar Index",
  "US 10Y Yield",
  "Global Yield Curves",
  "Nasdaq",
  "S&P 500",
  "Central Banks",
  "Risk Sentiment",
  "Commodities",
  "Bond Spreads",
];

export const MarketsCovered = () => (
  <section data-testid="markets-covered-section" className="py-20 md:py-28 bg-[#09090B] border-t border-white/[0.06]">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <Reveal>
        <h2 className="text-[28px] md:text-[36px] font-bold tracking-tight text-[#F5F5F5]">
          Markets covered
        </h2>
        <p className="mt-4 text-base leading-[28px] text-[#A1A1AA] max-w-2xl">
          Focused on macro relationships, not isolated signals.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-10 flex flex-wrap gap-2.5">
          {MARKETS.map((m) => (
            <span
              key={m}
              data-testid={`market-chip-${m.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className="font-mono text-sm px-4 py-2 rounded-lg bg-[#18181B] border border-white/[0.08] text-[#F5F5F5] transition-colors hover:border-[#2563EB]/50 hover:text-[#60A5FA]"
            >
              {m}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <p className="mt-10 text-lg leading-[30px] text-[#A1A1AA] max-w-2xl border-l-2 border-[#F97316] pl-5">
          The value is not only in watching each market. It is in understanding how they confirm or
          contradict each other.
        </p>
      </Reveal>
    </div>
  </section>
);
