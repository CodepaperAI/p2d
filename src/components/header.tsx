"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { contact, navItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/82 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="navbar-brand" aria-label="P2D Refinishing home">
          <Image
            src="/brand/p2d-navbar-mark.png"
            alt=""
            width={44}
            height={42}
            priority
            className="navbar-mark-img"
          />
          <span className="leading-none">
            <span className="block font-display text-2xl font-bold tracking-[0.08em] text-white">
              P2D
            </span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.38em] text-gold">
              Refinishing
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-[8px] px-4 py-3 text-sm font-semibold text-silver/80 transition hover:bg-white/[0.08] hover:text-white",
                pathname === item.href && "bg-white/10 text-white",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            className="icon-button"
            href={contact.phoneHref}
            aria-label={`Call P2D Refinishing at ${contact.phone}`}
          >
            <Phone size={18} aria-hidden="true" />
          </a>
          <Link className="quote-button" href="/contact-us">
            Get a Quote
          </Link>
        </div>

        <button
          className="icon-button mobile-menu-button"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      <div
        className={cn(
          "grid overflow-hidden border-t border-white/10 bg-ink transition-[grid-template-rows] duration-300 lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <nav className="min-h-0 px-5" aria-label="Mobile navigation">
          <div className="flex flex-col gap-2 py-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-[8px] px-3 py-3 text-base font-semibold text-silver"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link className="quote-button mt-3 text-center" href="/contact-us" onClick={() => setOpen(false)}>
              Get a Quote
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
