import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { contact, images } from "@/lib/site-data";

export function Hero() {
  return (
    <section className="hero-section">
      <div className="absolute inset-0">
        <Image
          src={images.hero}
          alt="Modern refinished kitchen cabinetry with dark blue cabinet doors and brass hardware"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,11,15,0.94)_0%,rgba(8,11,15,0.72)_42%,rgba(8,11,15,0.28)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(199,152,74,0.30),transparent_28%),radial-gradient(circle_at_18%_82%,rgba(215,211,199,0.16),transparent_30%)]" />
      </div>

      <div
        className="relative mx-auto grid min-h-[860px] max-w-7xl content-end px-5 pb-14 pt-32 sm:px-8 lg:min-h-screen lg:grid-cols-[1fr_0.72fr] lg:gap-12"
      >
        <div className="max-w-4xl">
          <div className="hero-kicker hero-load">
            <span>Kitchen & bathroom cabinetry refinishing</span>
            <span>Toronto / GTA</span>
          </div>
          <h1 className="hero-title hero-load hero-load-2">
            Cabinetry refinishing with a factory-style finish.
          </h1>
          <p className="hero-copy hero-load hero-load-3">
            P2D Refinishing refreshes existing kitchen and bathroom cabinets with a smooth,
            durable finish - often for far less than replacing every cabinet.
          </p>
          <div className="hero-load hero-load-4 mt-8 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/contact-us">Get a quote</ButtonLink>
            <ButtonLink href={contact.phoneHref} variant="ghost">
              Call {contact.phone}
            </ButtonLink>
          </div>
        </div>

        <p className="hero-wordmark hero-load hero-load-4" aria-hidden="true">
          P2D REFINISHING
        </p>
      </div>
    </section>
  );
}
