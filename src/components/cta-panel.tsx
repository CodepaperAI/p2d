import { Mail, Phone } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { contact } from "@/lib/site-data";

export function CtaPanel() {
  return (
    <section className="bg-ink px-5 py-8 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-[8px] border border-gold/35 bg-[linear-gradient(135deg,rgba(199,152,74,0.18),rgba(255,255,255,0.06)_42%,rgba(8,11,15,0.92))] p-6 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="eyebrow">Quote ready</p>
          <h2 className="max-w-3xl font-display text-4xl font-bold leading-tight text-white md:text-6xl">
            Send photos, count the doors and drawers, and get a clear cabinet refinishing path.
          </h2>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-silver/75">
            <a className="inline-flex items-center gap-2" href={contact.phoneHref}>
              <Phone size={16} aria-hidden="true" />
              {contact.phone}
            </a>
            <a className="inline-flex items-center gap-2" href={contact.emailHref}>
              <Mail size={16} aria-hidden="true" />
              {contact.email}
            </a>
          </div>
        </div>
        <ButtonLink href="/contact-us" variant="silver">
          Start quote
        </ButtonLink>
      </div>
    </section>
  );
}
