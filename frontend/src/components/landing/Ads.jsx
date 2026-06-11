import { useState } from "react";
import { X } from "lucide-react";

const ADS = [
  {
    id: "eightcap",
    src: "https://customer-assets.emergentagent.com/job_intermarket-access/artifacts/jr9xsznh_image.png",
    alt: "Trade smarter with Eightcap and Ashraf Laidi — Eightcap partner campaign",
  },
  {
    id: "xm",
    src: "https://customer-assets.emergentagent.com/job_intermarket-access/artifacts/z1cxdhp5_image.png",
    alt: "Ashraf Laidi live in XM's Advanced Local Room — XM 10 Years Anniversary campaign",
  },
];

const FloatingAd = ({ ad, side }) => {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <aside
      data-testid={`floating-ad-${ad.id}`}
      className={`hidden xl:block fixed ${side === "left" ? "left-4" : "right-4"} top-1/2 -translate-y-1/2 z-40 w-44`}
      aria-label="Sponsored advertisement"
    >
      <div className="relative bg-white rounded-xl border border-[#E4E4E7] shadow-lg overflow-hidden">
        <div className="flex items-center justify-between px-2.5 py-1.5 border-b border-[#F4F4F5]">
          <span className="font-mono text-[9px] uppercase tracking-widest text-[#A1A1AA]">Sponsored</span>
          <button
            data-testid={`floating-ad-close-${ad.id}`}
            onClick={() => setDismissed(true)}
            aria-label="Dismiss advertisement"
            className="text-[#A1A1AA] hover:text-[#111827] transition-colors"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
        <img src={ad.src} alt={ad.alt} className="w-full h-auto block" />
      </div>
    </aside>
  );
};

export const FloatingAds = () => (
  <>
    <FloatingAd ad={ADS[0]} side="left" />
    <FloatingAd ad={ADS[1]} side="right" />
  </>
);
