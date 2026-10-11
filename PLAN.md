# WolfMC — Website Master Plan

---

## Overview

| Field | Detail |
|-------|--------|
| Server Name | WolfMC |
| Server IP | `play.wolfmc.fun` |
| Gamemodes | Lifesteal, BoxPvP, Practice |
| Discord | https://discord.gg/PKYFEDhFkb |
| Logo | Purple 3D "W" — `assets/wolfmc.png` |
| Server Version | 1.21.11 (Java & Bedrock Supported) |
| Java Connection | `play.wolfmc.fun` (Port: 25565 default) |
| Bedrock Connection | `play.wolfmc.fun` (Port: 19299) |
| Tech Stack | Next.js 15 (App Router) + React + Tailwind CSS |
| Deployment | Vercel |
| Icons | Lucide React + Google Material Symbols |
| Style | Glassmorphism + Minimalistic — Zero emojis, all icons |

---

## Brand Identity — Glassmorphism + Minimalistic

### Design Philosophy

Two pillars driving every visual decision:

**1. Glassmorphism**
- Frosted glass cards with `backdrop-blur-xl` (20-40px blur)
- Semi-transparent backgrounds: `rgba(255,255,255,0.03)` to `rgba(255,255,255,0.08)`
- Subtle 1px borders: `rgba(255,255,255,0.08)` — barely visible, just enough definition
- Soft inner glow on hover, never harsh neon
- Layered depth — glass panels stacked over a soft gradient background

**2. Minimalistic**
- Tons of whitespace / negative space — let content breathe
- Maximum 2-3 elements per visual group
- No clutter, no decoration for decoration's sake
- Text hierarchy does the heavy lifting — size & weight, not color spam
- Icons are simple, thin-stroke (Lucide default)
- Every element earns its place or gets removed

### What This is NOT
- Not cyberpunk / neon
- Not heavy gradients or RGB glow
- Not busy or cluttered
- Not dark-gaming-edgy — it's dark but REFINED

### Color Palette

| Token | Hex / Value | Usage |
|-------|-------------|-------|
| `bg-primary` | `#050505` | Deep black page background |
| `bg-secondary` | `#0A0A0A` | Slightly lifted sections |
| `glass-bg` | `rgba(255,255,255,0.04)` | Glass card fill |
| `glass-bg-hover` | `rgba(255,255,255,0.08)` | Glass card hover fill |
| `glass-border` | `rgba(255,255,255,0.08)` | Glass card border |
| `glass-border-hover` | `rgba(255,255,255,0.15)` | Glass card hover border |
| `purple-500` | `#A855F7` | Primary brand accent (used sparingly) |
| `purple-400` | `#C084FC` | Light accent for highlights |
| `purple-500/10` | `rgba(168,85,247,0.1)` | Subtle purple tint behind glass |
| `purple-500/20` | `rgba(168,85,247,0.2)` | Purple glow on important CTAs |
| `text-primary` | `#FAFAFA` | Headings |
| `text-secondary` | `#A1A1AA` | Body text |
| `text-muted` | `#52525B` | Captions, subtle info |
| `accent-red` | `#EF4444` | Lifesteal gamemode |
| `accent-orange` | `#F97316` | BoxPvP gamemode |
| `accent-cyan` | `#06B6D4` | Practice gamemode |

### Background Treatment
- Base: Pure dark `#050505`
- Soft radial purple glow at top center (very subtle, 5-10% opacity)
- Optional: subtle noise texture overlay at 2-3% opacity for depth
- NO grid lines, NO particles — keep it clean

### Glass Card Recipe (CSS)
```css
.glass-card {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
}

.glass-card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px rgba(168, 85, 247, 0.06);
}
```

### Spacing & Layout
- Section padding: `py-24` to `py-32` (96px-128px) — generous breathing room
- Card padding: `p-8` to `p-10` (32px-40px)
- Gap between cards: `gap-6` to `gap-8` (24px-32px)
- Max content width: `max-w-6xl` (1152px) centered
- Text line-height: relaxed (`leading-relaxed`)

