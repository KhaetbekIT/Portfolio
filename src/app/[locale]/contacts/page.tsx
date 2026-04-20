import type { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { ContactsContent } from "./_components/contacts-content";

const Page = async ({ params }: PageProps<"/[locale]/contacts">) => {
	const { locale } = await params;
	setRequestLocale(locale as Locale);

	return <ContactsContent />;
};

export default Page;
