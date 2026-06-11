const TICKERS = [
  { s: "EURUSD", p: "1.1851", chg: "+0.12%", up: true },
  { s: "USDJPY", p: "111.52", chg: "-0.21%", up: false },
  { s: "GBPUSD", p: "1.3772", chg: "+0.08%", up: true },
  { s: "AUDUSD", p: "0.7485", chg: "+0.15%", up: true },
  { s: "USDCAD", p: "1.2406", chg: "-0.10%", up: false },
  { s: "GBPJPY", p: "153.59", chg: "-0.14%", up: false },
  { s: "EURJPY", p: "132.15", chg: "-0.09%", up: false },
  { s: "AUDJPY", p: "83.48", chg: "+0.06%", up: true },
  { s: "CADJPY", p: "89.86", chg: "+0.11%", up: true },
  { s: "SILVER", p: "26.23", chg: "+1.24%", up: true },
];

export const TickerStrip = () => (
  <div data-testid="ticker-strip" className="pt-16 bg-white border-b border-[#E4E4E7]">
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-2.5 flex items-center gap-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {TICKERS.map((t) => (
        <span key={t.s} className="flex items-center gap-2 shrink-0 font-mono text-xs">
          <span className="text-[#6B7280] font-medium">{t.s}</span>
          <span className="text-[#111827]">{t.p}</span>
          <span className={t.up ? "text-[#10B981]" : "text-[#EF4444]"}>{t.chg}</span>
        </span>
      ))}
    </div>
  </div>
);