---

## Typography

### Font Stack

| Role | Font | Weight | Where |
|------|------|--------|-------|
| **Primary / Body** | **Rajdhani** | 400, 500, 600, 700 | Body text, UI, nav, buttons, descriptions |
| **Display / Headings** | **Bebas Neue** | 400 | Large section titles, hero heading, gamemode names |
| **Aesthetic / Accent** | **Playfair Display Italic** | 400i, 700i | Taglines, quotes, special callouts, subtle hero subtitles |

### Why these fonts?

**Rajdhani** — Geometric, semi-condensed sans-serif. Feels techy and gaming-ready.
Clean and readable at all sizes. The "normal" font the user wants.

**Bebas Neue** — All-caps, tall, bold display font. Used by esports teams,
gaming brands, and movie posters. Perfect for large section headers.

**Playfair Display Italic** — Elegant serif with dramatic italic angles.
This is the "tede/fancy/aesthetic" font — slanted, decorative, high contrast.
Use sparingly for taglines like "Dominate the Arena" or "Rise Above".

### Other options considered

| Font | Style | Notes |
|------|-------|-------|
| Instrument Serif Italic | Aesthetic | Softer, more editorial — good alternative |
| Cormorant Garamond Italic | Aesthetic | Very elegant, classical tilt |
| Chakra Petch | Primary alt | Similar to Rajdhani but wider |
| Space Grotesk | Primary alt | More modern geometric |
| Unbounded | Display alt | Rounded, bubbly display |
| Clash Display | Display alt | Clean geometric display |

---

## Site Structure (All Sections — Single Page + Separate Pages)

The landing page is ONE long scrollable page with multiple sections.
Some sections also have dedicated pages for more detail.

### Navigation Bar (Fixed)
- WolfMC logo (W icon) + "WolfMC" text
- Links: Home, Gamemodes, Vote, Store, Staff, Rules
- Discord icon (SVG, no text) — click opens https://discord.gg/PKYFEDhFkb in new tab
- Server IP with copy button (glass pill style)
- Mobile hamburger menu

---

## Landing Page Sections (Long Scroll)

### Section 1 — Hero (Full Viewport)
- Full-screen `#050505` background
- Single soft purple radial glow behind center (very low opacity, like a spotlight)
- WolfMC logo centered (medium-large, not oversized)
- **Bebas Neue:** "WOLFMC" — large but clean, letter-spaced
- **Playfair Display Italic:** *"Where Legends Are Forged"* — smaller, muted text color
- Generous vertical spacing between elements
- Server IP `play.wolfmc.fun` in a glass pill with copy icon (Lucide `Copy`)
- Live player count — small subtle badge, not flashy
- Two CTA buttons: glass-style "Start Playing" / outlined "Join Discord"
- Minimal scroll-down indicator (thin chevron or line)
- NO particles, NO grid, NO heavy animation — just clean entry with soft fade-in

### Section 2 — Server Features (Why WolfMC?)
- 3-column grid (responsive to 1 column on mobile)
- **Glass cards** with frosted blur background
- Feature cards with thin Lucide icons:
  - Anti-Cheat Protection (icon: `Shield`)
  - Active Community (icon: `Users`)
  - Regular Updates (icon: `RefreshCw`)
  - Low Latency (icon: `Zap`)
  - Custom Plugins (icon: `Puzzle`)
  - 24/7 Uptime (icon: `Clock`)
- Cards: glass-bg, subtle border, soft purple tint on hover
- Framer Motion fade-up stagger on scroll
- Icons: thin stroke, muted color, purple on hover

### Section 3 — Gamemodes (Main Showcase)
- Section title in **Bebas Neue:** "GAMEMODES"
- Subtitle in **Playfair Display Italic:** "Choose Your Battlefield"
- 3 large gamemode cards, each with:

