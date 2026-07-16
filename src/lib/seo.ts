import type { Metadata } from "next";
import { blogPosts, contact, faqs, images, serviceAreas, services } from "@/lib/site-data";

export const siteConfig = {
  name: "P2D Refinishing",
  legalName: "P2D Refinishing",
  domain: "p2drefinishing.com",
  url: "https://p2drefinishing.com",
  locale: "en_CA",
  logo: "/brand/p2d-refinishing-logo.png",
  description:
    "P2D Refinishing refinishes kitchen and bathroom cabinetry across Toronto, York, and the GTA with durable factory-style finishes.",
};

export const seoRoutes = [
  {
    path: "/",
    label: "Home",
    title: "Kitchen & Bathroom Cabinet Refinishing Toronto",
    description:
      "Kitchen and bathroom cabinet refinishing in Toronto and the GTA. P2D Refinishing restores existing cabinetry with smooth, durable factory-style finishes.",
    image: images.hero,
    priority: 1,
    changeFrequency: "weekly",
  },
  {
    path: "/about-us",
    label: "About",
    title: "About P2D Refinishing",
    description:
      "Learn about P2D Refinishing, the GTA cabinetry refinishing team serving homeowners since 2008 with careful prep, spray finishing, and more than 600 projects.",
    image: images.workshop,
    priority: 0.75,
    changeFrequency: "monthly",
  },
  {
    path: "/services",
    label: "Services",
    title: "Cabinet Refinishing Services Toronto & GTA",
    description:
      "Explore kitchen cabinet refinishing, melamine and laminate painting, cabinet door replacement, and bathroom vanity refinishing across Toronto and the GTA.",
    image: images.kitchenAfter,
    priority: 0.9,
    changeFrequency: "weekly",
  },
  {
    path: "/the-process",
    label: "Process",
    title: "Cabinet Refinishing Process",
    description:
      "See P2D Refinishing's cabinet refinishing process: removal, cleaning, sanding, priming, spray finishing, on-site painting, and reinstall.",
    image: images.workshop,
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/blogs",
    label: "Blogs",
    title: "Cabinet Refinishing Guides Toronto",
    description:
      "P2D Refinishing cabinet refinishing guides for Toronto homeowners comparing finishes, costs, spray painting, refacing, and durability.",
    image: images.farmhouse,
    priority: 0.65,
    changeFrequency: "weekly",
  },
  {
    path: "/contact-us",
    label: "Contact",
    title: "Contact P2D Refinishing",
    description:
      "Contact P2D Refinishing for a kitchen or bathroom cabinet refinishing quote in Toronto, York, and the Greater Toronto Area.",
    image: images.hero,
    priority: 0.85,
    changeFrequency: "monthly",
  },
] as const;

export type SeoPath = (typeof seoRoutes)[number]["path"];

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

function absoluteImageUrl(path: string) {
  return path.startsWith("http") ? path : absoluteUrl(path);
}

export function getSeoRoute(path: SeoPath) {
  return seoRoutes.find((route) => route.path === path) ?? seoRoutes[0];
}

export function getRouteMetadata(path: SeoPath): Metadata {
  const route = getSeoRoute(path);
  const canonical = absoluteUrl(route.path);
  const title =
    route.path === "/"
      ? { absolute: `${siteConfig.name} | ${route.title}` }
      : route.title;
  const imageUrl = absoluteImageUrl(route.image);

  return {
    title,
    description: route.description,
    alternates: {
      canonical,
    },
    keywords: [
      "cabinet refinishing Toronto",
      "kitchen cabinet refinishing GTA",
      "bathroom vanity refinishing",
      "cabinet painting Toronto",
      "melamine cabinet painting",
      "cabinet door replacement",
      "P2D Refinishing",
    ],
    openGraph: {
      title: `${route.title} | ${siteConfig.name}`,
      description: route.description,
      url: canonical,
      siteName: siteConfig.name,
      images: [
        {
          url: imageUrl,
          alt: `${siteConfig.name} - ${route.label}`,
        },
      ],
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${route.title} | ${siteConfig.name}`,
      description: route.description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "en-CA",
    publisher: {
      "@id": `${siteConfig.url}/#business`,
    },
  };
}

export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.logo),
    image: absoluteImageUrl(images.hero),
    description: siteConfig.description,
    telephone: contact.phone,
    email: contact.email,
    priceRange: "$$$",
    foundingDate: "2008",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2710 St Clair Ave W Unit A",
      addressLocality: "York",
      addressRegion: "ON",
      postalCode: "M6N 1M2",
      addressCountry: "CA",
    },
    areaServed: serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        areaServed: "Greater Toronto Area",
        provider: {
          "@id": `${siteConfig.url}/#business`,
        },
      },
    })),
  };
}

export function getWebPageJsonLd(path: SeoPath, pageType = "WebPage") {
  const route = getSeoRoute(path);

  return {
    "@context": "https://schema.org",
    "@type": pageType,
    "@id": `${absoluteUrl(route.path)}#webpage`,
    url: absoluteUrl(route.path),
    name: route.title,
    description: route.description,
    inLanguage: "en-CA",
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    about: {
      "@id": `${siteConfig.url}/#business`,
    },
    breadcrumb: getBreadcrumbJsonLd(path),
  };
}

export function getBreadcrumbJsonLd(path: SeoPath) {
  const route = getSeoRoute(path);
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: absoluteUrl("/"),
    },
  ];

  if (route.path !== "/") {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: route.label,
      item: absoluteUrl(route.path),
    });
  }

  return {
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

export function getServicesJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${absoluteUrl("/services")}#services`,
    name: "P2D Refinishing cabinet refinishing services",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        image: absoluteImageUrl(service.image),
        provider: {
          "@id": `${siteConfig.url}/#business`,
        },
        areaServed: serviceAreas.join(", "),
      },
    })),
  };
}

export function getFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${absoluteUrl("/")}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getBlogJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${absoluteUrl("/blogs")}#blog`,
    name: "P2D Refinishing cabinet refinishing guides",
    url: absoluteUrl("/blogs"),
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      datePublished: toIsoDate(post.date),
      url: post.href,
      description: post.excerpt,
      publisher: {
        "@id": `${siteConfig.url}/#business`,
      },
    })),
  };
}

function toIsoDate(date: string) {
  const parsed = new Date(`${date} 12:00:00 GMT-0400`);

  if (Number.isNaN(parsed.getTime())) {
    return date;
  }

  return parsed.toISOString().slice(0, 10);
}
