import { CtaPanel } from "@/components/cta-panel";
import { Faqs } from "@/components/faqs";
import { GalleryGrid } from "@/components/gallery-grid";
import { Hero } from "@/components/hero";
import { ProcessTimeline } from "@/components/process-timeline";
import { ServiceGrid } from "@/components/service-grid";
import { StatsBand } from "@/components/stats-band";
import { Testimonials } from "@/components/testimonials";
import { TrustStrip } from "@/components/trust-strip";
import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";
import { ButtonLink } from "@/components/button-link";
import { JsonLd } from "@/components/json-ld";
import { contact, serviceAreas, whyChoose } from "@/lib/site-data";
import { getFaqJsonLd, getRouteMetadata, getServicesJsonLd, getWebPageJsonLd } from "@/lib/seo";

export const metadata = getRouteMetadata("/");

export default function Home() {
  return (
    <>
      <JsonLd data={[getWebPageJsonLd("/"), getServicesJsonLd(), getFaqJsonLd()]} />
      <Hero />
      <TrustStrip />
      <StatsBand />

      <section className="section-pad bg-graphite">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.86fr_1fr] lg:items-start">
          <Reveal>
            <SectionIntro
              eyebrow="Why choose P2D Refinishing"
              title="A cabinet shop mindset brought into the home."
              copy="Since 2008, Masoud Kakar and the P2D Refinishing team have helped GTA families get cleaner, more current cabinetry without starting from zero."
            />
            <div className="mt-8">
              <ButtonLink href={contact.phoneHref} variant="ghost">
                Call {contact.phone}
              </ButtonLink>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.06} className="faq-item">
                  <Icon size={26} className="mb-5 text-gold" aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <ServiceGrid />
      <ProcessTimeline />
      <GalleryGrid />
      <Testimonials />

      <section className="section-pad bg-paper text-ink">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionIntro
              tone="light"
              align="center"
              eyebrow="Service area"
              title="Serving Toronto and the Greater Toronto Area."
              copy="P2D Refinishing brings cabinet refinishing and painting directly to homes across the region."
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

      <Faqs />
      <CtaPanel />
    </>
  );
}