**Lifesteal**
- Accent color: Red (`#EF4444`)
- Icon: Lucide `Heart` or Material `favorite`
- Description: Steal hearts from enemies. Survive or die.
- Key features: Custom enchants, events, clans
- "Learn More" button

**BoxPvP**
- Accent color: Orange (`#F97316`)
- Icon: Lucide `Swords` or Material `sports_mma`
- Description: Gear up. Fight. Dominate the arena.
- Key features: Kits, arenas, leaderboards
- "Learn More" button

**Practice**
- Accent color: Cyan (`#06B6D4`)
- Icon: Lucide `Target` or Material `track_changes`
- Description: Sharpen your skills. Master every combo.
- Key features: 1v1, FFA, custom arenas
- "Learn More" button

- Each card is a glass panel with its accent color as a subtle top-border or faint inner tint
- Hover: glass-bg slightly brighter, soft shadow lift — NO heavy glow

### Section 4 — Live Server Stats
- 4 glass stat cards in a horizontal row
- Each stat: large number (Bebas Neue) + label (Rajdhani muted)
  - Players Online (live)
  - Total Unique Players (counter animation)
  - Discord Members (live from Discord API)
  - Uptime percentage
- Numbers animate counting up on scroll (intersection observer)
- Clean glass background, no heavy accent colors here

### Section 5 — How to Join (Step by Step)
- **Bebas Neue:** "HOW TO JOIN"
- **Subheader:** Interactive Glass Tab Switcher: `[ Java Edition ]` | `[ Bedrock / MCPE ]`
- **Java Edition Flow (3 Steps):**
  1. Open Minecraft Java (v1.21.11) — icon: `Monitor`
  2. Add Server Address: `play.wolfmc.fun` — icon: `Plus`
  3. Hit Join & Start Playing — icon: `Play`
- **Bedrock / MCPE Flow (3 Steps):**
  1. Open Minecraft Bedrock on Mobile / Console / PC — icon: `Smartphone`
  2. Add Server -> Server Name: `WolfMC`, Server Address: `play.wolfmc.fun`, Port: `19299` — icon: `Layers`
  3. Click Play / Save & Connect — icon: `Zap`
- One-click copy buttons for both IP and Port with instant feedback toast

### Section 6 — Community / Discord CTA
- Large banner section
- Discord logo (SVG) + live member count
- "Join our pack. Be part of the wolfpack."
- Large "Join Discord" button linking to https://discord.gg/PKYFEDhFkb
- Maybe show a few recent Discord messages or member avatars

### Section 7 — Staff Team
- Section title: "THE PACK" or "OUR TEAM"
- Grid of staff cards:
  - Minecraft skin render (from Crafatar API using UUID)
  - IGN (in-game name)
  - Role badge (Owner, Admin, Mod, Helper)
  - Role-colored accent
- Data will come from a simple JSON config file (easy to update)

### Section 8 — Vote Section
- "VOTE FOR US" in **Bebas Neue**
- Why vote: rewards, support the server
- Voting site buttons/links (TopG, MC-Server-List, etc.)
- Top voters leaderboard (if available)

### Section 9 — Store Teaser (Coming Soon)
- "STORE" heading
- "Coming Soon" with a subtle animated pulse
- Email/Discord notification signup (optional)
- Placeholder for when ranks are ready

### Section 10 — Footer
Full-width glass-tinted section at the bottom. Clean, structured, minimal.

**Layout:**
```
┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│  [W] WolfMC              PAGES           GAMEMODES    CONNECT    │
│  Where Legends            Home            Lifesteal    Discord   │
│  Are Forged               Rules           BoxPvP       YouTube   │
│                           Staff           Practice     Twitter   │
│  play.wolfmc.fun [copy]   Vote                                   │
│                           Store                                  │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│  © 2026 WolfMC. Not affiliated with Mojang Studios.              │
│  Privacy Policy  ·  Terms of Service  ·  Cookie Policy           │
└──────────────────────────────────────────────────────────────────┘
```

