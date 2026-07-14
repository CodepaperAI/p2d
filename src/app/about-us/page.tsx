import Image from "next/image";
import { CtaPanel } from "@/components/cta-panel";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { StatsBand } from "@/components/stats-band";
import { Testimonials } from "@/components/testimonials";
import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";
import { images, whyChoose } from "@/lib/site-data";
import { getRouteMetadata, getWebPageJsonLd } from "@/lib/seo";

export const metadata = getRouteMetadata("/about-us");

export default function AboutPage() {
  return (
    <>
      <JsonLd data={getWebPageJsonLd("/about-us", "AboutPage")} />
      <PageHero
        eyebrow="About P2D Refinishing"
        title="The GTA's cabinetry refinishing specialists."
        copy="P2D Refinishing was built on referrals, careful prep, and the promise to deliver premium cabinet finishes with real respect for the home."
        image={images.hero}
      />
      <StatsBand />

      <section className="section-pad bg-paper text-ink">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.92fr_1fr] lg:items-center">
          <Reveal>
            <SectionIntro
              tone="light"
              eyebrow="Our story"
              title="Best products, best service, best value."
              copy="When P2D Refinishing started, the mission was simple: give customers a reliable way to make existing cabinetry look new without the waste and expense of full replacement."
            />
            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/65">
              The business grew through word-of-mouth because homeowners could see the difference
              in the finish, the communication, and the way the team treated their space. Today,
              P2D Refinishing has worked with more than 600 customers across the GTA.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="relative aspect-[0.95] overflow-hidden rounded-[8px]">
            <Image
              src={images.workshop}
              alt="Cabinet refinishing preparation and installation work"
              fill
              sizes="(max-width: 1024px) 90vw, 46vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-graphite">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionIntro
              eyebrow="Reasons to hire us"
              title="A practical standard for premium work."
              copy="The details on the current P2D Refinishing site are direct: fast responses, dedicated spray booth work, high-quality lacquers and paints, and careful cleaning before sanding and priming."
            />
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

      <Testimonials />
      <CtaPanel />
    </>
  );
}
