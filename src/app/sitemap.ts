import { MetadataRoute } from "next";
import { SERVER_CONFIG } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SERVER_CONFIG.canonicalUrl;

  const routes = [
    "",
    "/rules",
    "/staff",
    "/vote",
    "/store",
    "/privacy",
    "/terms",
    "/cookies",
    "/llms.txt",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/rules" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
