import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Roadside & Recovery Services",
  description:
    "24/7 dispatch services for SxS, UTV, and ATV riders — emergency roadside dispatch, winch-out recovery, mechanical field assistance, and flatbed transport.",
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        badge="Services"
        title="One Network, "
        titleAccent="Every Kind Of Help"
        subtitle="From a dead battery to a full recovery, our dispatch network connects you with the right local partner for your situation."
        primaryCTA="Request Assistance"
        primaryHref="/contact"
        secondaryCTA="View Membership Plans"
        secondaryHref="/membership"
      />
      <ServicesGrid />
      <HowItWorks />
      <CTA
        title="Not Sure What You Need?"
        description="Submit a request and describe your situation — we'll dispatch the right kind of help."
        primaryCTA="Request Assistance"
        primaryHref="/contact"
      />
    </>
  );
}
