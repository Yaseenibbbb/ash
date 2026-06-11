const LINKS = [
  "Insights",
  "Research",
  "Media",
  "About",
  "Contact",
  "Risk Warning",
  "Terms",
  "Privacy Policy",
];

export const Footer = () => (
  <footer data-testid="footer" className="bg-[#09090B] border-t border-white/[0.06] pt-14 pb-24 md:pb-14">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div>
          <p className="text-lg font-bold tracking-tight text-[#F5F5F5]">Ashraf Laidi</p>
          <p className="mt-2 text-sm text-[#A1A1AA] max-w-xs">
            Independent macro, FX, and intermarket analysis.
          </p>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 sm:grid-cols-4 gap-x-12 gap-y-3">
          {LINKS.map((link) => (
            <button
              key={link}
              data-testid={`footer-link-${link.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-left text-sm text-[#A1A1AA] hover:text-[#F5F5F5] transition-colors"
            >
              {link}
            </button>
          ))}
        </nav>
      </div>
      <div className="mt-12 pt-6 border-t border-white/[0.06]">
        <p className="font-mono text-xs text-[#A1A1AA]">© 2026 Ashraf Laidi. All rights reserved.</p>
      </div>
    </div>
  </footer>
);