**Details:**
- Left column: WolfMC "W" logo + "WolfMC" text + tagline in Playfair Italic + Server IP copy pill
- Middle columns: Page links organized in clean columns (PAGES, GAMEMODES)
- Right column: Social/Connect links with icons (Discord icon, etc.)
- Bottom bar: thin border-top separator
  - Left: Copyright + Mojang disclaimer
  - Right: Legal links (Privacy, Terms, Cookies) — separated by `·` dots
- Background: slightly elevated glass bg (`rgba(255,255,255,0.02)`)
- All text: muted color (`text-muted`), links brighten on hover
- Column headings: `text-secondary`, uppercase, letter-spaced, small (Rajdhani 600)

---

## Separate Pages

| Route | Content |
|-------|---------|
| `/` | Landing page (all sections above) |
| `/rules` | Full server rules page |
| `/staff` | Detailed staff page with bios |
| `/vote` | Voting links + rewards info |
| `/store` | Coming soon / Tebex embed later |
| `/gamemodes/lifesteal` | Detailed Lifesteal info |
| `/gamemodes/boxpvp` | Detailed BoxPvP info |
| `/gamemodes/practice` | Detailed Practice info |
| `/privacy` | Privacy Policy (legal) |
| `/terms` | Terms of Service (legal) |
| `/cookies` | Cookie Policy (legal) |

### Legal Pages Design
- Same glassmorphism layout — glass container on dark background
- Clean typography — Rajdhani body, Bebas Neue section headings
- Table of contents sidebar (sticky on desktop, collapsible on mobile)
- Last updated date shown at top
- Simple, readable, properly sectioned with anchor links
- Footer link to all 3 legal pages from every page

---

## Animations & Interactions

All animations are **subtle and minimal** — they enhance, never distract.

| Element | Animation | Library |
|---------|-----------|---------|
| Hero text | Soft fade-up, no letter stagger | Framer Motion |
| Section titles | Fade-up on scroll entry | Framer Motion |
| Glass cards | Fade-up with slight Y offset, staggered | Framer Motion |
| Stats numbers | Count-up on scroll into view | Custom + Intersection Observer |
| Buttons | Subtle scale (1.02x), glass brightness increase | Tailwind transition |
| IP copy | Icon swap: Copy -> Check (200ms) | React state |
| Page transitions | Opacity fade (200ms) | Framer Motion |
| Scroll | Smooth scroll behavior | CSS `scroll-behavior: smooth` |
| Background | Static — no moving particles/grids | None |
| Navbar | `backdrop-blur-xl` + slight bg opacity on scroll | Tailwind + scroll listener |
| Card hover | Border brightens, bg lightens, soft lift | Tailwind transition (300ms) |

### Animation Rules
- Duration: 300-500ms max, never longer
- Easing: `ease-out` or custom cubic-bezier
- NO bounce, NO spring, NO overshoot
- Stagger delay: 50-100ms between items
- Trigger: on scroll into viewport (once, not repeating)

---

## Technical Architecture

