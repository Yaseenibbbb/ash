import { BookOpen, Tv, BarChart3, Archive } from "lucide-react";

const ITEMS = [
  { icon: BookOpen, text: "Author of Currency Trading and Intermarket Analysis" },
  { icon: Tv, text: "Featured on CNBC, Bloomberg & Al Arabiya" },
  { icon: BarChart3, text: "Macro • FX • Commodities • Bonds" },
  { icon: Archive, text: "Research archive since 2008" },
];

export const CredibilityStrip = () => (
  <section data-testid="credibility-strip" className="border-y border-[#E4E4E7] bg-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {ITEMS.map(({ icon: Icon, text }) => (
        <div key={text} className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-[#F4F4F5] border border-[#E4E4E7] flex items-center justify-center shrink-0">
            <Icon className="h-4 w-4 text-[#6B7280]" />
          </div>
          <p className="text-sm font-medium text-[#6B7280] leading-snug">{text}</p>
        </div>
      ))}
    </div>
  </section>
);
