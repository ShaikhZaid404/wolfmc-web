import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ToastProvider } from "@/components/ui/ToastContext";
import { CommandPalette } from "@/components/features/CommandPalette";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { SERVER_CONFIG } from "@/lib/constants";

export const viewport: Viewport = {
  themeColor: "#A855F7",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SERVER_CONFIG.canonicalUrl),
  title: {
    default: "WolfMC — Official Minecraft Java & Bedrock Server | play.wolfmc.fun",
    template: "%s | WolfMC Network",
  },
  description:
    "Join WolfMC, the premier Minecraft 1.21.11 network. Dominate high-stakes Lifesteal SMP, battle in BoxPvP arenas, and climb ranked Practice duels. Java & Bedrock supported.",
  keywords: [
    "WolfMC",
    "play.wolfmc.fun",
    "Minecraft Lifesteal Server",
    "Minecraft BoxPvP",
    "Minecraft Practice Server",
    "Minecraft 1.21.11",
    "Minecraft Bedrock Server 19299",
    "Minecraft Java Bedrock Crossplay",
    "Best Minecraft Server 2026",
  ],
  authors: [{ name: "Shaikh Zaid" }, { name: "Golu" }],
  creator: "WolfMC Leadership",
  publisher: "WolfMC",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SERVER_CONFIG.canonicalUrl,
    siteName: "WolfMC",
    title: "WolfMC — Official Minecraft Java & Bedrock Server",
    description:
      "Join WolfMC on play.wolfmc.fun! Experience premier Lifesteal, BoxPvP, and Practice gamemodes with sub-20ms knockback.",
    images: [
      {
        url: "/wolfmc.png",
        width: 1200,
        height: 630,
        alt: "WolfMC Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WolfMC — Official Minecraft Server",
    description: "Join WolfMC (play.wolfmc.fun) on Minecraft 1.21.11. Lifesteal, BoxPvP, Practice.",
    images: ["/wolfmc.png"],
  },
  icons: {
    icon: "/wolfmc.png",
    shortcut: "/wolfmc.png",
    apple: "/wolfmc.png",
  },
  alternates: {
    canonical: SERVER_CONFIG.canonicalUrl,
    types: {
      "text/plain": [{ url: "/llms.txt", title: "AI-readable description" }],
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "VideoGame",
        name: "WolfMC",
        url: SERVER_CONFIG.canonicalUrl,
        description:
          "WolfMC is a competitive Minecraft crossplay multiplayer server featuring Lifesteal, BoxPvP, and Practice. Server IP: play.wolfmc.fun (Java) / port 19299 (Bedrock).",
        gamePlatform: ["Minecraft Java Edition 1.21.11", "Minecraft Bedrock Edition"],
        genre: ["PvP", "Survival", "Multiplayer", "Action"],
        playMode: "MultiPlayer",
        operatingSystem: "Cross-platform (Java & Bedrock)",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "Organization",
        name: "WolfMC",
        url: SERVER_CONFIG.canonicalUrl,
        logo: `${SERVER_CONFIG.canonicalUrl}/wolfmc.png`,
        sameAs: [SERVER_CONFIG.discordUrl],
      },
      {
        "@type": "WebSite",
        name: "WolfMC",
        url: SERVER_CONFIG.canonicalUrl,
      },
    ],
  };

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="AI-readable documentation" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#050505] text-[#FAFAFA] antialiased selection:bg-purple-600/30 selection:text-white flex flex-col">
        <ToastProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CommandPalette />
          <CookieConsent />
        </ToastProvider>
      </body>
    </html>
  );
}
