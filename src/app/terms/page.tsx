import type { Metadata } from "next";
import { BUSINESS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing use of the SXS247 website, dispatch requests, and membership.",
};

export default function TermsPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 md:px-6 prose prose-invert">
        <h1 className="text-3xl md:text-4xl font-heading font-bold mb-8">Terms of Service</h1>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>Last updated: August 2026</p>
          <p>
            These terms govern your use of {BUSINESS.url} and any dispatch request or membership
            signup submitted through it. By using this site, you agree to these terms.
          </p>
          <h2 className="text-xl font-heading font-semibold text-foreground pt-4">Not An Emergency Line</h2>
          <p>
            SXS247 is not a substitute for 911. For any life-threatening emergency, contact 911
            or local emergency services first. SXS247 dispatches non-life-threatening roadside
            and recovery assistance.
          </p>
          <h2 className="text-xl font-heading font-semibold text-foreground pt-4">Dispatch Network Model</h2>
          <p>
            SXS247 operates as a dispatch network connecting riders with independent local
            recovery partners. SXS247 does not own or directly operate recovery vehicles or
            equipment; services are performed by third-party recovery partners under their own
            terms, subject to availability.
          </p>
          <h2 className="text-xl font-heading font-semibold text-foreground pt-4">No Guaranteed Response Time</h2>
          <p>
            Response times vary based on location, time of day, weather, and partner
            availability. Stated response windows are estimates, not guarantees, particularly in
            remote desert areas with limited partner coverage.
          </p>
          <h2 className="text-xl font-heading font-semibold text-foreground pt-4">Membership</h2>
          <p>
            Membership plans provide priority dispatch routing and discounted rates as described
            at time of signup. Membership does not guarantee availability of a recovery partner
            in every location or at every time.
          </p>
          <h2 className="text-xl font-heading font-semibold text-foreground pt-4">Pricing</h2>
          <p>
            Membership and service pricing shown on this site are estimates for planning purposes.
            Final pricing is confirmed at time of signup or service.
          </p>
          <h2 className="text-xl font-heading font-semibold text-foreground pt-4">Contact</h2>
          <p>Questions about these terms can be sent to {BUSINESS.email}.</p>
        </div>
      </div>
    </section>
  );
}
