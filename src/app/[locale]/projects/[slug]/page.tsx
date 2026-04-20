import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { ENV } from "@/configs/env.config";
import { projects } from "@/mocks/projects.mock";
import type { DynamicMetadata } from "@/types/layouts.type";
import { ProjectContent } from "./_components/project-content";

export const generateMetadata = async ({
	params,
}: DynamicMetadata): Promise<Metadata> => {
	const { slug, locale } = await params;

	const project = projects.find((p) => p.slug === slug);

	if (!project) {
		return {
			title: "Project not found",
		};
	}

	const baseUrl = ENV.NEXT_PUBLIC_URL;
	const url = `${baseUrl}/${locale}/projects/${slug}`;

	const title = project.title[locale];
	const description = project.description[locale];
	const keywords = project.techStack.join(", ");

	return {
		metadataBase: new URL(baseUrl),

		title,
		description,
		keywords,

		openGraph: {
			title,
			description,
			url,
			type: "article",
			locale,
		},

		twitter: {
			card: "summary_large_image",
			title,
			description,
		},

		robots: {
			index: true,
			follow: true,
		},
	};
};

const Page = async ({ params }: PageProps<"/[locale]/projects/[slug]">) => {
	const { locale, slug } = await params;
	setRequestLocale(locale as Locale);

	if (!slug) {
		notFound();
	}

	return <ProjectContent slug={slug} />;
};

export default Page;
