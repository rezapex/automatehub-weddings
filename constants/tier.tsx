export type Tier = {
  name: string;
  id: string;
  href: string;
  priceMonthly: string;
  priceYearly: string;
  description: string;
  features: string[];
  featured: boolean;
  cta: string;
  onClick: () => void;
};

export const tiers: Tier[] = [
  {
    name: "Hobby",
    id: "tier-hobby",
    href: "#",
    priceMonthly: "$4/mo",
    priceYearly: "$30/yr",
    description: "Best for developers trying to use the platform.",
    features: [
      "5 API requests per day",
      "Access to basic API endpoints",
      "Email support within 48 hours",
      "Community forum access",
      "Monthly newsletter",
    ],
    featured: false,
    cta: "Browse Components",
    onClick: () => {},
  },
  {
    name: "Starter",
    id: "tier-starter",
    href: "#",
    priceMonthly: "$8/mo",
    priceYearly: "$60/yr",
    description: "Perfect for small businesses",
    features: [
      "Everything in Hobby, plus",
      "50 API requests per day",
      "Access to advanced API endpoints",
      "Email support within 24 hours",
      "Community forum access",
      "Monthly newsletter",
      "Self hosting options",
    ],
    featured: false,
    cta: "Buy Now",
    onClick: () => {},
  },
  {
    name: "Professional",
    id: "tier-professional",
    href: "#",
    priceMonthly: "$12/mo",
    priceYearly: "$100/yr",
    description: "Ideal for small to mid range startups",
    features: [
      "Everything in Starter, plus",
      "500 API requests per day",
      "Access to super advanced API endpoints",
      "Email support within 12 hours",
      "Private Community access",
      "Monthly retreats",
      "Self hosting options",
      "Private infrastructure",
      "On-Prem deployments",
    ],
    featured: true,
    cta: "Buy Now",
    onClick: () => {},
  },

  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "#",
    priceMonthly: "Contact Us",
    priceYearly: "Contact Us",
    description: "Best for big fortune 500 companies.",
    features: [
      "Everything in professional, plus",
      "500K API requests per day",
      "Access to super advanced API endpoints",
      "Email support within 12 hours",
      "Private Community access",
      "Monthly retreats",
      "Self hosting options",
      "Private infrastructure",
      "On-Prem deployments",
      "I retweet your tweets personally",
    ],
    featured: false,
    cta: "Contact Us",
    onClick: () => {},
  },
];
