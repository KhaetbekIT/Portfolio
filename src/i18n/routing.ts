import { defineRouting } from "next-intl/routing";
import { defaultLocale, locales } from "@/configs/i18n.config";

export const routing = defineRouting({
	locales,
	defaultLocale,
	localePrefix: {
		mode: "as-needed",
	},
	localeDetection: false,
});
