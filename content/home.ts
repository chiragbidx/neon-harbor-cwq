// ─── Hero ───────────────────────────────────────────────────────────────────
export type HeroContent = {
  badgeInner: string;
  badgeOuter: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImageLight: string;
  heroImageDark: string;
  heroImageAlt: string;
};

// ...types unchanged...

// ─── Navbar ─────────────────────────────────────────────────────────────────
export type NavRoute = { href: string; label: string };
export type NavFeature = { title: string; description: string };
export type NavbarContent = {
  brandName: string;
  routes: NavRoute[];
  featureDropdownLabel: string;
  featureImage: { src: string; alt: string };
  features: NavFeature[];
  signInLabel: string;
  signUpLabel: string;
  dashboardLabel: string;
  githubLink: { href: string; ariaLabel: string };
};

// ─── Root ───────────────────────────────────────────────────────────────────
export type HomeContent = {
  hero: HeroContent;
  sponsors: SponsorsContent;
  benefits: BenefitsContent;
  features: FeaturesContent;
  services: ServicesContent;
  testimonials: TestimonialsContent;
  team: TeamContent;
  pricing: PricingContent;
  contact: ContactContent;
  faq: FaqContent;
  footer: FooterContent;
  navbar: NavbarContent;
};

// ─── Defaults ───────────────────────────────────────────────────────────────

