import Image from "next/image";
import { CtaPanel } from "@/components/cta-panel";
import { Faqs } from "@/components/faqs";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { ProcessTimeline } from "@/components/process-timeline";
import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";
import { images } from "@/lib/site-data";
import { getFaqJsonLd, getRouteMetadata, getWebPageJsonLd } from "@/lib/seo";

export const metadata = getRouteMetadata("/the-process");

export default function ProcessPage() {
  return (
    <>
      <JsonLd data={[getWebPageJsonLd("/the-process"), getFaqJsonLd()]} />
      <PageHero
        eyebrow="The process"
        title="Custom colour refinishing without the renovation chaos."
        copy="Doors and drawer fronts are finished in a controlled spray facility while fixed cabinetry is handled carefully on site."
        image={images.workshop}
      />
      <ProcessTimeline />

      <section className="section-pad bg-paper text-ink">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_0.86fr] lg:items-center">
          <Reveal className="relative aspect-[1.15] overflow-hidden rounded-[8px]">
            <Image
              src={images.kitchenAfter}
              alt="Finished kitchen cabinetry after refinishing"
              fill
              sizes="(max-width: 1024px) 90vw, 52vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <SectionIntro
              tone="light"
              eyebrow="Finishing touches"
              title="No downtime, no full cabinet tear-out."
              copy="The current P2D Refinishing process is designed so there is no need to empty every cabinet unless the inside is also being refinished. The result is a cleaner finish with less mess, less waste, and less disruption."
            />
            <p className="mt-6 text-lg leading-8 text-black/65">
              Primer and multiple lacquer coats are applied in the selected colour. The fixed
              cabinet frames are finished in the home, then doors and drawer fronts are reinstalled,
              adjusted, and reviewed.
            </p>
          </Reveal>
        </div>
      </section>

      <Faqs />
      <CtaPanel />
    </>
  );
}
