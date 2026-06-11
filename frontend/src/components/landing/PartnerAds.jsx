import { Reveal } from "@/components/landing/Reveal";

const ADS = [
  {
    id: "xm",
    src: "https://customer-assets.emergentagent.com/job_intermarket-access/artifacts/z1cxdhp5_image.png",
    alt: "Ashraf Laidi live in XM's Advanced Local Room — XM 10 Years Anniversary campaign (Arabic)",
  },
  {
    id: "eightcap",
    src: "https://customer-assets.emergentagent.com/job_intermarket-access/artifacts/jr9xsznh_image.png",
    alt: "Trade smarter with Eightcap and Ashraf Laidi — Eightcap partner campaign",
  },
];

export const PartnerAds = () => (
  <section data-testid="partner-ads-section" className="py-20 md:py-28 bg-white border-y border-[#E4E4E7]">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A1A1AA] font-semibold mb-3">
          Partner Campaigns
        </p>
        <h2 className="text-[28px] md:text-[36px] font-bold tracking-tight text-[#111827]">
          Trusted by leading brokers
        </h2>
        <p className="mt-4 text-base leading-[28px] text-[#6B7280] max-w-2xl">
          Ashraf Laidi's analysis is featured in official campaigns with global brokerages.
        </p>
      </Reveal>

      <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-4xl">
        {ADS.map((ad, i) => (
          <Reveal key={ad.id} delay={i * 0.1}>
            <div
              data-testid={`partner-ad-${ad.id}`}
              className="rounded-xl border border-[#E4E4E7] overflow-hidden bg-[#FAFAFA] transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <img src={ad.src} alt={ad.alt} className="w-full h-auto block" loading="lazy" />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
