import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { scrollToSection } from "@/lib/scrollTo";

const NAV_ITEMS = [
  { label: "What You Get", id: "what-you-get" },
  { label: "Examples", id: "examples" },
  { label: "Pricing", id: "pricing" },
  { label: "FAQ", id: "faq" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);

  const handleNav = (id) => {
    setOpen(false);
    setTimeout(() => scrollToSection(id), 80);
  };

  return (
    <header
      data-testid="sticky-header"
      className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur-xl border-b border-[#E4E4E7]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <button
          data-testid="header-wordmark"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-left"
        >
          <span className="block text-[17px] font-bold tracking-tight text-[#111827] leading-tight">
            Ashraf Laidi
          </span>
          <span className="hidden lg:block font-mono text-[9px] uppercase tracking-[0.18em] text-[#A1A1AA]">
            Incisive Global Markets Analysis
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              data-testid={`nav-link-${item.id}`}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium text-[#6B7280] hover:text-[#111827] transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            data-testid="header-signin-link"
            className="hidden md:block text-sm font-medium text-[#6B7280] hover:text-[#111827] transition-colors"
          >
            Sign in
          </button>
          <Button
            data-testid="header-cta-button"
            onClick={() => scrollToSection("pricing")}
            className="bg-[#F97316] hover:bg-[#EA580C] text-white rounded-full px-5 h-9 text-sm font-semibold transition-colors"
          >
            Join WhatsApp Access
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                data-testid="mobile-menu-trigger"
                aria-label="Open menu"
                className="md:hidden p-2 -mr-2 text-[#111827]"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white w-72">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="flex flex-col gap-2 mt-10">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    data-testid={`mobile-nav-link-${item.id}`}
                    onClick={() => handleNav(item.id)}
                    className="text-left text-base font-medium text-[#111827] py-3 border-b border-[#F4F4F5]"
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  data-testid="mobile-signin-link"
                  className="text-left text-base font-medium text-[#6B7280] py-3"
                >
                  Sign in
                </button>
                <Button
                  data-testid="mobile-menu-cta"
                  onClick={() => handleNav("pricing")}
                  className="bg-[#F97316] hover:bg-[#EA580C] text-white rounded-full mt-4 h-11 font-semibold"
                >
                  Join WhatsApp Access
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
