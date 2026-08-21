import type { Metadata } from "next";
import { LeadForm } from "@/components/sections/LeadForm";

export const metadata: Metadata = {
  title: "Request Assistance",
  description:
    "Request 24/7 roadside assistance or join SXS247 membership. For life-threatening emergencies, call 911 first.",
};

export default function ContactPage() {
  return (
    <LeadForm
      formName="dispatch"
      title="Request "
      titleAccent="Assistance"
      subtitle="Tell us your situation and location and we'll work to connect you with the nearest available recovery partner. For membership sign-up, select that option below."
      submitLabel="Submit Request"
      showInfoColumn
      situationField
    />
  );
}
