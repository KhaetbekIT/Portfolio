import type { Metadata } from "next";
import type { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ENV } from "@/configs/env.config";
import { locales } from "@/configs/i18n.config";
import { ROUTERS } from "@/configs/router.config";
import type { DynamicMetadata } from "@/types/layouts.type";
import { AboutContent } from "./_components/about-content";

export const generateMetadata = async ({
	params,
}: DynamicMetadata): Promise<Metadata> => {
	const { locale } = await params;

	const t = await getTranslations({
		locale,
		namespace: "AboutPage.SEO",
	});

	const baseUrl = ENV.NEXT_PUBLIC_URL;
	const path = ROUTERS.about;

	return {
		metadataBase: new URL(baseUrl),

		title: t("title"),
		description: t("description"),
		keywords: t("keywords"),

		applicationName: "Khaetbek Portfolio",
		authors: [{ name: "Khaetbek", url: baseUrl }],
		creator: "Khaetbek",
		category: "technology",

		alternates: {
			canonical: `${baseUrl}/${locale}${path}`,
			languages: Object.fromEntries(
				locales.map((l) => [l, `${baseUrl}/${l}${path}`]),
			),
		},

		openGraph: {
			title: t("title"),
			description: t("description"),
			url: `${baseUrl}/${locale}${path}`,
			siteName: "Khaetbek",
			locale,
			type: "website",
			images: [
				{
					url: `${baseUrl}/og-image.png`,
					width: 1200,
					height: 630,
					alt: t("title"),
				},
			],
		},

		twitter: {
			card: "summary_large_image",
			title: t("title"),
			description: t("description"),
			images: [`${baseUrl}/og-image.png`],
			creator: "@khaetbek",
		},

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
	};
};

const Page = async ({ params }: PageProps<"/[locale]/about">) => {
	const { locale } = await params;
	setRequestLocale(locale as Locale);

	return <AboutContent />;
};

export default Page;