export const defaultHomeContent: HomeContent = {
  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    badgeInner: "Launch",
    badgeOuter: "Introducing LeadBase",
    titleBefore: "Grow Your Business with",
    titleHighlight: "LeadBase",
    titleAfter: "",
    subtitle:
      "A simple CRM to organize contacts, track deals, and manage client relationships—all in one place.",
    primaryCta: { label: "Get Started Free", href: "#signup" },
    secondaryCta: { label: "Learn More", href: "#features" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "LeadBase dashboard preview",
  },

  // ── Sponsors ─────────────────────────────────────────────────────────────
  sponsors: {
    heading: "Built with trusted tools",
    items: [
      { icon: "Crown", name: "Vercel" },
      { icon: "Vegan", name: "Stripe" },
      { icon: "Ghost", name: "OpenAI" },
      { icon: "Puzzle", name: "Supabase" },
      { icon: "Squirrel", name: "Clerk" },
      { icon: "Cookie", name: "Resend" },
      { icon: "Drama", name: "Sentry" },
    ],
  },

  // ── Benefits ─────────────────────────────────────────────────────────────
  benefits: {
    eyebrow: "Why LeadBase",
    heading: "Your CRM, without the clutter",
    description:
      "LeadBase is built for busy teams who want a straightforward tool to boost productivity and sales.",
    items: [
      {
        icon: "Blocks",
        title: "Effortless Contact Management",
        description: "Store, organize, and update your contacts with ease. Never lose track of important client details again.",
      },
      {
        icon: "LineChart",
        title: "Track Every Deal",
        description: "Visualize your sales pipeline and monitor deals from first touch to closed-won.",
      },
      {
        icon: "Wallet",
        title: "Stay on Top of Relationships",
        description: "Log notes, track interactions, and build stronger customer connections.",
      },
      {
        icon: "Sparkle",
        title: "Boost Productivity",
        description: "LeadBase streamlines workflows so you can focus on what matters—growing your business.",
      },
    ],
  },

  // ── Features ─────────────────────────────────────────────────────────────
  features: {
    eyebrow: "Features",
    heading: "Grow smarter with LeadBase",
    subtitle:
      "Everything you need to manage leads, nurture relationships, and close more deals.",
    items: [
      { icon: "TabletSmartphone", title: "Effortless Contact Management", description: "Store, organize, and update your contacts with ease. Never lose track of important client details again." },
      { icon: "BadgeCheck", title: "Track Every Deal", description: "Visualize your sales pipeline and monitor deals from first touch to closed-won." },
      { icon: "Goal", title: "Stay on Top of Relationships", description: "Log notes, track interactions, and build stronger customer connections." },
    ],
  },

  // ── Services ─────────────────────────────────────────────────────────────
  services: {
    eyebrow: "CRM Services",
    heading: "Simple, powerful CRM tools",
    subtitle:
      "LeadBase provides just the tools you need—no bloat, no clutter, just real value.",
    items: [
      { title: "Contact Management", description: "Add, edit, search, and organize contacts.", pro: false },
      { title: "Deal Tracking", description: "Visual pipeline for all stages. Stay in control of your sales funnel.", pro: false },
      { title: "Notes & Activity", description: "Log meetings, calls, notes, and customer interactions.", pro: false },
      { title: "Team Collaboration", description: "Assign leads, share notes, and work together.", pro: true },
    ],
  },

  // ── Testimonials ─────────────────────────────────────────────────────────
  testimonials: {
    eyebrow: "Testimonials",
    heading: "Small businesses love LeadBase",
    reviews: [
      { image: "/demo-img.jpg", name: "Alice Carter", role: "Founder, Spark Consulting", comment: "LeadBase let us ditch spreadsheets and finally focus on sales!", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Juan Gomez", role: "Owner, Luna Events", comment: "Our team closes deals faster and doesn’t miss a follow-up. The pipeline tools are fantastic.", rating: 4.9 },
      { image: "/demo-img.jpg", name: "Rahul Singh", role: "Agency Owner", comment: "Simple, clean, and exactly the CRM features we need—nothing extra.", rating: 4.8 },
    ],
  },

  // ── Team ─────────────────────────────────────────────────────────────────
  team: {
    eyebrow: "Team",
    heading: "Meet the LeadBase team",
    members: [
      // Keep sample team data; brand-agnostic for reference
      {
        imageUrl: "/team1.jpg",
        firstName: "Leo",
        lastName: "Miranda",
        positions: ["Lead Engineer", "Starter Architecture"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/leopoldo-miranda/" },
          { name: "Github", url: "https://github.com/leoMirandaa" },
          { name: "X", url: "https://x.com/leo_mirand4" },
        ],
      },
      {
        imageUrl: "/team2.jpg",
        firstName: "Elizabeth",
        lastName: "Moore",
        positions: ["Product Designer"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/leopoldo-miranda/" },
          { name: "X", url: "https://x.com/leo_mirand4" },
        ],
      },
      {
        imageUrl: "/team3.jpg",
        firstName: "David",
        lastName: "Diaz",
        positions: ["Platform Engineer", "AI Integrations"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/leopoldo-miranda/" },
          { name: "Github", url: "https://github.com/leoMirandaa" },
        ],
      },
      {
        imageUrl: "/team1.jpg",
        firstName: "Sarah",
        lastName: "Robinson",
        positions: ["Cloud Engineer", "Kubernetes"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/leopoldo-miranda/" },
          { name: "Github", url: "https://github.com/leoMirandaa" },
          { name: "X", url: "https://x.com/leo_mirand4" },
        ],
      },
      {
        imageUrl: "/team2.jpg",
        firstName: "Michael",
        lastName: "Holland",
        positions: ["DevOps Engineer", "CI/CD"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/leopoldo-miranda/" },
        ],
      },
      {
        imageUrl: "/team3.jpg",
        firstName: "Zoe",
        lastName: "Garcia",
        positions: ["Frontend Engineer", "Design Systems"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/leopoldo-miranda/" },
          { name: "Github", url: "https://github.com/leoMirandaa" },
        ],
      },
      {
        imageUrl: "/team1.jpg",
        firstName: "Evan",
        lastName: "James",
        positions: ["Backend Engineer"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/leopoldo-miranda/" },
          { name: "Github", url: "https://github.com/leoMirandaa" },
          { name: "X", url: "https://x.com/leo_mirand4" },
        ],
      },
      {
        imageUrl: "/team2.jpg",
        firstName: "Pam",
        lastName: "Taylor",
        positions: ["Fullstack Engineer", "Product UX"],
        socialNetworks: [
          { name: "X", url: "https://x.com/leo_mirand4" },
        ],
      },
    ],
  },

  // ── Pricing ──────────────────────────────────────────────────────────────
  pricing: {
    eyebrow: "Pricing",
    heading: "Simple transparent pricing",
    subtitle: "No hidden fees. Get started for free and scale as you grow.",
    priceSuffix: "/month",
    plans: [
      {
        title: "Free",
        popular: false,
        price: 0,
        description: "Perfect to get organized.",
        buttonText: "Start for free",
        benefits: ["Up to 2 teammates", "Basic CRM tools", "Pipeline view", "Simple team workflows"],
      },
      {
        title: "Growth",
        popular: true,
        price: 29,
        description: "For small growing teams.",
        buttonText: "Upgrade",
        benefits: ["Unlimited contacts", "Deal tracking", "Team features", "Priority support", "Custom fields"],
      },
      {
        title: "Pro",
        popular: false,
        price: 99,
        description: "For agencies or power users.",
        buttonText: "Contact sales",
        benefits: ["Advanced analytics", "Integrations", "Premium support"],
      },
    ],
  },

  // ── Contact ──────────────────────────────────────────────────────────────
  contact: {
    eyebrow: "Contact",
    heading: "Get in touch with LeadBase",
    description:
      "Questions? Want a demo or need support? Reach out and our team will be happy to help.",
    mailtoAddress: "chirag@bidx.ai",
    info: {
      address: { label: "Find us", value: "Remote-first • Worldwide" },
      phone: { label: "Call us", value: "" },
      email: { label: "Email us", value: "chirag@bidx.ai" },
      hours: { label: "Support hours", value: ["Monday - Friday", "9AM - 6PM (UTC)"] },
    },
    formSubjects: ["Demo Request", "Pricing Question", "Feature Request", "Support"],
    formSubmitLabel: "Send inquiry",
  },

  // ── FAQ ──────────────────────────────────────────────────────────────────
  faq: {
    eyebrow: "FAQ",
    heading: "Common Questions",
    items: [
      { question: "Is LeadBase free to start with?", answer: "Yes! You can organize contacts and manage deals with no cost." },
      { question: "Can I import my existing contacts?", answer: "You’ll soon be able to import your contacts directly (coming update)." },
      { question: "Is LeadBase suitable for teams?", answer: "Absolutely. Collaborate with teammates, assign leads, and work together." },
      { question: "What makes LeadBase different?", answer: "It’s a CRM designed for simplicity—no bloat, no overwhelming dashboards." },
      { question: "Will I get support?", answer: "Yes! Email us any time and our team will help you out." },
    ],
  },

  // ── Footer ───────────────────────────────────────────────────────────────
  footer: {
    brandName: "LeadBase",
    columns: [
      {
        heading: "Contact",
        links: [
          { label: "chirag@bidx.ai", href: "mailto:chirag@bidx.ai" },
          { label: "GitHub", href: "https://github.com" },
          { label: "X", href: "https://x.com" },
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "Contact Us", href: "#contact" },
          { label: "FAQ", href: "#faq" },
          { label: "Docs", href: "https://nextjs.org/docs" },
        ],
      },
    ],
    copyright: "\u00a9 2026 LeadBase CRM.",
    attribution: { label: "Built on Next.js", href: "https://nextjs.org" },
  },

  // ── Navbar ───────────────────────────────────────────────────────────────
  navbar: {
    brandName: "LeadBase",
    routes: [
      { href: "/#features", label: "Features" },
      { href: "/#pricing", label: "Pricing" },
      { href: "/#contact", label: "Contact" },
      { href: "/#faq", label: "FAQ" },
    ],
    featureDropdownLabel: "Features",
    featureImage: { src: "/demo-img.jpg", alt: "LeadBase preview" },
    features: [
      { title: "Effortless Contact Management", description: "Store, organize, and update your contacts with ease." },
      { title: "Track Every Deal", description: "Visualize your sales pipeline and monitor deals from start to close." },
      { title: "Simple Team Collaboration", description: "Work together, assign leads, and win deals as a team." },
    ],
    signInLabel: "Sign In",
    signUpLabel: "Get Started Free",
    dashboardLabel: "Dashboard",
    githubLink: { href: "https://github.com", ariaLabel: "View on GitHub" },
  },
};

export const homeContent: HomeContent = defaultHomeContent;

export function getHomeContent(): HomeContent {
  return homeContent;
}