import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyUs } from "@/components/sections/WhyUs";
import { MembershipTiers } from "@/components/sections/MembershipTiers";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { FAQS } from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      <Hero
        badge="24/7 Dispatch Network"
        title="24/7 Off-Road Recovery. "
        titleAccent="Never Ride Alone."
        subtitle="A dispatch network connecting SxS, UTV, and ATV riders with vetted local recovery partners across Arizona and the Southwest — day or night, on or off the trail. For life-threatening emergencies, call 911 first."
        primaryCTA="Request Assistance"
        primaryHref="/contact"
        secondaryCTA="View Membership Plans"
        secondaryHref="/membership"
        layout="split-right"
        heroImage="/images/hero-night-recovery.jpg"
        heroImageAlt="A recovery tow truck with amber beacon lights active on a dark desert highway at night"
      />
      <TrustBar />
      <ServicesGrid />
      <HowItWorks />
      <WhyUs />
      <MembershipTiers />
      <FAQ
        eyebrow="Questions"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about how dispatch and membership work."
        faqs={FAQS.map((f) => ({ question: f.q, answer: f.a }))}
      />
      <CTA
        title="Don't Wait Until You're Stuck"
        description="Join SXS247 for priority dispatch and discounted rates — or request assistance now if you need help today."
        primaryCTA="Request Assistance"
        primaryHref="/contact"
        secondaryText="View membership plans"
        secondaryHref="/membership"
      />
    </>
  );
}