```
wolfmc-web/
  src/
    app/
      layout.tsx          — Root layout, fonts, metadata, JSON-LD
      page.tsx            — Landing page (all sections)
      rules/page.tsx      — Rules page
      staff/page.tsx      — Staff page
      vote/page.tsx       — Vote page
      store/page.tsx      — Store (coming soon)
      privacy/page.tsx    — Privacy Policy
      terms/page.tsx      — Terms of Service
      cookies/page.tsx    — Cookie Policy
      gamemodes/
        lifesteal/page.tsx
        boxpvp/page.tsx
        practice/page.tsx
      api/
        server-status/route.ts  — MC server ping proxy
      sitemap.ts          — Dynamic sitemap generator
      robots.ts           — Dynamic robots.txt generator
    components/
      layout/
        Navbar.tsx
        Footer.tsx
        MobileMenu.tsx
        CookieConsent.tsx  — Cookie consent banner (glass style)
      sections/
        Hero.tsx
        Features.tsx
        Gamemodes.tsx
        Stats.tsx
        HowToJoin.tsx
        Community.tsx
        StaffTeam.tsx
        VoteSection.tsx
        StoreTeaser.tsx
      features/
        CommandPalette.tsx  — Ctrl+K Spotlight quick launcher
        CpsTester.tsx       — In-browser PvP CPS speed reflex tester
        HeartSimulator.tsx  — Lifesteal health & hearts simulator
        SkinInspector.tsx   — Live 3D player skin & avatar viewer
        DiagnosticDrawer.tsx — Real-time server ping & telemetry terminal
        AudioEngine.tsx     — Glass UI click audio toggle & sounds
        ToastContainer.tsx  — Glass floating notification on copy
        BedrockToggle.tsx   — Java / Bedrock address switcher
      ui/
        Button.tsx
        Card.tsx
        Badge.tsx
        CopyButton.tsx
        CountUp.tsx
        SectionHeading.tsx
        GlowCard.tsx
      icons/
        DiscordIcon.tsx
    lib/
      minecraft-ping.ts   — SLP protocol client
      constants.ts        — Server IP, Discord link, etc.
      fonts.ts            — Google Fonts config
      utils.ts            — cn() helper, etc.
    data/
      staff.json          — Staff member data
      vote.json           — Voting links & rewards
      gamemodes.json      — Gamemode details
      rules.json          — Server rules
    styles/
      globals.css         — Tailwind base + custom styles
  public/
    wolfmc.png            — Logo
    og-image.png          — Open Graph image
    favicon.ico           — Favicon (from W logo)
    llms.txt              — AI-readable server description
    site.webmanifest      — PWA manifest
  assets/
    wolfmc.png            — Source logo
```

### Dependencies

| Package | Purpose |
|---------|---------|
| `next` | Framework (v15, App Router) |
| `react` + `react-dom` | UI library |
| `tailwindcss` | Styling |
| `framer-motion` | Animations |
| `lucide-react` | Icons (primary) |
| `@fontsource/rajdhani` | Primary font (or Google Fonts) |
| `@fontsource/bebas-neue` | Display font |
| `@fontsource/playfair-display` | Aesthetic font |
| `clsx` + `tailwind-merge` | Class utilities |
| `minecraft-server-util` | SLP protocol ping |

---

## SEO, AEO & AI Crawler Optimization

> Based on research from Uptify's AI discoverability implementation.
> Goal: Make WolfMC discoverable by Google, Bing, ChatGPT, Gemini, Perplexity, and Claude.

### Meta Tags (Every Page)
- Unique `<title>` per page
- Unique `<meta name="description">` per page
- Canonical URL
- Open Graph (title, description, image)
- Twitter/X card metadata
- Robots policy

**Title patterns:**
```
WolfMC — Minecraft Server | Lifesteal, BoxPvP, Practice
Lifesteal — WolfMC Minecraft Server
Server Rules — WolfMC
Vote for WolfMC — Minecraft Server
```

### Open Graph Image
- Auto-generated or static OG image with WolfMC branding
- Purple background + W logo + server IP + tagline
- 1200x630px for social sharing

### Favicon
- Generated from the W logo (multiple sizes: 16, 32, 180, 192, 512)
- Apple touch icon
- Web manifest (`site.webmanifest`)

---

### JSON-LD Structured Data

Add to relevant pages:

**Homepage — VideoGame + WebSite schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "WolfMC",
  "url": "https://wolfmc.fun",
  "description": "WolfMC is a Minecraft Java server featuring Lifesteal, BoxPvP, and Practice gamemodes. IP: play.wolfmc.fun",
  "gamePlatform": "Minecraft Java Edition 1.21.11",
  "genre": ["PvP", "Survival", "Multiplayer"],
  "playMode": "MultiPlayer",
  "operatingSystem": "Minecraft Java Edition",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "description": "Free to play"
  }
}
```

**FAQ sections — FAQPage schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is WolfMC?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "WolfMC is a Minecraft Java server with Lifesteal, BoxPvP, and Practice gamemodes. Server IP: play.wolfmc.fun"
      }
    }
  ]
}
```

