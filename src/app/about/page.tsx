import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { WhyUs } from "@/components/sections/WhyUs";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { FadeIn } from "@/components/animations/FadeIn";
import { CTA } from "@/components/sections/CTA";
import { STATS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About SXS247",
  description:
    "SXS247 is a 24/7 dispatch network connecting SxS, UTV, and ATV riders with vetted local recovery partners across Arizona and the Southwest desert.",
};

export default function AboutPage() {
  return (
    <>
      <Hero
        badge="About Us"
        title="Built By Riders Who've "
        titleAccent="Been Stranded Too"
        subtitle="A breakdown 20 miles from the trailhead with no cell service is a specific kind of stress. SXS247 exists to close the gap between 'stuck' and 'help is on the way' for off-road riders."
        layout="split-right"
        heroImage="/images/about-dispatch-network.jpg"
        heroImageAlt="Dispatch coordination equipment with a glowing map display at night"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 md:px-6 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <FadeIn>
            <p>
              Standard roadside assistance programs are built for paved roads — they don&apos;t
              have partners equipped for sand, mud, or rock recovery, and dispatchers often
              don&apos;t know what to do with a location description that&apos;s a trail
              marker instead of a street address. SXS247 was built specifically for off-road
              riders: a dispatch network of vetted local recovery partners who already know how
              to find you and how to get your vehicle unstuck.
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <p>
              We don&apos;t own a fleet of trucks ourselves — we operate as a dispatch network,
              connecting riders with independent local recovery partners across Arizona and the
              Southwest, similar to how national roadside programs work. What we control directly
              is who&apos;s in that network: every partner is vetted for off-road recovery
              experience before they join.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p>
              Membership gets you priority routing and discounted rates, but you don&apos;t have
              to be a member to request help — we&apos;d rather get you unstuck than turn away a
              rider in a tough spot. And for anything life-threatening, we&apos;ll always tell you
              the same thing first: call 911.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 border-y border-border bg-card/60">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {STATS.map((stat) => (
              <StaggerItem key={stat.label}>
                <p className="text-3xl md:text-4xl font-heading font-bold">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <WhyUs />

      <CTA
        title="Join The Network"
        description="Sign up for membership or request assistance if you need help today."
        primaryCTA="Get Started"
        primaryHref="/contact"
      />
    </>
  );
}
