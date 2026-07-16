import {
  Brush,
  CheckCircle2,
  Home,
  Paintbrush,
  PanelsTopLeft,
  ShieldCheck,
  Sparkles,
  SprayCan,
} from "lucide-react";

export const contact = {
  phone: "+1 (416) 831-8489",
  phoneHref: "tel:+14168318489",
  email: "info@paint2decor.com",
  emailHref: "mailto:info@paint2decor.com",
  address: "2710 St Clair Ave W Unit A, York, ON M6N 1M2",
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About" },
  { href: "/the-process", label: "Process" },
  { href: "/services", label: "Services" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact-us", label: "Contact" },
];

export const images = {
  logo: "/brand/p2d-refinishing-logo.png",
  hero: "/projects/white-kitchen-after.jpeg",
  kitchen: "/projects/brown-kitchen-finished-island.jpeg",
  kitchenBefore: "/projects/brown-kitchen-before-wide.jpeg",
  kitchenBeforeMain: "/projects/brown-kitchen-before-main.jpeg",
  kitchenAfter: "/projects/white-kitchen-after.jpeg",
  oakBefore: "/projects/oak-kitchen-before.jpeg",
  bathroom:
    "https://paint2decor.com/wp-content/uploads/2026/04/modern-bathroom-interior-with-white-vanity-topped-with-gray-countertop_262663-1013.jpg",
  workshop: "/projects/brown-kitchen-before-main.jpeg",
  farmhouse: "/projects/brown-kitchen-finished-island.jpeg",
};

export const stats = [
  { value: "2008", label: "Serving GTA homes since" },
  { value: "600+", label: "Cabinet projects completed" },
  { value: "15+", label: "Years refining the process" },
  { value: "$3k-$8.5k", label: "Typical kitchen refinishing range" },
];

export const trustItems = [
  "HomeStars winner: 2020, 2021, 2022, 2023",
  "Kitchen and bathroom cabinet refinishing",
  "Toronto, York, Vaughan, Mississauga and the GTA",
  "Factory-style spray finish",
  "No full replacement required",
];

export const services = [
  {
    title: "Kitchen Cabinet Refinishing",
    slug: "kitchen-cabinet-refinishing",
    eyebrow: "Signature service",
    description:
      "A smooth, modern spray finish for existing cabinet boxes, doors, and drawer fronts without the cost or disruption of a full replacement.",
    image: images.kitchenAfter,
    icon: SprayCan,
    bullets: ["Factory-style lacquer finish", "Colour consultation", "On-site and booth finishing"],
  },
  {
    title: "Melamine and Laminate Painting",
    slug: "melamine-laminate-painting",
    eyebrow: "Hard surfaces handled",
    description:
      "Specialized primers and prep for surfaces many painters avoid, built to help the new finish bond cleanly and last.",
    image: images.kitchen,
    icon: ShieldCheck,
    bullets: ["Degreasing and sanding", "Bonding primer system", "Durable top coats"],
  },
  {
    title: "Cabinet Door Replacement",
    slug: "cabinet-door-replacement",
    eyebrow: "New style, lower waste",
    description:
      "Keep the cabinet boxes that still work and replace doors or drawer fronts for a dramatic new profile at a smarter budget.",
    image: images.workshop,
    icon: PanelsTopLeft,
    bullets: ["Fresh shaker or slab profiles", "Matched hardware planning", "Lower replacement waste"],
  },
  {
    title: "Bathroom Vanity Refinishing",
    slug: "bathroom-vanity-refinishing",
    eyebrow: "Fast room refresh",
    description:
      "Update bathroom cabinetry with the same clean process, often completed faster than a full bathroom renovation.",
    image: images.bathroom,
    icon: Paintbrush,
    bullets: ["Vanities and storage cabinets", "Moisture-aware prep", "1-2 day active work window"],
  },
];

export const processSteps = [
  {
    title: "Remove and label",
    description:
      "Doors and drawer fronts are removed, protected, and brought to P2D Refinishing's spray facility while fixed cabinet boxes stay in place.",
  },
  {
    title: "Clean, sand, prime",
    description:
      "Every surface is degreased, sanded, and primed so lacquer can bond properly instead of sitting on top of old residue.",
  },
  {
    title: "Spray and cure",
    description:
      "Multiple coats of damage-resistant lacquer are applied in the colour of your choice inside a controlled spray environment.",
  },
  {
    title: "On-site finish",
    description:
      "Fixed cabinet frames are painted in your home with a tidy setup designed to limit mess, fumes, and kitchen downtime.",
  },
  {
    title: "Reinstall and review",
    description:
      "Doors and drawers are reinstalled, aligned, and inspected so the final result feels complete before the team leaves.",
  },
];

export const gallery = [
  {
    title: "Warm wood cabinet starting point",
    label: "Before",
    image: images.kitchenBefore,
    alt: "Brown kitchen cabinets before refinishing",
  },
  {
    title: "Soft white refinished kitchen",
    label: "After",
    image: images.kitchenAfter,
    alt: "White kitchen cabinets after refinishing",
  },
  {
    title: "Island and storage detail",
    label: "Finished",
    image: images.kitchen,
    alt: "Finished kitchen island and cabinet storage after cabinet refinishing",
  },
  {
    title: "Original darker kitchen angle",
    label: "Before",
    image: images.kitchenBeforeMain,
    alt: "Wide kitchen view before refinishing darker wood cabinets",
  },
  {
    title: "Compact oak kitchen before",
    label: "Before",
    image: images.oakBefore,
    alt: "Compact oak kitchen cabinets before refinishing",
  },
];

export const testimonials = [
  {
    quote:
      "They transformed our kitchen without turning the house upside down. The finish looks like it came from the factory.",
    name: "GTA homeowner",
    detail: "Kitchen cabinet refinishing",
  },
  {
    quote:
      "Responsive, tidy, and very detail focused. We kept our boxes and still got the look of a brand new kitchen.",
    name: "York client",
    detail: "Door replacement and refinishing",
  },
  {
    quote:
      "The bathroom vanity went from dated to clean and modern. It was the smartest part of our renovation budget.",
    name: "Toronto homeowner",
    detail: "Bathroom vanity refinishing",
  },
];

export const faqs = [
  {
    question: "Do you refinish cabinets in the home?",
    answer:
      "Yes. Doors and drawer fronts go to the spray facility, while fixed cabinet boxes are finished on site with a controlled setup.",
  },
  {
    question: "How long does the process take?",
    answer:
      "Active on-site work can be as little as a few days for many projects, while the complete door and drawer refinishing process typically takes around 1-2 weeks.",
  },
  {
    question: "Can you paint melamine or laminate cabinets?",
    answer:
      "Yes. P2D Refinishing uses specific cleaning, sanding, and primer steps for melamine and laminate so the new finish has a proper base.",
  },
  {
    question: "How do I get an accurate quote?",
    answer:
      "Send photos by email, call the team, or use the form with your location and the number of doors and drawers.",
  },
];

export const serviceAreas = [
  "Toronto",
  "York",
  "Woodbridge",
  "Mississauga",
  "Brampton",
  "Oakville",
  "Burlington",
  "Ajax",
  "Guelph",
  "Vaughan",
  "Etobicoke",
];

export const blogPosts = [
  {
    title: "Toronto Cabinet Finishing Sheen Guide: Pick the Best Look",
    date: "July 13, 2026",
    href: "https://paint2decor.com/toronto-cabinet-finishing-sheen-guide/",
    excerpt:
      "A practical guide to satin, semi-gloss, matte, and the cabinet sheen that fits Toronto kitchens best.",
  },
  {
    title: "Toronto Cabinet Makeover: 4 Cost Factors Explained",
    date: "July 12, 2026",
    href: "https://paint2decor.com/toronto-cabinet-makeover-cost-factors/",
    excerpt:
      "Understand how material, scope, finish method, and room type affect a cabinet makeover quote.",
  },
  {
    title: "Toronto Cabinet Spray Painting Finish Options: 5 Top Picks",
    date: "July 12, 2026",
    href: "https://paint2decor.com/toronto-cabinet-spray-painting-finish-options/",
    excerpt:
      "Compare tactile feel, curing, and durability details before choosing a spray painted cabinet finish.",
  },
  {
    title: "Signs Cabinets Need Refinishing: Know When to Call York Pros",
    date: "July 11, 2026",
    href: "https://paint2decor.com/signs-cabinets-need-refinishing-york/",
    excerpt:
      "Peeling near wet zones, sticky residue, yellowed maple, and chips are signals refinishing may be due.",
  },
];

export const whyChoose = [
  {
    title: "Designed around your existing home",
    description:
      "The goal is a custom cabinet look without forcing a full kitchen tear-out.",
    icon: Home,
  },
  {
    title: "Real surface preparation",
    description:
      "Degreasing, sanding, and priming happen before finish coats so the result can last.",
    icon: Brush,
  },
  {
    title: "Premium lacquers and paints",
    description:
      "The team uses professional products selected for cabinetry, not generic wall paint.",
    icon: Sparkles,
  },
  {
    title: "Respect for the home",
    description:
      "The current process is built to reduce mess, waste, downtime, and unnecessary replacement.",
    icon: CheckCircle2,
  },
];
