import { Reveal } from "@/components/landing/Reveal";

const TESTIMONIALS = [
  {
    name: "Joe",
    time: "18:08",
    quote:
      "Real-time, incisive analysis and trade ideas with frequent daily updates across the world's most traded markets. Paid for itself in the first month, and actually cheaper than a rolling monthly subscription too.",
  },
  {
    name: "Christine",
    time: "07:08",
    quote:
      "I have been a member of the WhatsApp group since mid May and have really enjoyed the timely voice notes and the extra trades that come with this service. At times it feels like he's your mentor — explaining concepts, market behaviour and why we should stand down from trading and be patient, which for less experienced traders is an invaluable learning. This service has complemented my own trading very nicely.",
  },
  {
    name: "Phil",
    time: "14:35",
    quote:
      "Hi Ashraf. I took out the 6 month subscription a week or so ago. I just want to say this WhatsApp group is brilliant. Info is received nice and quick. Thank you.",
  },
  {
    name: "Michael",
    time: "11:21",
    quote:
      "In silver you called a range for the top and timeframe and were basically bang on for both. Are you kidding me? Who does that? I marked up a few possible turning points on the chart at the right time.",
  },
  {
    name: "Vaughn",
    time: "16:54",
    quote:
      "I have been a subscriber to Ashraf's premium service for almost seven years. His technical knowledge is immense. The WhatsApp group is a massive advantage for new traders & I totally recommend it.",
  },
  {
    name: "Andrew",
    time: "00:42",
    quote:
      "Ashraf, thanks for all the notes (both written and voice). Provides a lot of colour and better clarity to navigate these markets on a daily basis. Appreciate the work and effort put in.",
  },
  {
    name: "Dragan",
    time: "14:12",
    quote:
      "Don't know how you made these two calls, but I take my hat off to you!!! You are a wizard!! Thank you soooo much. Keep them coming.",
  },
];

const AVATAR_COLORS = [
  "bg-[#2563EB]/10 text-[#2563EB]",
  "bg-[#F97316]/10 text-[#F97316]",
  "bg-[#10B981]/10 text-[#10B981]",
];

export const Testimonials = () => (
  <section data-testid="testimonials-section" className="py-20 md:py-28">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <Reveal>
        <h2 className="text-[28px] md:text-[36px] font-bold tracking-tight text-[#111827]">
          What members value
        </h2>
        <p className="mt-4 text-base leading-[28px] text-[#6B7280] max-w-2xl">
          Real messages from members of the WhatsApp Broadcast Group.
        </p>
      </Reveal>

      <div className="mt-12 columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} delay={(i % 3) * 0.08} className="break-inside-avoid mb-6">
            <figure
              data-testid={`testimonial-card-${i + 1}`}
              className="bg-white rounded-xl rounded-tl-sm border border-[#E4E4E7] p-6 transition-all duration-300 hover:shadow-md"
            >
              <figcaption className="flex items-center gap-3 mb-4">
                <span
                  className={`h-9 w-9 rounded-full flex items-center justify-center text-sm font-semibold ${AVATAR_COLORS[i % 3]}`}
                  aria-hidden="true"
                >
                  {t.name.charAt(0)}
                </span>
                <span className="text-sm font-semibold text-[#111827]">{t.name}</span>
                <span className="font-mono text-[11px] text-[#A1A1AA] ml-auto">{t.time}</span>
              </figcaption>
              <blockquote className="text-[15px] leading-[26px] text-[#374151]">
                “{t.quote}”
              </blockquote>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <p className="mt-8 text-xs text-[#A1A1AA] max-w-2xl">
          Member messages shared with permission. Individual experiences vary and do not guarantee
          future results.
        </p>
      </Reveal>
    </div>
  </section>
);
