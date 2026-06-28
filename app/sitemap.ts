import type { MetadataRoute } from "next";
import { apps, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const appPages = apps.map((app) => ({
    url: `${site.url}/apps/${app.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...appPages,
    {
      url: `${site.url}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${site.url}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
