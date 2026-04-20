import type { MetadataRoute } from "next";
import { ENV } from "@/configs/env.config";
import { ROUTERS } from "@/configs/router.config";

export default function robots(): MetadataRoute.Robots {
	const baseUrl = ENV.NEXT_PUBLIC_URL;

	return {
		rules: [
			{
				userAgent: "*",
				allow: ROUTERS.home,
				disallow: ["/api/", "/admin/"],
			},
		],
		sitemap: `${baseUrl}/sitemap.xml`,
		host: baseUrl,
	};
}
