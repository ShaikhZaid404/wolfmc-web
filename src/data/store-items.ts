export interface StoreItem {
  id: string;
  name: string;
  price: number;
  type: "rank" | "limited" | "key" | "custom";
  tier?: string;
  badge?: string;
  prefix?: string;
  popular?: boolean;
  ultimate?: boolean;
  season?: string;
  vaults?: number;
  auctions?: number;
  afk?: string;
  perks?: string[];
  description?: string;
  iconName?: string;
  image?: string;
}

export interface CurrencyConfig {
  code: string;
  symbol: string;
  rate: number; // multiplied by USD price
  flag: string;
  name: string;
}

export const CURRENCIES: Record<string, CurrencyConfig> = {
  USD: { code: "USD", symbol: "$", rate: 1.0, flag: "US", name: "USD ($)" },
  EUR: { code: "EUR", symbol: "€", rate: 0.92, flag: "EU", name: "EUR (€)" },
  PKR: { code: "PKR", symbol: "Rs ", rate: 278.0, flag: "PK", name: "PKR (Rs)" },
  INR: { code: "INR", symbol: "₹", rate: 84.0, flag: "IN", name: "INR (₹)" },
  NPR: { code: "NPR", symbol: "Rs ", rate: 134.0, flag: "NP", name: "NPR (Rs)" },
  BDT: { code: "BDT", symbol: "৳", rate: 120.0, flag: "BD", name: "BDT (৳)" },
  AED: { code: "AED", symbol: "AED ", rate: 3.67, flag: "AE", name: "AED" },
  SAR: { code: "SAR", symbol: "SAR ", rate: 3.75, flag: "SA", name: "SAR" },
};

