import { useState } from "react";
import { X } from "lucide-react";

export const TopAdBanner = () => (
  <div data-testid="top-ad-banner" className="pt-16 bg-white border-b border-[#E4E4E7]">
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-center gap-3 sm:gap-6">
      <span className="hidden sm:block font-mono text-[10px] uppercase tracking-widest text-[#A1A1AA] rotate-180 [writing-mode:vertical-rl]">
        Sponsored
      </span>
      <img
        src="https://customer-assets.emergentagent.com/job_intermarket-access/artifacts/jr9xsznh_image.png"
        alt="Trade smarter with Eightcap and Ashraf Laidi — Eightcap partner campaign"
        className="h-28 sm:h-32 w-auto rounded-lg border border-[#E4E4E7] transition-transform duration-300 hover:scale-[1.02]"
      />
      <img
        src="https://customer-assets.emergentagent.com/job_intermarket-access/artifacts/z1cxdhp5_image.png"
        alt="Ashraf Laidi live in XM's Advanced Local Room — XM 10 Years Anniversary campaign"
        className="h-28 sm:h-32 w-auto rounded-lg border border-[#E4E4E7] transition-transform duration-300 hover:scale-[1.02]"
      />
    </div>
  </div>
);

export const SideAd = () => {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <aside
      data-testid="side-ad"
      className="hidden xl:block fixed right-4 top-1/2 -translate-y-1/2 z-40 w-44"
      aria-label="Sponsored advertisement"
    >
      <div className="relative bg-white rounded-xl border border-[#E4E4E7] shadow-lg overflow-hidden">
        <div className="flex items-center justify-between px-2.5 py-1.5 border-b border-[#F4F4F5]">
          <span className="font-mono text-[9px] uppercase tracking-widest text-[#A1A1AA]">Sponsored</span>
          <button
            data-testid="side-ad-close"
            onClick={() => setDismissed(true)}
            aria-label="Dismiss advertisement"
            className="text-[#A1A1AA] hover:text-[#111827] transition-colors"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
        <img
          src="https://customer-assets.emergentagent.com/job_intermarket-access/artifacts/z1cxdhp5_image.png"
          alt="Ashraf Laidi live in XM's Advanced Local Room — XM partner campaign"
          className="w-full h-auto block"
        />
      </div>
    </aside>
  );
};
