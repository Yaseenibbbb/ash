import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/landing/Reveal";
import { BOOK_COVER, AMAZON_URL } from "@/data/book";

export const BookSection = () => (
  <section data-testid="book-section" className="py-20 md:py-28 bg-white border-y border-[#E4E4E7]">
    <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
      <Reveal className="flex justify-center lg:justify-start order-last lg:order-first">
        <Link to="/book" data-testid="book-section-cover-link" aria-label="Explore the book">
          <img
            src={BOOK_COVER}
            alt="Currency Trading and Intermarket Analysis book cover by Ashraf Laidi"
            className="w-64 md:w-72 rounded-lg shadow-2xl shadow-black/20 ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1.5 hover:-rotate-1"
          />
        </Link>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#F97316] font-semibold mb-4">
          Ashraf's Book · Wiley Trading Series · 2008
        </p>
        <h2 className="text-[28px] md:text-[36px] font-bold tracking-tight text-[#111827]">
          Currency Trading and Intermarket Analysis
        </h2>
        <p className="mt-3 text-lg leading-[30px] text-[#6B7280]">
          How to Profit from the Shifting Currents in Global Markets.
        </p>
        <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#F97316]/[0.08] border border-[#F97316]/20 px-4 py-2">
          <Award className="h-4 w-4 text-[#F97316]" />
          <span className="text-sm font-medium text-[#111827]">
            Ranked #1 in Amazon's Foreign Exchange and Finance sub-categories
          </span>
        </div>
        <p className="mt-5 text-base leading-[28px] text-[#6B7280] max-w-xl">
          The intermarket framework behind the WhatsApp Broadcast — how gold, oil, yields,
          equities, and central banks drive global exchange rates.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Button
            asChild
            data-testid="book-section-explore-cta"
            className="bg-[#111827] hover:bg-[#1F2937] text-white rounded-full h-11 px-7 font-semibold transition-colors"
          >
            <Link to="/book">
              Explore the Book
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            data-testid="book-section-buy-cta"
            className="rounded-full h-11 px-7 font-medium border-[#E4E4E7] text-[#111827] hover:bg-[#F4F4F5] transition-colors"
          >
            <a href={AMAZON_URL} target="_blank" rel="noopener noreferrer">
              Buy Now on Amazon
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </Reveal>
    </div>
  </section>
);
