import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { contact, navItems, serviceAreas } from "@/lib/site-data";
import { ButtonLink } from "@/components/button-link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-silver">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.1fr_0.8fr_1fr]">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="p2d-mark" aria-hidden="true">
              <span />
              <span />
            </span>
            <div>
              <p className="font-display text-3xl font-bold tracking-[0.08em] text-white">P2D</p>
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-gold">Refinishing</p>
            </div>
          </div>
          <p className="max-w-md text-sm leading-7 text-silver/72">
            Kitchen and bathroom cabinetry refinishing for Toronto, York, and the GTA. Smooth
            factory-style finishes without replacing what already works.
          </p>
          <div className="mt-7">
            <ButtonLink href="/contact-us" variant="gold">
              Request quote
            </ButtonLink>
          </div>
        </div>

        <div>
          <h2 className="footer-title">Pages</h2>
          <div className="grid gap-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="footer-link">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="footer-title">Contact</h2>
          <div className="grid gap-4 text-sm">
            <a className="footer-contact" href={contact.phoneHref}>
              <Phone size={17} aria-hidden="true" />
              {contact.phone}
            </a>
            <a className="footer-contact" href={contact.emailHref}>
              <Mail size={17} aria-hidden="true" />
              {contact.email}
            </a>
            <p className="footer-contact">
              <MapPin size={17} aria-hidden="true" />
              {contact.address}
            </p>
          </div>
          <p className="mt-6 text-xs uppercase tracking-[0.22em] text-gold">Service areas</p>
          <p className="mt-3 text-sm leading-7 text-silver/65">{serviceAreas.join(" / ")}</p>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs uppercase tracking-[0.18em] text-silver/45">
        P2D Refinishing. Cabinetry refinishing in the Greater Toronto Area.
      </div>
    </footer>
  );
}
