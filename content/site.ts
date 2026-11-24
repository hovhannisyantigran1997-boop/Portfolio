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
    "I write SEO articles for tech and consumer brands, and newsletters for Media Miami on finance, health, manifestation, and speculative fiction.",
  about: [
    "I'm a content writer based in Yerevan. At Media Miami, I write and produce a range of newsletters, each with its own voice, format, and audience, from market briefings and manifestation letters to speculative fiction set in 2045.",
    "Alongside that, I write long-form SEO and AI-search-ready articles for brands, built on clear structure, real research, and a house style that stays consistent from the first piece to the fiftieth.",
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
    name: "Async",
    sector: "AI video & audio",
    summary:
      "Long-form blog content for an AI video and audio platform, optimised for both classic SEO and AI search.",
    samples: [
      { title: "Sydney Sweeney’s Novig ad", href: "https://async.com/blog/sydney-sweeney-novig-ad/" },
      { title: "Halloween social media templates", href: "https://async.com/blog/halloween-social-media-templates/" },
      { title: "Higgsfield AI review", href: "https://async.com/blog/higgsfield-ai-review/" },
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
      { title: "DMARC and email security", href: "https://easydmarc.com/blog/dmarc-email-security/" },
    ],
  },
];

export type Newsletter = {
  name: string;
  niche: string;
  tagline?: string; // optional one-liner
  cadence?: string; // optional, e.g. "Daily"
  href?: string; // optional link, makes the card clickable
};

export const newsletters: Newsletter[] = [
  {
    name: "Market Memo",
    niche: "Finance",
    tagline: "Financial markets, sector rotation, and what the charts are saying.",
  },
  {
    name: "Business Moves",
    niche: "Finance",
    tagline: "The business and money moves worth knowing about, in plain English.",
  },
  {
    name: "Top Story Daily",
    niche: "Finance",
    tagline: "One market story a day, paired with the moment in history it echoes.",
    cadence: "Daily",
  },
  {
    name: "Mindful Vitality",
    niche: "Health",
    tagline: "Women's midlife health, explained with care.",
  },
  {
    name: "The Infinite Flow",
    niche: "Manifestation",
    tagline: "Gentle, rest-first reflections on manifesting the life you want.",
  },
  {
    name: "Feminine Frequency",
    niche: "Manifestation",
    tagline: "A daily meditation and manifestation letter.",
    cadence: "Daily",
  },
  {
    name: "2045",
    niche: "Fiction & finance",
    tagline: "Speculative fiction: dispatches from a near future in the making.",
  },
];

export const services = [
  "SEO & AI-search blog content",
  "Newsletter strategy, writing & production",
  "Voice-matched ghostwriting",
  "Email packaging: subject lines, previews, CTAs",
];
