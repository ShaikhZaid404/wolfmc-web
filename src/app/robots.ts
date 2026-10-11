import { MetadataRoute } from "next";
import { SERVER_CONFIG } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "GPTBot",
          "ClaudeBot",
          "PerplexityBot",
          "Google-Extended",
          "ChatGPT-User",
          "anthropic-ai",
        ],
        allow: "/",
      },
    ],
    sitemap: `${SERVER_CONFIG.canonicalUrl}/sitemap.xml`,
  };
}
