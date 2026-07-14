import { stats } from "@/lib/site-data";
import { Reveal } from "@/components/reveal";

export function StatsBand() {
  return (
    <section className="section-pad bg-ink">
      <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.06} className="stat-card">
            <p>{stat.value}</p>
            <span>{stat.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