export const STORE_ITEMS: Record<string, StoreItem> = {
  "boxpvp-vip": {
    id: "boxpvp-vip",
    name: "Vip",
    price: 1.0,
    type: "rank",
    tier: "Entry tier",
    prefix: "[VIP]",
    vaults: 4,
    auctions: 4,
    afk: "1x",
    iconName: "Wolf",
    image: "/assets/store/ranks/vip.webp",
    perks: [
      "In-game [VIP] prefix",
      "Access to Vip Kit",
      "Access to 4 vaults",
      "Up to 4 auction listings",
      "Access to /enderchest, /hat, /disposal",
    ],
  },
  "boxpvp-vip-plus": {
    id: "boxpvp-vip-plus",
    name: "Vip+",
    price: 1.7,
    type: "rank",
    tier: "Entry tier",
    prefix: "[VIP+]",
    vaults: 7,
    auctions: 6,
    afk: "1x",
    iconName: "PawPrint",
    image: "/assets/store/ranks/vip-plus.webp",
    perks: [
      "In-game [VIP+] prefix",
      "Access to Vip+ Kit",
      "Access to 7 vaults",
      "Up to 6 auction listings",
      "Access to /enderchest, /hat, /disposal, /lay",
    ],
  },
  "boxpvp-mvp": {
    id: "boxpvp-mvp",
    name: "Mvp",
    price: 2.5,
    type: "rank",
    tier: "Mid tier",
    prefix: "[MVP]",
    vaults: 12,
    auctions: 9,
    afk: "2x",
    iconName: "Star",
    image: "/assets/store/ranks/mvp.webp",
    perks: [
      "In-game [MVP] prefix",
      "Access to Mvp Kit",
      "Access to 12 vaults",
      "2x AFK Rewards",
      "Up to 9 auction listings",
      "Access to /enderchest, /hat, /disposal, /sit, /lay",
    ],
  },
  "boxpvp-mvp-plus": {
    id: "boxpvp-mvp-plus",
    name: "Mvp+",
    price: 6.0,
    type: "rank",
    tier: "Mid tier",
    badge: "Most popular",
    popular: true,
    prefix: "[MVP+]",
    vaults: 30,
    auctions: 16,
    afk: "2x",
    iconName: "Sparkles",
    image: "/assets/store/ranks/mvp-plus.webp",
    perks: [
      "In-game [MVP+] prefix",
      "Access to Mvp+ Kit",
      "Access to /pvpon, /pvpoff",
      "Access to 30 vaults",
      "2x AFK Rewards",
      "Up to 16 auction listings",
      "Access to /enderchest, /hat, /disposal, /sit, /lay, /bezooka, /ingore, /unignore",
    ],
  },
  "boxpvp-wolf": {
    id: "boxpvp-wolf",
    name: "Wolf",
    price: 9.0,
    type: "rank",
    tier: "Top tier",
    prefix: "Wolf",
    vaults: 60,
    auctions: 30,
    afk: "3x",
    iconName: "Flame",
    image: "/assets/store/ranks/wolf.webp",
    perks: [
      "In-game Wolf prefix (no brackets)",
      "Access to Wolf, Mvp+, Mvp, Vip+ & Vip Kits",
      "Access to /pvpon, /pvpoff",
      "Access to 60 vaults",
      "3x AFK Rewards",
      "Up to 30 auction listings",
      "Access to /enderchest, /hat, /disposal, /sit, /lay, /bezooka, /ingore, /unignore, /kittycannon, /spin",
    ],
  },
  "boxpvp-wolf-plus": {
    id: "boxpvp-wolf-plus",
    name: "Wolf+",
    price: 16.0,
    type: "rank",
    tier: "Ultimate tier",
    badge: "Ultimate",
    ultimate: true,
    prefix: "Wolf+",
    vaults: 100,
    auctions: 50,
    afk: "5x",
    iconName: "Crown",
    image: "/assets/store/ranks/wolf-plus.webp",
    perks: [
      "In-game Wolf+ prefix (no brackets)",
      "Access to Wolf+, Wolf, Mvp+, Mvp, Vip+ & Vip Kits",
      "Access to 100 vaults",
      "Access to /pvpon, /pvpoff",
      "5x AFK Rewards",
      "Up to 50 auction listings",
      "Access to /enderchest, /hat, /disposal, /sit, /lay, /bezooka, /ingore, /unignore, /kittycannon, /spin, /bellyflop, /smithtable",
    ],
  },
  "boxpvp-ghost": {
    id: "boxpvp-ghost",
    name: "Ghost (Halloween)",
    price: 15.0,
    type: "limited",
    tier: "Limited · ends 31 Oct",
    season: "Halloween",
    prefix: "Ghost",
    vaults: 50,
    auctions: 50,
    afk: "5x",
    iconName: "Ghost",
    image: "/assets/store/halloween/ghost.webp",
    perks: [
      "Duration: only this season",
      "In-game Ghost prefix",
      "Access to Wolf+, Wolf, Mvp+, Mvp, Vip+ & Vip Kits and Halloween Kit",
      "Access to 50 vaults",
      "Access to /pvpon, /pvpoff",
      "5x AFK Rewards",
      "Up to 50 auction listings",
      "Access to /enderchest, /hat, /disposal, /sit, /lay, /bezooka, /ingore, /unignore, /kittycannon, /spin, /bellyflop, /smithtable",
    ],
  },
  "boxpvp-pumpkin": {
    id: "boxpvp-pumpkin",
    name: "Pumpkin (Halloween)",
    price: 15.0,
    type: "limited",
    tier: "Limited · ends 31 Oct",
    season: "Halloween",
    prefix: "Pumpkin",
    vaults: 50,
    auctions: 50,
    afk: "5x",
    iconName: "Pumpkin",
    image: "/assets/store/halloween/pumpkin.webp",
    perks: [
      "Duration: only this season",
      "In-game Pumpkin prefix",
      "Access to Wolf+, Wolf, Mvp+, Mvp, Vip+ & Vip Kits and Halloween Kit",
      "Access to 50 vaults",
      "Access to /pvpon, /pvpoff",
      "5x AFK Rewards",
      "Up to 50 auction listings",
      "Access to /enderchest, /hat, /disposal, /sit, /lay, /bezooka, /ingore, /unignore, /kittycannon, /spin, /bellyflop, /smithtable",
    ],
  },
  "boxpvp-key-halloween": {
    id: "boxpvp-key-halloween",
    name: "Halloween Crate Key",
    price: 2.0,
    type: "key",
    iconName: "Key",
    image: "/assets/store/keys/halloween.webp",
    description: "Exclusive seasonal loot crate with spooky god gear and limited cosmetics.",
  },
  "boxpvp-key-talisman": {
    id: "boxpvp-key-talisman",
    name: "Talisman Crate Key",
    price: 1.5,
    type: "key",
    iconName: "Key",
    image: "/assets/store/keys/talisman.webp",
    description: "Unlocks rare talismans that boost strength, defense, and combat speed.",
  },
  "boxpvp-key-daddy": {
    id: "boxpvp-key-daddy",
    name: "Daddy Crate Key",
    price: 2.0,
    type: "key",
    iconName: "Key",
    image: "/assets/store/keys/daddy.webp",
    description: "Top-tier custom weapons, god armor sets, and overpowered PvP tools.",
  },
  "boxpvp-key-boxpvp": {
    id: "boxpvp-key-boxpvp",
    name: "BoxPvP Crate Key",
    price: 1.0,
    type: "key",
    iconName: "Key",
    image: "/assets/store/keys/boxpvp.webp",
    description: "Essential resource bundles, arena tokens, and combat supplies.",
  },
  "boxpvp-custom": {
    id: "boxpvp-custom",
    name: "Custom Rank (request)",
    price: 0,
    type: "custom",
    iconName: "Wrench",
    image: "/assets/store/ranks/custom.webp",
    description: "Build your dream custom rank with staff on Discord. Custom quote confirmed in ticket.",
  },
};

export const COMPARISON_PERKS = [
  { key: "price", label: "Price", format: (v: number) => `$${v.toFixed(2)}` },
  { key: "vaults", label: "Vaults", format: (v: number) => `${v}` },
  { key: "auctions", label: "Auction Listings", format: (v: number) => `${v}` },
  { key: "afk", label: "AFK Rewards", format: (v: string) => v || "—" },
  { key: "pvpToggle", label: "/pvpon · /pvpoff", getVal: (item: StoreItem) => (item.price >= 6 ? "Yes" : "—") },
  { key: "kittyCannon", label: "/kittycannon", getVal: (item: StoreItem) => (item.price >= 9 ? "Yes" : "—") },
  { key: "smithTable", label: "/smithtable", getVal: (item: StoreItem) => (item.price >= 16 ? "Yes" : "—") },
];
