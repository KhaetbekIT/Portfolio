import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SchemaOrg } from "@/components/scripts/schema.org";
import { ENV } from "@/configs/env.config";
import { fonts } from "@/configs/font.config";
import { locales } from "@/configs/i18n.config";
import { Footer } from "@/layouts/footer.layout";
import { Header } from "@/layouts/header.layout";
import { cn } from "@/lib/utils";
import type { DynamicMetadata, LayoutProps } from "@/types/layouts.type";

export const generateStaticParams = async () => {
	return locales.map((locale) => ({ locale }));
};

export const generateMetadata = async ({
	params,
}: DynamicMetadata): Promise<Metadata> => {
	const { locale } = await params;

	const t = await getTranslations("SEO");

	const baseUrl = ENV.NEXT_PUBLIC_URL;

	const title = t("title");
	const description = t("description");
	const keywords = t("keywords");

	return {
		metadataBase: new URL(baseUrl),

		title: {
			default: title,
			template: "%s | Khaetbek",
		},

		description,
		keywords,

		authors: [{ name: "Khaetbek", url: baseUrl }],
		creator: "Khaetbek",
		publisher: "Khaetbek",

		alternates: {
			canonical: `/${locale}`,
			languages: {
				en: "/en",
				ru: "/ru",
				uz: "/uz",
			},
		},

		openGraph: {
			type: "website",
			locale,
			url: `/${locale}`,
			siteName: "Khaetbek Portfolio",

			title,
			description,

			images: [
				{
					url: "/og.jpg",
					width: 1200,
					height: 630,
					alt: title,
				},
			],
		},

		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: ["/og.jpg"],
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

		category: "technology",
	};
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#f8fafc" },
		{ media: "(prefers-color-scheme: dark)", color: "#0f1419" },
	],
	width: "device-width",
	initialScale: 1,
};

const LocaleLayout = async ({ children, params }: LayoutProps) => {
	const { locale } = await params;

	if (!locales.includes(locale)) {
		notFound();
	}

	setRequestLocale(locale);

	return (
		<html lang={locale} dir="ltr" translate="no" className={"dark"}>
			<body
				className={cn(
					fonts.inter.variable,
					fonts.jetbrainsMono.variable,
					"font-sans antialiased min-h-screen flex flex-col justify-between",
				)}
			>
				<NextIntlClientProvider>
					<Header />

					<main className="flex-1">{children}</main>

					<Footer />

					<Analytics />

					<SchemaOrg />
				</NextIntlClientProvider>
			</body>
		</html>
	);
};

export default LocaleLayout;
