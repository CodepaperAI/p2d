import { CtaPanel } from "@/components/cta-panel";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";
import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";
import { ServiceGrid } from "@/components/service-grid";
import { images } from "@/lib/site-data";
import { getRouteMetadata, getServicesJsonLd, getWebPageJsonLd } from "@/lib/seo";

export const metadata = getRouteMetadata("/services");

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={[getWebPageJsonLd("/services", "CollectionPage"), getServicesJsonLd()]} />
      <PageHero
        eyebrow="Our services"
        title="Kitchen and bathroom cabinetry refinishing done right."
        copy="From subtle colour changes to a full cabinet style reset, P2D Refinishing helps homeowners keep useful cabinetry and upgrade the finish."
        image={images.kitchenAfter}
      />
      <ServiceGrid detailed />

      <section className="section-pad bg-graphite">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.82fr_1fr]">
          <Reveal>
            <SectionIntro
              eyebrow="Estimate"
              title="Send images, count doors and drawers."
              copy="For the clearest estimate, P2D Refinishing asks homeowners to share cabinet photos, location, and the number of doors and drawers."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <QuoteForm />
          </Reveal>
        </div>
      </section>

      <CtaPanel />
    </>
  );
}
