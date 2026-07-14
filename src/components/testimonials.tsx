import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/site-data";
import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";

export function Testimonials() {
  return (
    <section className="section-pad bg-paper text-ink">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionIntro
            tone="light"
            eyebrow="Reviews"
            title="Built on referrals and repeat trust."
            copy="The current P2D Refinishing story is rooted in word-of-mouth, fast responses, and detail-focused workmanship across the GTA."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.08} className="testimonial-card">
              <Quote size={30} className="text-brass" aria-hidden="true" />
              <div className="mt-5 flex gap-1">
                {Array.from({ length: 5 }).map((_, star) => (
                  <Star key={star} size={16} className="fill-brass text-brass" aria-hidden="true" />
                ))}
              </div>
              <p className="mt-6">{testimonial.quote}</p>
              <div className="mt-8">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.detail}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
