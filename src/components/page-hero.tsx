import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { Reveal } from "@/components/reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
};

export function PageHero({ eyebrow, title, copy, image }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,11,15,0.96),rgba(8,11,15,0.72)_48%,rgba(8,11,15,0.42))]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-36 sm:px-8 lg:pt-44">
        <Reveal className="max-w-4xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{copy}</p>
          <div className="mt-8">
            <ButtonLink href="/contact-us">Get a free quote</ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
