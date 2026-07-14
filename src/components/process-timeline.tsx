import { processSteps } from "@/lib/site-data";
import { Reveal } from "@/components/reveal";
import { SectionIntro } from "@/components/section-intro";

export function ProcessTimeline() {
  return (
    <section className="section-pad bg-ink">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionIntro
            eyebrow="Process"
            title="The difference is in the prep, spray, and reinstall."
            copy="P2D Refinishing splits the project between a controlled spray facility and careful on-site work so the kitchen stays functional while the finish gets the right treatment."
          />
        </Reveal>
        <div className="timeline mt-12">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.07} className="timeline-row">
              <div className="timeline-index">{String(index + 1).padStart(2, "0")}</div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