**Organization schema** on every page:
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "WolfMC",
  "url": "https://wolfmc.fun",
  "logo": "https://wolfmc.fun/wolfmc.png",
  "sameAs": ["https://discord.gg/PKYFEDhFkb"]
}
```

---

### robots.txt

```text
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Googlebot
Allow: /

Sitemap: https://wolfmc.fun/sitemap.xml
```

We ALLOW all AI crawlers (most sites block them — we WANT them to index us).

---

### sitemap.xml

Auto-generated via Next.js `app/sitemap.ts`:

```
https://wolfmc.fun/
https://wolfmc.fun/rules
https://wolfmc.fun/staff
https://wolfmc.fun/vote
https://wolfmc.fun/store
https://wolfmc.fun/gamemodes/lifesteal
https://wolfmc.fun/gamemodes/boxpvp
https://wolfmc.fun/gamemodes/practice
https://wolfmc.fun/privacy
https://wolfmc.fun/terms
https://wolfmc.fun/cookies
https://wolfmc.fun/llms.txt
```

---

### llms.txt — AI-Readable Server Description

Create `/public/llms.txt` — a plain-text file that AI crawlers can read to understand WolfMC:

```text
# WolfMC — Minecraft Java & Bedrock Server

> Java Server IP: play.wolfmc.fun
> Bedrock Server IP: play.wolfmc.fun (Port: 19299)
> Version: 1.21.11 (Java & Bedrock Crossplay)
> Discord: https://discord.gg/PKYFEDhFkb
> Website: https://wolfmc.fun

## What is WolfMC?
WolfMC is a Minecraft Java Edition & Bedrock multiplayer server featuring three
competitive gamemodes: Lifesteal, BoxPvP, and Practice. Free to join.

## Gamemodes
- Lifesteal: Steal hearts from enemies. Custom enchants, events, clans.
- BoxPvP: Gear up and fight in competitive arenas. Kits, leaderboards.
- Practice: Sharpen PvP skills with 1v1, FFA, and custom arenas.

## Important Pages
- Homepage: https://wolfmc.fun
- Lifesteal: https://wolfmc.fun/gamemodes/lifesteal
- BoxPvP: https://wolfmc.fun/gamemodes/boxpvp
- Practice: https://wolfmc.fun/gamemodes/practice
- Rules: https://wolfmc.fun/rules
- Vote: https://wolfmc.fun/vote
- Staff: https://wolfmc.fun/staff
- Discord: https://discord.gg/PKYFEDhFkb

## How to Join
1. Java Edition: Add server address play.wolfmc.fun (Version 1.21.11).
2. Bedrock / MCPE: Add server address play.wolfmc.fun with port 19299.
3. Click Join Server.
```

Also add `<link>` tag in HTML `<head>` on every page:
```html
<link rel="alternate" type="text/plain" href="/llms.txt" title="AI-readable server description" />
```

---

### AEO (Answer Engine Optimization)

Add clear Q&A content that AI can directly extract and cite:

**Questions to answer on the website (FAQ section or embedded in pages):**

| Question | Direct Answer |
|----------|---------------|
| What is WolfMC? | WolfMC is a free Minecraft Java & Bedrock server with Lifesteal, BoxPvP, and Practice gamemodes. |
| How do I join WolfMC on Java? | Open Minecraft Java Edition 1.21.11, add server play.wolfmc.fun, and click join. |
| How do I join WolfMC on Bedrock / MCPE? | Add server name WolfMC, address play.wolfmc.fun, and port 19299. |
| What version is WolfMC? | WolfMC runs on Minecraft 1.21.11 with Java & Bedrock crossplay support. |
| Is WolfMC free to play? | Yes, WolfMC is completely free to join and play. |
| What gamemodes does WolfMC have? | WolfMC features Lifesteal, BoxPvP, and Practice gamemodes. |
| Does WolfMC have a Discord? | Yes, join the official community at https://discord.gg/PKYFEDhFkb |
| What is the WolfMC server IP? | The server IP is play.wolfmc.fun (Bedrock port: 19299). |

Format these as proper heading-style questions with concise direct answers.
AI engines (ChatGPT, Gemini, Perplexity) extract these directly.

---

### File Structure for AI/SEO

```
public/
  llms.txt              — AI-readable server info
  robots.txt            — Crawler permissions
  sitemap.xml           — Auto-generated
  wolfmc.png            — Logo
  og-image.png          — Social share image
  favicon.ico           — Favicon
  site.webmanifest      — PWA manifest
