import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Award, BookOpen, Tv, TrendingUp } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/landing/Reveal";
import { Footer } from "@/components/landing/Footer";
import { BOOK_COVER, AMAZON_URL, CHAPTERS } from "@/data/book";

const ACCOLADES = [
  {
    icon: Award,
    text: "Ranked #1 in Amazon's Foreign Exchange and Finance sub-categories",
  },
  { icon: BookOpen, text: "Wiley Trading Series — published 2008" },
  { icon: TrendingUp, text: "Author's forecasts ranked #1 by FXWeek and Reuters" },
  { icon: Tv, text: "Featured on CNBC, Bloomberg, BBC & Financial Times" },
];

export default function BookPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Currency Trading and Intermarket Analysis | Ashraf Laidi";
    return () => {
      document.title = "Premium WhatsApp Market Updates | Ashraf Laidi";
    };
  }, []);

  return (
    <div data-testid="book-page" className="min-h-screen bg-[#FAFAFA] text-[#111827] antialiased">
      {/* Header */}
      <header
        data-testid="book-header"
        className="fixed top-0 inset-x-0 z-50 bg-[#09090B]/80 backdrop-blur-xl border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <Link to="/" data-testid="book-header-wordmark" className="text-left">
            <span className="block text-[17px] font-bold tracking-tight text-[#F5F5F5] leading-tight">
              Ashraf Laidi
            </span>
            <span className="hidden lg:block font-mono text-[9px] uppercase tracking-[0.18em] text-[#A1A1AA]">
              Incisive Global Markets Analysis
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              to="/"
              data-testid="book-back-link"
              className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-[#A1A1AA] hover:text-[#F5F5F5] transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              WhatsApp Access
            </Link>
            <Button
              asChild
              data-testid="book-header-buy-cta"
              className="bg-[#F97316] hover:bg-[#EA580C] text-white rounded-full px-5 h-9 text-sm font-semibold transition-colors"
            >
              <a href={AMAZON_URL} target="_blank" rel="noopener noreferrer">
                Buy Now
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section
          data-testid="book-hero"
          className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#09090B] overflow-hidden"
        >
          <div className="absolute inset-0 dark-grid-bg" aria-hidden="true" />
          <div
            className="absolute -top-32 right-0 w-[600px] h-[400px] rounded-full opacity-10 blur-3xl"
            style={{ background: "radial-gradient(circle, #EF4444 0%, transparent 70%)" }}
            aria-hidden="true"
          />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#F97316] font-semibold mb-6">
                Ashraf's Book · Wiley Trading Series · 2008
              </p>
              <h1 className="text-[36px] leading-[1.08] md:text-[52px] font-bold tracking-tight text-[#F5F5F5]">
                Currency Trading and Intermarket Analysis
              </h1>
              <p className="mt-5 text-lg leading-[30px] text-[#A1A1AA]">
                How to Profit from the Shifting Currents in Global Markets.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#F97316]/10 border border-[#F97316]/25 px-4 py-2">
                <Award className="h-4 w-4 text-[#F97316]" />
                <span className="text-sm font-medium text-[#F5F5F5]">
                  Ranked #1 in Amazon's Foreign Exchange and Finance sub-categories
                </span>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  data-testid="book-hero-buy-cta"
                  className="bg-[#F97316] hover:bg-[#EA580C] text-white rounded-full h-12 px-8 text-base font-semibold transition-all hover:shadow-lg hover:shadow-orange-500/25"
                >
                  <a href={AMAZON_URL} target="_blank" rel="noopener noreferrer">
                    Buy Now on Amazon
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  data-testid="book-hero-back-cta"
                  className="rounded-full h-12 px-8 text-base font-medium border-white/20 bg-transparent text-[#F5F5F5] hover:bg-white/5 hover:text-white transition-colors"
                >
                  <Link to="/">Get WhatsApp Updates</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="flex justify-center lg:justify-end">
              <img
                src={BOOK_COVER}
                alt="Currency Trading and Intermarket Analysis book cover — Wiley Trading Series, by Ashraf Laidi"
                data-testid="book-cover-image"
                className="w-72 md:w-80 rounded-lg shadow-2xl shadow-black/50 ring-1 ring-white/10 transition-transform duration-300 hover:-translate-y-1.5 hover:rotate-1"
              />
            </Reveal>
          </div>
        </section>

        {/* Accolades */}
        <section data-testid="book-accolades" className="border-b border-[#E4E4E7] bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ACCOLADES.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-lg bg-[#F4F4F5] border border-[#E4E4E7] flex items-center justify-center shrink-0">
                  <Icon className="h-4 w-4 text-[#F97316]" />
                </div>
                <p className="text-sm font-medium text-[#6B7280] leading-snug">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About the book */}
        <section data-testid="book-about" className="py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-6 lg:px-10">
            <Reveal>
              <h2 className="text-[28px] md:text-[36px] font-bold tracking-tight text-[#111827]">
                The intermarket framework, in one book
              </h2>
              <p className="mt-5 text-lg leading-[30px] text-[#6B7280]">
                The highly regarded guide to how currencies, gold, oil, yields, equities, and
                central bank policy interact to drive global exchange rates — the same intermarket
                framework behind the analysis delivered in the WhatsApp Broadcast Group today.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Chapters */}
        <section data-testid="book-chapters" className="py-16 md:py-24 bg-white border-y border-[#E4E4E7]">
          <div className="max-w-3xl mx-auto px-6 lg:px-10">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A1A1AA] font-semibold mb-3">
                Inside the book
              </p>
              <h2 className="text-[28px] md:text-[36px] font-bold tracking-tight text-[#111827]">
                Chapter outline
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Accordion type="single" collapsible className="mt-10">
                {CHAPTERS.map((ch, i) => (
                  <AccordionItem key={i} value={`chapter-${i + 1}`} className="border-b border-[#E4E4E7]">
                    <AccordionTrigger
                      data-testid={`chapter-trigger-${i + 1}`}
                      className="text-left hover:no-underline py-5 gap-4"
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="font-mono text-sm text-[#F97316] shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-base md:text-lg font-semibold text-[#111827]">
                          {ch.title}
                        </span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent data-testid={`chapter-content-${i + 1}`} className="pb-6">
                      <ul className="space-y-2 pl-10">
                        {ch.topics.map((t) => (
                          <li key={t} className="text-[15px] leading-relaxed text-[#6B7280] list-disc">
                            {t}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </section>

        {/* Final CTA */}
        <section data-testid="book-final-cta" className="relative py-20 md:py-28 bg-[#09090B] overflow-hidden">
          <div className="absolute inset-0 dark-grid-bg" aria-hidden="true" />
          <div className="relative max-w-2xl mx-auto px-6 lg:px-10 text-center">
            <Reveal>
              <h2 className="text-[28px] md:text-[40px] font-bold tracking-tight leading-tight text-[#F5F5F5]">
                Read the framework. Then follow it live.
              </h2>
              <p className="mt-4 text-lg leading-[30px] text-[#A1A1AA]">
                The book lays the intermarket foundation. The WhatsApp Broadcast applies it to
                today's markets.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  data-testid="book-final-buy-cta"
                  className="bg-[#F97316] hover:bg-[#EA580C] text-white rounded-full h-12 px-8 text-base font-semibold transition-all hover:shadow-lg hover:shadow-orange-500/25"
                >
                  <a href={AMAZON_URL} target="_blank" rel="noopener noreferrer">
                    Buy Now on Amazon
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Link
                  to="/"
                  data-testid="book-final-whatsapp-link"
                  className="text-sm font-medium text-[#A1A1AA] hover:text-[#F5F5F5] underline underline-offset-4 transition-colors"
                >
                  Join WhatsApp Access
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
