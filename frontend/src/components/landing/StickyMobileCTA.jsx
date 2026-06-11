import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scrollTo";

export const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      data-testid="sticky-mobile-cta"
      className={`md:hidden fixed bottom-0 inset-x-0 z-40 p-4 bg-white/85 backdrop-blur-xl border-t border-[#E4E4E7] transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <Button
        data-testid="sticky-mobile-cta-button"
        onClick={() => scrollToSection("pricing")}
        className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white rounded-full h-12 text-base font-semibold"
      >
        Join WhatsApp Access
      </Button>
    </div>
  );
};
