import { trustItems } from "@/lib/site-data";

export function TrustStrip() {
  const items = [...trustItems, ...trustItems];

  return (
    <section className="overflow-hidden border-y border-gold/25 bg-gold text-ink">
      <div className="trust-marquee">
        {items.map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </section>
  );
}