app/
  sitemap.ts            — Dynamic sitemap generator
  robots.ts             — Dynamic robots.txt generator
  layout.tsx            — Global JSON-LD + meta + link tags
```

---

## ⚡ Unique & Standout Features (To Stand Out From Typical MC Sites)

1. **Interactive Player Skin Inspector (Glass Card):**
   - User types their IGN (e.g. `ShaikhZaid` or any player) -> renders live 3D avatar & head using MC-Heads / Crafatar API in a frosted glass card.
   - Shows "Ready to play on WolfMC" badge.

2. **Hero Java/Bedrock Dual Switcher:**
   - Sleek glass pill switch: `[ Java (play.wolfmc.fun) | Bedrock (Port 19299) ]`.
   - Copies exact address and port with tailored instructions.

3. **In-Browser CPS (Clicks Per Second) PvP Reflex Tester:**
   - Gamers love testing their clicking speed before jumping into Practice / BoxPvP.
   - Clean minimalist glass click-pad with real-time CPS graph and Wolf Rank rating:
     - < 7 CPS: *Wolf Cub*
     - 8 - 12 CPS: *Pack Warrior*
     - 13+ CPS: *Alpha Leader*

4. **"Wolf Command Palette" (Cmd+K / Ctrl+K Spotlight):**
   - Vercel/Linear-inspired command bar.
   - Pressing `Ctrl+K` or clicking search icon opens a frosted glass quick-launcher:
     - "Copy Java IP", "Copy Bedrock IP", "Join Discord", "Check Rules", "Inspect Skin", "Test CPS".

5. **Interactive Lifesteal Heart Simulator / Calculator:**
   - Sliders for Kills vs Deaths showing real-time animated heart display (custom SVG Minecraft hearts).
   - Shows your simulated health bar and calculated survival tier on WolfMC.

6. **Glass Audio Feedback Engine (Subtle UI Clicks):**
   - Optional sound switch on navbar (Muted by default).
   - Satisfying haptic glass clicks on button hovers and level-up ding on copying IP.

7. **Real-time Server Ping & Telemetry Terminal Drawer:**
   - "Diagnostic Console" modal: shows live ping latency, Java SLP handshake, Bedrock RakNet status, and active server MOTD.

8. **Sleek Glass Floating Toast on IP Copy:**
   - When user clicks IP, a minimalist frosted glass toast slides in: *"IP copied to clipboard. Paste in Minecraft Multiplayer!"* with an auto-dismiss bar.

9. **Live Discord Presence Widget:**
   - Real-time live online counter from Discord Guild Widget API (`https://discord.com/api/guilds/PKYFEDhFkb/widget.json`).

---

## Deployment

- **Platform:** Vercel (free tier)
- **Domain:** Will need custom domain later (wolfmc.fun?)
- **Build:** `next build` (static + serverless)
- **API routes:** Serverless functions on Vercel for MC ping

---

## Status & Data Readiness

