import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "gold" | "silver" | "ghost";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "gold",
  className,
}: ButtonLinkProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel");
  const classes = cn(
    "group inline-flex min-h-12 items-center justify-center gap-3 rounded-[8px] px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold",
    variant === "gold" &&
      "bg-gold text-ink shadow-[0_18px_50px_rgba(199,152,74,0.25)] hover:bg-gold-light",
    variant === "silver" &&
      "bg-silver text-ink shadow-[0_18px_50px_rgba(215,211,199,0.12)] hover:bg-white",
    variant === "ghost" &&
      "border border-white/20 bg-white/5 text-silver backdrop-blur hover:border-gold/60 hover:text-white",
    className,
  );

  const icon = (
    <span className="grid size-7 place-items-center rounded-full bg-ink/15 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
      <ArrowUpRight size={16} aria-hidden="true" />
    </span>
  );

  if (isExternal) {
    return (
      <a className={classes} href={href}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {children}
      {icon}
    </Link>
  );
}
