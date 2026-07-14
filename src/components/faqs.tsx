import { faqs } from "@/lib/site-data";
import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";

export function Faqs() {
  return (
    <section className="section-pad bg-graphite">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.75fr_1fr]">
        <Reveal>
          <SectionIntro
            eyebrow="FAQ"
            title="Good questions before refinishing."
            copy="Short answers for the decisions homeowners usually need to make before requesting an estimate."
          />
        </Reveal>
        <div className="grid gap-3">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 0.05} className="faq-item">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
