import type { locales } from "@/configs/i18n.config";
import type messages from "./../../messages/ru.json";

declare module "next-intl" {
	interface AppConfig {
		Locale: (typeof locales)[number];
		Messages: typeof messages;
	}
}
