import { Mail, MapPin, Phone } from "lucide-react";
import { CtaPanel } from "@/components/cta-panel";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";
import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";
import { contact, images, serviceAreas } from "@/lib/site-data";
import { getRouteMetadata, getWebPageJsonLd } from "@/lib/seo";

export const metadata = getRouteMetadata("/contact-us");

export default function ContactPage() {
  return (
    <>
      <JsonLd data={getWebPageJsonLd("/contact-us", "ContactPage")} />
      <PageHero
        eyebrow="Contact"
        title="Start with a clear quote."
        copy="Send project photos, share your location, and include the door and drawer count for the fastest quote path."
        image={images.hero}
      />

      <section className="section-pad bg-graphite">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.78fr_1fr]">
          <Reveal>
            <SectionIntro
              eyebrow="Get in touch"
              title="Let's create something great together."
              copy="P2D Refinishing can work with different budgets and finish goals while keeping the quote process straightforward."
            />
            <div className="mt-8 grid gap-4">
              <a className="footer-contact" href={contact.phoneHref}>
                <Phone size={18} className="text-gold" aria-hidden="true" />
                {contact.phone}
              </a>
              <a className="footer-contact" href={contact.emailHref}>
                <Mail size={18} className="text-gold" aria-hidden="true" />
                {contact.email}
              </a>
              <p className="footer-contact">
                <MapPin size={18} className="text-gold" aria-hidden="true" />
                {contact.address}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <QuoteForm />
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-paper text-ink">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionIntro
              tone="light"
              align="center"
              eyebrow="Where we work"
              title="Cabinet refinishing across the GTA."
              copy="Toronto, York, Woodbridge, Mississauga, Brampton, Oakville, Burlington, Ajax, Guelph, Vaughan, Etobicoke, and nearby areas."
            />
          </Reveal>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <span key={area} className="area-chip">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CtaPanel />
    </>
  );
}
