"use client";
import { ShieldCheck, MapPinned, BadgeCheck, Eye } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

const REASONS = [
  {
    icon: ShieldCheck,
    title: "Vetted local recovery partners",
    body: "Every partner in our network is vetted for off-road recovery experience — not a generic road-car tow truck showing up unequipped.",
  },
  {
    icon: MapPinned,
    title: "Desert-specific expertise",
    body: "Our network understands sand, mud, and rock terrain — recovery gear and technique built for the desert, not the highway.",
  },
  {
    icon: BadgeCheck,
    title: "Membership discounts",
    body: "Members get priority dispatch routing and discounted rates on every service, from field repairs to full recovery.",
  },
  {
    icon: Eye,
    title: "Transparent dispatch process",
    body: "You'll know who's coming, roughly when, and what to expect — no vague promises, no surprise fees sprung at pickup.",
  },
];

export function WhyUs() {
  return (
    <section className="py-24 md:py-32 bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Why SXS247
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            A Dispatch Network You Can Trust
          </h2>
          <p className="mt-4 text-lg text-background/70">
            Not a call center reading a script — a network built around real desert recovery experience.
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {REASONS.map((reason) => (
            <StaggerItem key={reason.title}>
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <reason.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg">{reason.title}</h3>
                  <p className="mt-2 text-sm text-background/70 leading-relaxed">{reason.body}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
