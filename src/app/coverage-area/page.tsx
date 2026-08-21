import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { CTA } from "@/components/sections/CTA";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Coverage Area",
  description:
    "SXS247 dispatch coverage across Arizona and Southwest desert OHV recreation areas — see current regions and how coverage is expanding.",
};

const REGIONS = [
  { name: "Central Arizona Desert Corridor", note: "Core coverage region with the highest partner density." },
  { name: "Southwest Arizona / Colorado River Corridor", note: "Coverage extending toward popular dune and desert riding areas near the Arizona-California border." },
  { name: "Southern Arizona Desert Trails", note: "Growing partner network — response times vary by specific location." },
];

export default function CoverageAreaPage() {
  return (
    <>
      <Hero
        badge="Coverage Area"
        title="Where SXS247 "
        titleAccent="Currently Dispatches"
        subtitle="Our recovery partner network is centered in Arizona and expanding across Southwest desert OHV recreation areas. Coverage density and response times vary by region."
        primaryCTA="Check Your Area"
        primaryHref="/contact"
        layout="split-right"
        heroImage="/images/coverage-area-desert-road.jpg"
        heroImageAlt="A dark desert highway stretching toward distant mountains at night"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <StaggerChildren className="space-y-6">
            {REGIONS.map((r) => (
              <StaggerItem key={r.name}>
                <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg">{r.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{r.note}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <FadeIn delay={0.1}>
            <p className="mt-10 text-sm text-muted-foreground leading-relaxed">
              Coverage is actively expanding as we add vetted recovery partners in new areas.
              Not sure if your riding area is covered? Submit a request with your location and
              we&apos;ll confirm dispatch availability — even outside our core regions, we&apos;ll
              do what we can to connect you with the nearest available partner.
            </p>
          </FadeIn>
        </div>
      </section>

      <CTA
        title="Check Coverage For Your Trip"
        description="Tell us where you're headed and we'll confirm what dispatch support looks like in that area."
        primaryCTA="Check Your Area"
        primaryHref="/contact"
      />
    </>
  );
}
