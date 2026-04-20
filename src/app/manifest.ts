import type { MetadataRoute } from "next";
import { ROUTERS } from "@/configs/router.config";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Khaetbek",
		short_name: "Khaetbek",

		start_url: ROUTERS.home,
		scope: ROUTERS.home,

		display: "standalone",
		orientation: "portrait",

		theme_color: "#000000",
		background_color: "#ffffff",

		icons: [
			{
				src: "/web-app-manifest-192x192.png",
				sizes: "192x192",
				type: "image/png",
				purpose: "maskable",
			},
			{
				src: "/web-app-manifest-512x512.png",
				sizes: "512x512",
				type: "image/png",
				purpose: "maskable",
			},
		],
	};
}
