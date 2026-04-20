"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { ROUTERS } from "@/configs/router.config";
import { skills } from "@/mocks/skills.mock";
import { siteSettings } from "@/mocks/user.mock";

export function AboutPreviewSection() {
	const t = useTranslations("HomePage.AboutPreview");
	const displaySkills = skills.slice(0, 3);
	const locale = useLocale();

	return (
		<section className="py-24">
			<div className="mx-auto max-w-7xl px-4 lg:px-8">
				<div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
					{/* Image */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="relative order-2 lg:order-1"
					>
						<div className="relative aspect-square overflow-hidden rounded-2xl bg-linear-to-br from-primary/20 to-primary/5">
							<Image
								src={siteSettings.avatar || "/placeholder.svg"}
								alt="Khaetbek"
								fill
								className="object-cover"
							/>
						</div>
						{/* Decorative elements */}
						<div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border border-primary/20" />
					</motion.div>

					{/* Content */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="order-1 lg:order-2"
					>
						<p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
							{t("label")}
						</p>
						<h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
							<span className="text-balance">{t("title")}</span>
						</h2>
						<p className="mb-6 text-base leading-relaxed text-muted-foreground">
							{siteSettings.bio[locale]}
						</p>
						<p className="mb-8 text-base leading-relaxed text-muted-foreground">
							{t("extra")}
						</p>

						{/* Tech Stack Preview */}
						<div className="mb-8 space-y-4">
							{displaySkills.map((skill) => (
								<div key={skill.category}>
									<p className="mb-2 text-sm font-medium text-foreground">
										{skill.category}
									</p>
									<div className="flex flex-wrap gap-2">
										{skill.items.slice(0, 5).map((item) => (
											<span
												key={item}
												className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
											>
												{item}
											</span>
										))}
									</div>
								</div>
							))}
						</div>

						<Button
							asChild
							variant="outline"
							className="gap-2 bg-transparent"
						>
							<Link href={ROUTERS.about}>
								{t("more")}
								<ArrowRight className="h-4 w-4" />
							</Link>
						</Button>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
