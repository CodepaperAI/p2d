import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/site-data";
import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";

type ServiceGridProps = {
  detailed?: boolean;
};

export function ServiceGrid({ detailed = false }: ServiceGridProps) {
  return (
    <section id="services-list" className="section-pad bg-paper text-ink">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionIntro
            tone="light"
            eyebrow="Services"
            title="Cabinet upgrades without full replacement."
            copy="P2D Refinishing focuses on refinishing what still works, replacing only the parts that will create a better result."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={index * 0.07} className="service-card">
                <div className="service-image">
                  <Image
                    src={service.image}
                    alt={`${service.title} by P2D Refinishing`}
                    fill
                    sizes="(max-width: 768px) 90vw, 45vw"
                    className="object-cover"
                  />
                </div>
                <div className="service-body">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <span className="service-icon">
                      <Icon size={22} aria-hidden="true" />
                    </span>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-brass">
                      {service.eyebrow}
                    </p>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  {detailed ? (
                    <ul className="mt-6 grid gap-3">
                      {service.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                  <Link href="/contact-us" className="service-link">
                    Request pricing
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
