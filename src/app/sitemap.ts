import type { MetadataRoute } from "next";
import { ENV } from "@/configs/env.config";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = ENV.NEXT_PUBLIC_URL;

	const routes = ["", "/about", "/projects", "/blog", "/contacts"];
	const locales = ["en", "ru", "uz"];

	const sitemap: MetadataRoute.Sitemap = [];

	for (const locale of locales) {
		for (const route of routes) {
			sitemap.push({
				url: `${baseUrl}/${locale}${route}`,
				lastModified: new Date(),
				changeFrequency: "weekly",
				priority: route === "" ? 1 : 0.7,
			});
		}
	}

	return sitemap;
}
