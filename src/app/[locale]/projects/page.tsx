import type { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { ProjectsContent } from "./_components/projects-content";

const Page = async ({ params }: PageProps<"/[locale]/projects">) => {
	const { locale } = await params;
	setRequestLocale(locale as Locale);

	return <ProjectsContent />;
};

export default Page;
