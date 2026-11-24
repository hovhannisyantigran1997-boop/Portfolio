// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE to update your portfolio. No other file needs
//  to change for normal updates (new clients, samples, links).
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Tigran Hovhannisyan",
  role: "Content Writer & Newsletter Producer",
  location: "Yerevan, Armenia · working worldwide",
  email: "hovhannisyantigran1997@gmail.com",
  url: "https://your-domain.vercel.app",
  intro:
    "I write SEO content that ranks and newsletters people actually open — across finance, travel, tech, wellness, and geopolitics.",
  about: [
    "I'm a content writer and independent newsletter producer. I run several publications at once, each with its own voice, format, and audience — from a daily geopolitical briefing to speculative fiction set in 2045.",
    "For brands, I write long-form SEO and AI-search-ready articles built on clear structure, real research, and a house style that stays consistent from the first piece to the fiftieth.",
  ],
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/tigran-hovhannisyan-a1563422b" },
  ],
};

export type Client = {
  name: string;
  sector: string;
  summary: string;
  samples: { title: string; href: string }[];
};

export const clients: Client[] = [
  {
    name: "Ampaway",
    sector: "EV charging",
    summary:
      "SEO articles explaining EV charging to drivers and businesses — practical, accurate, and structured to rank.",
    samples: [],
  },
  {
    name: "Cascade Travel",
    sector: "Travel",
    summary:
      "Destination and trip-planning articles written for search intent without losing the sense of place.",
    samples: [],
  },
  {
    name: "Async",
    sector: "AI video & audio",
    summary:
      "Long-form blog content for an AI video and audio platform, optimised for both classic SEO and AI search.",
    samples: [
      { title: "Sydney Sweeney’s Novig ad", href: "https://async.com/blog/sydney-sweeney-novig-ad/" },
      { title: "Halloween social media templates", href: "https://async.com/blog/halloween-social-media-templates/" },
    ],
  },
  {
    name: "Cheaterbuster",
    sector: "Relationships",
    summary:
      "Sensitive relationship and trust content written with empathy, clarity, and a consistent brand voice.",
    samples: [
      { title: "Is my spouse on dating apps? How to find out", href: "https://www.cheaterbuster.com/blog/is-my-spouse--on-dating-apps" },
      { title: "Signs of emotional cheating", href: "https://www.cheaterbuster.com/blog/signs-of-emotional-cheating" },
      { title: "What is ghosting?", href: "https://www.cheaterbuster.com/blog/what-is-ghosting" },
    ],
  },
  {
    name: "EasyDMARC",
    sector: "Email security",
    summary:
      "Technical explainers and checklists on DMARC and DNS, written so IT teams can follow them step by step.",
    samples: [
      { title: "DMARC provider migration checklist", href: "https://easydmarc.com/blog/dmarc-provider-migration-checklist/" },
      { title: "DNS propagation, explained", href: "https://easydmarc.com/blog/dns-propagation/" },
    ],
  },
];

export type Newsletter = {
  name: string;
  tagline: string;
  cadence?: string;
  href?: string;
};

export const newsletters: Newsletter[] = [
  {
    name: "The Red Queen",
    tagline: "Daily geopolitical intelligence, distilled.",
    cadence: "Daily",
  },
  {
    name: "Market Memo",
    tagline: "Financial markets, sector rotation, and what the charts are saying.",
  },
  {
    name: "2045 — Letters from the Transition",
    tagline: "Speculative fiction: dispatches from a near future in the making.",
  },
  {
    name: "Top Story Daily",
    tagline: "Today's biggest story, and the moment in history it rhymes with.",
    cadence: "Daily",
  },
  {
    name: "Morning Reset",
    tagline: "A calm, practical wellness letter to start the day.",
  },
  {
    name: "Mindful Vitality",
    tagline: "Women's midlife health, explained with care.",
  },
  {
    name: "Feminine Frequency",
    tagline: "A daily meditation and manifestation letter.",
    cadence: "Daily",
  },
];

export const services = [
  "SEO & AI-search blog content",
  "Newsletter strategy, writing & production",
  "Voice-matched ghostwriting",
  "Email packaging: subject lines, previews, CTAs",
];