- [x] Server version — 1.21.11 (Java & Bedrock Supported)
- [x] Java Connection — `play.wolfmc.fun` (Default 25565)
- [x] Bedrock Connection — `play.wolfmc.fun` (Port: `19299`)
- [x] Server Rules — Formatted & structured in `src/data/rules.json` (6 categories)
- [x] Staff Schema — Pre-configured in `src/data/staff.json` (Ready for friend's IGNs)
- [x] Voting Schema — Pre-configured in `src/data/vote.json` (Ready for friend's links)
- [ ] Ranks and store pricing (Future phase when ready)
- [ ] Custom domain plans (Vercel first, custom domain later)

---

## Design Rules (Non-Negotiable)

1. ZERO emojis anywhere on the website — icons only (Lucide / Material)
2. Dark mode only — no light mode toggle
3. Purple is the brand — every accent ties back to purple
4. **Glassmorphism + Minimalistic** — frosted glass cards, clean whitespace, no clutter
5. NO particles, NO grid backgrounds, NO neon glow
6. Performance first — sub-2-second load, optimized images
7. Mobile-first responsive — looks great on phones
8. Animations are soft and fast (300-500ms) — never bouncy or overdone
9. Typography hierarchy — Bebas Neue for impact, Rajdhani for readability, Playfair Italic for elegance
10. Glass cards use `backdrop-blur`, subtle borders, and soft hover transitions
11. Generous spacing everywhere — sections breathe with `py-24` to `py-32`

---

## 🗺️ Step-by-Step Execution Roadmap (When Code Begins)

```
[ Phase 1: Foundation ]
  ├── Initialize Next.js 15 (App Router, TypeScript, Tailwind CSS)
  ├── Configure Google Fonts (Bebas Neue, Rajdhani, Playfair Display)
  ├── Setup Tailwind glassmorphic tokens & base CSS blurs
  └── Copy logo assets & configure favicon / metadata

[ Phase 2: Shell & Navigation ]
  ├── Frosted Glass Navbar with Discord icon link & Bedrock/Java copy pill
  ├── Multi-column Glass Footer with logo, subpage links & legal bar
  ├── Glass Floating Toast Notification system
  └── Cookie Consent glass banner

[ Phase 3: Landing Page (10 Deep Sections) ]
  ├── Hero: Spotlight blur, typography, dual-engine join switcher, live count
  ├── Features: 6 minimalist frosted glass cards
  ├── Gamemodes: Lifesteal (Crimson), BoxPvP (Orange), Practice (Cyan)
  ├── Stats: Live MC query & Discord member counter
  ├── How To Join: Dual interactive step guides for Java & Bedrock
  ├── Community: Discord glass banner
  ├── Staff: Skin render cards from data/staff.json
  ├── Vote: Reward tiers & voting portals from data/vote.json
  └── Store Teaser: "Coming Soon" ranks teaser

[ Phase 4: WolfMC Exclusives & Interactive Features ]
  ├── Wolf Command Palette (Ctrl+K Spotlight launcher)
  ├── In-Browser CPS PvP Reflex Tester Widget
  ├── Interactive Lifesteal Heart Simulator
  ├── Live 3D Minecraft Skin Inspector
  └── Diagnostic Telemetry Console Drawer

[ Phase 5: Dedicated Subpages & Legal ]
  ├── /rules (Categorized searchable rulebook from data/rules.json)
  ├── /staff (Full team roster)
  ├── /vote (Voting hub & rewards)
  ├── /privacy, /terms, /cookies (Clean glass legal pages)
  └── /gamemodes/* (Deep gamemode guides)

[ Phase 6: AI Discoverability & SEO ]
  ├── /public/llms.txt generation for ChatGPT / Gemini / Claude / Perplexity
  ├── robots.ts & sitemap.ts automated generation
  └── JSON-LD schemas (VideoGame, FAQPage, Organization)

[ Phase 7: Production Build & Vercel Deploy ]
  ├── Strict Next.js production build (`npm run build`)
  ├── Performance & lighthouse optimization (< 2s load time)
  └── Vercel zero-downtime deployment
```
