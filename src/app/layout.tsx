import type { Metadata } from "next";
import { headingFont, bodyFont } from "@/lib/fonts";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { BUSINESS, NAV_ITEMS, FOOTER_LINKS } from "@/lib/site-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.url),
  title: {
    default: "SXS247 — 24/7 Off-Road Roadside Assistance & Recovery",
    template: "%s | SXS247",
  },
  description:
    "SXS247 is a 24/7 roadside assistance and recovery dispatch network for SxS, UTV, and ATV riders across Arizona and Southwest desert OHV areas. Request help or join for priority dispatch.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BUSINESS.url,
    siteName: "SXS247",
    title: "SXS247 — 24/7 Off-Road Roadside Assistance & Recovery",
    description:
      "A 24/7 dispatch network connecting stranded SxS/UTV/ATV riders with vetted local recovery partners across Arizona and the Southwest.",
    images: [
      { url: "/og/default.jpg", width: 1200, height: 630, alt: "SXS247 — 24/7 Off-Road Roadside Assistance" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SXS247 — 24/7 Off-Road Roadside Assistance & Recovery",
    description: "A 24/7 dispatch network for stranded SxS/UTV/ATV riders across Arizona and the Southwest.",
    images: ["/og/default.jpg"],
  },
  robots: { index: true, follow: true },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SXS247",
  url: BUSINESS.url,
  description: BUSINESS.description,
  email: BUSINESS.email,
  areaServed: "Arizona and Southwest desert OHV recreation areas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <SmoothScroll>
          <Navbar businessName={BUSINESS.name} navItems={NAV_ITEMS} cta={{ label: "Request Assistance", href: "/contact" }} />
          <main className="pt-16 md:pt-20">{children}</main>
          <Footer
            businessName={BUSINESS.name}
            description="A 24/7 roadside assistance and recovery dispatch network for SxS, UTV, and ATV riders across Arizona and the Southwest."
            email={BUSINESS.email}
            address={BUSINESS.location}
            links={FOOTER_LINKS}
          />
        </SmoothScroll>
      </body>
    </html>
  );
}
