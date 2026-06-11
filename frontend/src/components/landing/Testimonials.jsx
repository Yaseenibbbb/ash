import { Reveal } from "@/components/landing/Reveal";

const TESTIMONIALS = [
  {
    quote:
      "The value is in the intermarket context. It helps me understand why FX is moving, not just that it is moving.",
    role: "Active FX Trader",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGhlYWRzaG90fGVufDB8fHx8MTc4MTE5OTQ0MXww&ixlib=rb-4.1.0&q=85",
  },
  {
    quote:
      "The WhatsApp format is useful because the updates arrive quickly and stay concise.",
    role: "Macro-Focused Investor",
    img: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGhlYWRzaG90fGVufDB8fHx8MTc4MTE5OTQ0MXww&ixlib=rb-4.1.0&q=85",
  },
  {
    quote:
      "I follow the updates for the macro links between gold, yields, USD, and equities.",
    role: "Market Professional",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGhlYWRzaG90fGVufDB8fHx8MTc4MTE5OTQ0MXww&ixlib=rb-4.1.0&q=85",
  },
];

export const Testimonials = () => (
  <section data-testid="testimonials-section" className="py-20 md:py-28">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <Reveal>
        <h2 className="text-[28px] md:text-[36px] font-bold tracking-tight text-[#111827]">
          What members value
        </h2>
      </Reveal>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.role} delay={i * 0.1}>
            <figure
              data-testid={`testimonial-card-${i + 1}`}
              className="h-full bg-white rounded-xl border border-[#E4E4E7] p-7 flex flex-col transition-all duration-300 hover:shadow-md"
            >
              <blockquote className="text-base leading-[28px] text-[#111827] flex-1">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 pt-5 border-t border-[#F4F4F5]">
                <img
                  src={t.img}
                  alt={`${t.role} portrait`}
                  className="h-10 w-10 rounded-full object-cover grayscale"
                  loading="lazy"
                />
                <span className="text-sm font-medium text-[#6B7280]">{t.role}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
