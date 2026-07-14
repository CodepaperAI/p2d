import Image from "next/image";
import { gallery } from "@/lib/site-data";
import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";

export function GalleryGrid() {
  return (
    <section id="gallery" className="section-pad bg-graphite">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionIntro
            eyebrow="Proof"
            title="Real cabinet surfaces. Real transformations."
            copy="A mix of before and after imagery from P2D Refinishing's current work library, presented with a sharper editorial rhythm."
          />
        </Reveal>
        <div className="gallery-grid mt-10">
          {gallery.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08} className="gallery-card">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 90vw, 33vw"
                className="object-cover transition duration-700 hover:scale-105"
              />
              <div className="gallery-label">{item.label}</div>
              <div className="gallery-caption">
                <p>{item.title}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
