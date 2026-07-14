import { ArrowUpRight } from "lucide-react";
import { CtaPanel } from "@/components/cta-panel";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";
import { blogPosts, images } from "@/lib/site-data";
import { getBlogJsonLd, getRouteMetadata, getWebPageJsonLd } from "@/lib/seo";

export const metadata = getRouteMetadata("/blogs");

export default function BlogsPage() {
  return (
    <>
      <JsonLd data={[getWebPageJsonLd("/blogs", "Blog"), getBlogJsonLd()]} />
      <PageHero
        eyebrow="Blogs"
        title="Cabinet refinishing guides for Toronto homeowners."
        copy="The latest P2D Refinishing articles help homeowners compare sheen, cost, spraying, refacing, and durability before requesting a quote."
        image={images.farmhouse}
      />

      <section className="section-pad bg-paper text-ink">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionIntro
              tone="light"
              eyebrow="Latest posts"
              title="Useful decisions before your cabinet makeover."
              copy="These current articles are linked back to P2D Refinishing's live posts so detailed guides remain sourced from the business site."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {blogPosts.map((post, index) => (
              <Reveal key={post.href} delay={index * 0.07} className="testimonial-card">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-brass">
                  {post.date}
                </p>
                <h2 className="mt-5 font-display text-3xl font-bold uppercase leading-none text-ink">
                  {post.title}
                </h2>
                <p className="mt-5">{post.excerpt}</p>
                <a className="service-link" href={post.href} target="_blank" rel="noreferrer">
                  Read article
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaPanel />
    </>
  );
}
