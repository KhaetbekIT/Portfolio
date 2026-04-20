"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { FaGithub, FaInstagram, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { ROUTERS } from "@/configs/router.config";
import { siteSettings } from "@/mocks/user.mock";

const socialIcons = {
	github: FaGithub,
	linkedin: FaLinkedin,
	instagram: FaInstagram,
};

export function Footer() {
	const t = useTranslations("Footer");
	const currentYear = new Date().getFullYear();

	const footerLinks = [
		{
			title: t("navigation.title"),
			links: [
				{ label: t("navigation.home"), href: ROUTERS.home },
				{ label: t("navigation.about"), href: ROUTERS.about },
				{ label: t("navigation.projects"), href: ROUTERS.projects },
				{ label: t("navigation.blog"), href: ROUTERS.blog },
			],
		},
		{
			title: t("services.title"),
			links: [
				{ label: t("services.products"), href: "/products" },
				{ label: t("services.mentorship"), href: "/mentorship" },
				{ label: t("services.consulting"), href: "/consulting" },
			],
		},
		{
			title: t("contacts.title"),
			links: [
				{ label: t("contacts.form"), href: ROUTERS.contacts },
				{
					label: t("contacts.email"),
					href: `mailto:${siteSettings.email}`,
				},
			],
		},
	];

	return (
		<footer className="border-t border-border/50 bg-background">
			<div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
					<div className="lg:col-span-1">
						<Link
							href={ROUTERS.home}
							className="text-xl font-bold tracking-tight"
						>
							Khaetbek
						</Link>

						<p className="mt-4 text-sm leading-relaxed text-muted-foreground">
							{t("description")}
						</p>

						<div className="mt-6 flex items-center gap-3">
							{Object.entries(siteSettings.social).map(
								([key, url]) => {
									const Icon =
										socialIcons[
											key as keyof typeof socialIcons
										];
									if (!Icon) return null;

									return (
										<a
											key={key}
											href={url}
											target="_blank"
											rel="noopener noreferrer"
											className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
										>
											<Icon className="h-4 w-4" />
										</a>
									);
								},
							)}

							<a
								href={`mailto:${siteSettings.email}`}
								className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
							>
								<FaMailBulk className="h-4 w-4" />
							</a>
						</div>
					</div>

					{footerLinks.map((column) => (
						<div key={column.title}>
							<h3 className="font-semibold text-foreground">
								{column.title}
							</h3>

							<ul className="mt-4 space-y-2">
								{column.links.map((link) => (
									<li key={link.href}>
										<Link
											href={link.href}
											className="text-sm text-muted-foreground transition-colors hover:text-primary"
										>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 md:flex-row">
					<p className="text-sm text-muted-foreground">
						&copy; 2021 - {currentYear} Khaetbek. {t("rights")}
					</p>
				</div>
			</div>
		</footer>
	);
}
