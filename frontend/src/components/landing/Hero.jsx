import { motion } from "framer-motion";
import { ArrowRight, MessageSquareText, Play, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scrollTo";

const TICKERS = [
  { symbol: "DXY", change: "-0.34%", down: true },
  { symbol: "XAUUSD", change: "+0.62%", down: false },
  { symbol: "EURUSD", change: "+0.28%", down: false },
  { symbol: "US10Y", change: "-2.1bp", down: true },
  { symbol: "NASDAQ", change: "+0.45%", down: false },
];

const WAVEFORM = [5, 9, 14, 8, 12, 16, 10, 6, 13, 9, 15, 7, 11, 14, 6, 10, 13, 8, 5, 9, 12, 7];

const MessageTag = ({ label }) => (
  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-white border border-[#E4E4E7] text-[#6B7280]">
    {label}
  </span>
);

export const Hero = () => (
  <section data-testid="hero-section" className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
    <div className="absolute inset-0 hero-grid-bg" aria-hidden="true" />
    <div
      className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-[0.07] blur-3xl"
      style={{ background: "radial-gradient(circle, #F97316 0%, transparent 70%)" }}
      aria-hidden="true"
    />

    <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
      {/* Left: copy */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p data-testid="hero-eyebrow" className="font-mono text-xs uppercase tracking-[0.2em] text-[#F97316] font-semibold mb-6">
          Premium WhatsApp Market Updates
        </p>
        <h1
          data-testid="hero-headline"
          className="text-[40px] leading-[1.05] md:text-[56px] lg:text-[60px] font-bold tracking-tighter text-[#111827]"
        >
          Macro, FX, and intermarket analysis — delivered directly to{" "}
          <span className="text-[#F97316]">WhatsApp</span>.
        </h1>
        <p data-testid="hero-subheadline" className="mt-6 text-lg leading-[30px] text-[#6B7280] max-w-xl">
          Get timely market updates from Ashraf Laidi across currencies, gold, silver, indices, bonds,
          central banks, and risk sentiment. Built for active market participants who want context,
          charts, and key levels without the noise.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Button
            data-testid="hero-primary-cta"
            onClick={() => scrollToSection("pricing")}
            className="bg-[#F97316] hover:bg-[#EA580C] text-white rounded-full h-12 px-8 text-base font-semibold transition-all hover:shadow-lg hover:shadow-orange-500/20"
          >
            Join WhatsApp Access
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            data-testid="hero-secondary-cta"
            onClick={() => scrollToSection("examples")}
            variant="outline"
            className="rounded-full h-12 px-8 text-base font-medium border-[#E4E4E7] text-[#111827] hover:bg-[#F4F4F5] transition-colors"
          >
            See example updates
          </Button>
        </div>

        <p data-testid="hero-trust-microcopy" className="mt-5 text-sm text-[#A1A1AA]">
          Educational market analysis. No hype. No guaranteed returns. Cancel anytime placeholder.
        </p>
      </motion.div>

      {/* Right: WhatsApp preview + dashboard */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        className="relative"
      >
        <div className="flex items-start justify-center lg:justify-end gap-5">
          {/* WhatsApp-style preview card */}
          <div
            data-testid="hero-whatsapp-preview"
            className="relative z-10 w-full max-w-sm bg-white rounded-2xl border border-[#E4E4E7] shadow-xl shadow-black/[0.06] overflow-hidden transition-transform duration-300 hover:-translate-y-1"
          >
            {/* Card header */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-[#F4F4F5] bg-[#FAFAFA]">
              <div className="h-10 w-10 rounded-full bg-[#111827] flex items-center justify-center">
                <Radio className="h-5 w-5 text-[#F97316]" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-[#111827]">Ashraf Laidi Broadcast</p>
                <p className="text-xs text-[#10B981] flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] inline-block" />
                  New market update
                </p>
              </div>
              <MessageSquareText className="h-4 w-4 text-[#A1A1AA]" />
            </div>

            <div className="p-5 space-y-3">
              {/* Text message */}
              <div className="bg-[#F4F4F5] rounded-xl rounded-tl-sm p-4 border border-[#E4E4E7]">
                <p className="text-[15px] leading-relaxed text-[#111827]">
                  Gold and silver remain supported as yields soften and USD momentum fades. Watch
                  XAG breakout confirmation above key resistance.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {["Gold", "Silver", "USD", "Yields"].map((tag) => (
                    <MessageTag key={tag} label={tag} />
                  ))}
                </div>
                <p className="font-mono text-[10px] text-[#A1A1AA] mt-3 text-right">Today • 09:42</p>
              </div>

              {/* Voice note */}
              <div
                data-testid="hero-voice-note"
                className="bg-[#F4F4F5] rounded-xl rounded-tl-sm px-4 py-3 border border-[#E4E4E7] flex items-center gap-3"
              >
                <span className="h-9 w-9 rounded-full bg-[#10B981] flex items-center justify-center shrink-0">
                  <Play className="h-3.5 w-3.5 text-white fill-white ml-0.5" />
                </span>
                <span className="flex items-center gap-[3px] flex-1" aria-hidden="true">
                  {WAVEFORM.map((h, i) => (
                    <span
                      key={i}
                      className="w-[3px] rounded-full bg-[#A1A1AA]"
                      style={{ height: `${h}px` }}
                    />
                  ))}
                </span>
                <span className="font-mono text-[10px] text-[#A1A1AA] shrink-0">1:24 • 09:45</span>
              </div>

              {/* Mini chart */}
              <div className="rounded-xl border border-[#E4E4E7] bg-white p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[11px] text-[#6B7280]">XAGUSD · 4H</span>
                  <span className="font-mono text-[11px] text-[#10B981]">+1.24%</span>
                </div>
                <svg viewBox="0 0 280 64" className="w-full h-16" role="img" aria-label="Silver price line chart preview">
                  <defs>
                    <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2563EB" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,50 L20,46 L40,48 L60,40 L80,42 L100,34 L120,38 L140,28 L160,30 L180,22 L200,26 L220,16 L240,20 L260,10 L280,12 L280,64 L0,64 Z"
                    fill="url(#chartFill)"
                  />
                  <path
                    d="M0,50 L20,46 L40,48 L60,40 L80,42 L100,34 L120,38 L140,28 L160,30 L180,22 L200,26 L220,16 L240,20 L260,10 L280,12"
                    fill="none"
                    stroke="#2563EB"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Side column: dashboard + formats */}
          <div className="hidden md:flex flex-col gap-4 w-48 shrink-0 mt-8">
            <motion.div
              data-testid="hero-market-dashboard"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="bg-[#09090B] rounded-xl border border-white/10 p-4 shadow-2xl shadow-black/20"
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-[#A1A1AA] mb-3">Markets</p>
              <div className="space-y-2.5">
                {TICKERS.map((t) => (
                  <div key={t.symbol} className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#F5F5F5]">{t.symbol}</span>
                    <span
                      className={`font-mono text-[11px] px-1.5 py-0.5 rounded ${
                        t.down ? "text-[#EF4444] bg-[#EF4444]/10" : "text-[#10B981] bg-[#10B981]/10"
                      }`}
                    >
                      {t.change}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <div
              data-testid="hero-formats-card"
              className="bg-white rounded-xl border border-[#E4E4E7] p-4 shadow-sm"
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-[#A1A1AA] mb-2.5">
                Update formats
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["Text", "Charts", "Voice notes", "Video links"].map((f) => (
                  <span
                    key={f}
                    className="font-mono text-[10px] px-2 py-1 rounded bg-[#F4F4F5] border border-[#E4E4E7] text-[#6B7280]"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
