import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { MembershipTiers } from "@/components/sections/MembershipTiers";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { FAQS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Membership Plans",
  description:
    "SXS247 membership plans give SxS, UTV, and ATV riders priority dispatch routing and discounted rates on 24/7 roadside and recovery services.",
};

export default function MembershipPage() {
  return (
    <>
      <Hero
        badge="Membership"
        title="Join Before "
        titleAccent="You Need It"
        subtitle="Membership gets you priority dispatch routing and discounted rates on every service. Non-members can still request help — members just get to the front of the line."
        primaryCTA="Choose A Plan"
        primaryHref="/contact"
        secondaryCTA="See What's Included"
        secondaryHref="/services"
      />
      <MembershipTiers />
      <FAQ
        eyebrow="Questions"
        title="Membership FAQ"
        subtitle="What to know before you join."
        faqs={FAQS.map((f) => ({ question: f.q, answer: f.a }))}
      />
      <CTA
        title="Ready To Join?"
        description="Pick a plan and we'll confirm your membership and coverage details within one business day."
        primaryCTA="Choose A Plan"
        primaryHref="/contact"
      />
    </>
  );
}
