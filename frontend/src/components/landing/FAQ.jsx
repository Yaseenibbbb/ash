import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/landing/Reveal";

const FAQS = [
  {
    q: "Is this a trading signals group?",
    a: "No. The service provides market analysis, macro context, chart observations, and key levels. It should not be treated as guaranteed trading signals or financial advice.",
  },
  {
    q: "Is this financial advice?",
    a: "No. The content is for educational and informational purposes only. You are responsible for your own trading and investment decisions.",
  },
  {
    q: "What markets are covered?",
    a: "FX, gold, silver, commodities, indices, bonds, central banks, yield curves, USD, EUR, JPY, GBP, and broader risk sentiment — with occasional coverage of individual shares and cryptocurrencies.",
  },
  {
    q: "How are updates delivered?",
    a: "Updates are delivered through WhatsApp in a private broadcast format. Members remain anonymous to one another. Messages are sent as text, charts, voice notes, and links to videos and more detailed analysis. Members can ask questions to Ashraf individually, and answers helpful to the wider group are shared anonymously.",
  },
  {
    q: "How often are updates sent?",
    a: "Frequency depends on market conditions. The focus is on quality and relevance, not constant noise.",
  },
  {
    q: "Is there a free version?",
    a: "Free public insights are available through the newsletter and website archive. The WhatsApp broadcast is reserved for premium subscribers. (Placeholder — final policy to be confirmed.)",
  },
  {
    q: "Can I cancel?",
    a: "Subscription and cancellation terms will be outlined at checkout. (Placeholder — final policy depends on the payment provider and subscription terms.)",
  },
  {
    q: "What happens after payment?",
    a: "Subscribers receive instructions to confirm their WhatsApp number and activate access.",
  },
];

export const FAQ = () => (
  <section id="faq" data-testid="faq-section" className="py-20 md:py-28 bg-white border-y border-[#E4E4E7] scroll-mt-20">
    <div className="max-w-3xl mx-auto px-6 lg:px-10">
      <Reveal>
        <h2 className="text-[28px] md:text-[36px] font-bold tracking-tight text-[#111827]">
          Frequently asked questions
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <Accordion type="single" collapsible className="mt-10">
          {FAQS.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-[#E4E4E7]">
              <AccordionTrigger
                data-testid={`faq-trigger-${i + 1}`}
                className="text-left text-base font-semibold text-[#111827] hover:no-underline py-5"
              >
                {faq.q}
              </AccordionTrigger>
              <AccordionContent
                data-testid={`faq-content-${i + 1}`}
                className="text-base leading-[28px] text-[#6B7280] pb-5"
              >
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </div>
  </section>
);
