import { Check } from "lucide-react";
import { Reveal } from "@/components/landing/Reveal";

const MESSAGES = [
  {
    text: "EURUSD remains sensitive to widening US-EU yield spreads. Watch confirmation around the next ECB/Fed repricing window.",
    tags: ["EURUSD", "Bonds", "ECB", "Fed"],
    time: "Today • 08:15",
  },
  {
    text: "Silver continues to outperform gold on risk-on metals demand. XAG/XAU ratio remains the key confirmation chart.",
    tags: ["Silver", "Gold", "Ratio", "Risk"],
    time: "Today • 11:02",
  },
  {
    text: "DXY weakness is not only an FX story. Watch US yields, equities, and commodities for confirmation.",
    tags: ["DXY", "Yields", "Indices", "Commodities"],
    time: "Today • 14:37",
  },
];

const INCLUDES = [
  "Market context",
  "Asset focus",
  "Key levels",
  "Chart snapshot",
  "Intermarket confirmation",
  "Risk note",
];

export const ProductPreview = () => (
  <section data-testid="product-preview-section" className="py-20 md:py-28 bg-white border-y border-[#E4E4E7]">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <Reveal>
        <h2 className="text-[28px] md:text-[36px] font-bold tracking-tight text-[#111827] max-w-2xl">
          Private market updates, sent directly to WhatsApp.
        </h2>
        <p className="mt-4 text-base leading-[28px] text-[#6B7280] max-w-2xl">
          Receive concise updates, chart context, key levels, and intermarket observations in a fast
          broadcast format — as text, charts, voice notes, and links to deeper analysis.
        </p>
      </Reveal>

      <div className="mt-12 grid lg:grid-cols-3 gap-10">
        {/* Stacked messages */}
        <div className="lg:col-span-2 space-y-5">
          {MESSAGES.map((msg, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div
                data-testid={`product-message-card-${i + 1}`}
                className="bg-[#FAFAFA] rounded-xl rounded-tl-sm border border-[#E4E4E7] p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                style={{ marginLeft: `${i * 16}px`, maxWidth: "640px" }}
              >
                <p className="text-base leading-[28px] text-[#111827]">{msg.text}</p>
                <div className="flex flex-wrap items-center gap-1.5 mt-4">
                  {msg.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] px-2 py-0.5 rounded bg-white border border-[#E4E4E7] text-[#6B7280]"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="font-mono text-[11px] text-[#A1A1AA] ml-auto">{msg.time}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Side panel */}
        <Reveal delay={0.2}>
          <div
            data-testid="typical-update-panel"
            className="bg-[#09090B] rounded-xl border border-white/10 p-7 lg:sticky lg:top-24"
          >
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#F97316] font-semibold mb-5">
              Typical update includes
            </p>
            <ul className="space-y-3.5">
              {INCLUDES.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-5 w-5 rounded-full bg-[#10B981]/10 flex items-center justify-center shrink-0">
                    <Check className="h-3 w-3 text-[#10B981]" />
                  </span>
                  <span className="text-[15px] text-[#F5F5F5]">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-5 border-t border-white/10">
              <p className="text-sm leading-relaxed text-[#A1A1AA]">
                A broadcast format — members remain anonymous to one another, and can ask Ashraf
                questions individually.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
