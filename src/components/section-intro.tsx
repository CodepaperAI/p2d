import { cn } from "@/lib/utils";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

export function SectionIntro({
  eyebrow,
  title,
  copy,
  align = "left",
  tone = "dark",
}: SectionIntroProps) {
  return (
    <div
      className={cn(
        "section-intro",
        align === "center" && "mx-auto text-center",
        tone === "light" && "section-intro-light",
      )}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </div>
  );
}
