import type { Metadata } from "next";
import { BlogPostLayout } from "@/components/sections/BlogPostLayout";

export const metadata: Metadata = {
  title: "Desert Off-Roading Safety Checklist: Before You Go",
  description:
    "The gear, planning, and precautions every rider should check before heading into remote desert OHV terrain.",
};

export default function Post() {
  return (
    <BlogPostLayout title="Desert Off-Roading Safety Checklist: Before You Go" date="August 12, 2026">
      <p>
        Most desert off-road incidents aren't caused by a single big mistake — they're caused by
        a handful of small things nobody checked before heading out. Here's a real pre-trip
        checklist.
      </p>

      <h2>Tell someone your plan</h2>
      <ul>
        <li>Where you're riding (specific trail/area, not just "the desert")</li>
        <li>When you're leaving and when you expect to be back</li>
        <li>Who's in your group</li>
        <li>What to do if you don't check in by a specific time</li>
      </ul>
      <p>
        This single step matters more than almost anything else on this list — it's the difference
        between someone knowing to look for you and nobody realizing something's wrong for days.
      </p>

      <h2>Water and electrolytes — more than feels necessary</h2>
      <p>
        Desert heat causes dehydration faster than most people expect, especially with physical
        exertion involved in recovery situations. A rough guideline used by many desert guides:
        at least one gallon of water per person per day, more in summer heat, plus electrolyte
        replacement for longer or hotter trips.
      </p>

      <h2>Vehicle checks before you leave</h2>
      <ul>
        <li>Fuel — full tank, and know your vehicle's real-world range on the terrain you're riding</li>
        <li>Tires — correct pressure for sand vs. rock terrain, plus a working spare</li>
        <li>Battery connections and fluid levels</li>
        <li>Recovery gear — even a basic tow strap and shovel can prevent needing outside help for minor stuck situations</li>
      </ul>

      <h2>Communication — plan for no cell signal</h2>
      <p>
        Assume you won't have reliable cell service for most of your trip. Options worth
        considering depending on how remote your riding area is: a satellite messenger device, a
        GPS unit with offline maps, or at minimum, downloading offline maps of your riding area
        before you lose signal.
      </p>

      <h2>Sun and heat protection</h2>
      <ul>
        <li>Sunscreen, reapplied through the day</li>
        <li>A hat or helmet with sun coverage</li>
        <li>Lightweight long sleeves — sun protection beats bare skin even in heat</li>
        <li>A shade option (tarp, canopy) for extended stops</li>
      </ul>

      <h2>Basic first aid and repair kit</h2>
      <p>
        A basic first aid kit covering cuts, sprains, and dehydration/heat-related symptoms, plus
        a small tool kit and duct tape for minor field repairs. You don't need to be a mechanic —
        you just need to be able to handle the small stuff so it doesn't turn into a full
        breakdown.
      </p>

      <h2>Know who to call before you need them</h2>
      <p>
        For life-threatening emergencies, that's 911. For a non-life-threatening breakdown or
        stuck vehicle, having a recovery dispatch service already set up — before you're stranded
        and searching for help on a spotty connection — is one of the simplest things you can do
        ahead of a trip.
      </p>
    </BlogPostLayout>
  );
}
