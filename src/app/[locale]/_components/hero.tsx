"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { ROUTERS } from "@/configs/router.config";
import { Link } from "@/i18n/navigation";

export function HeroSection() {
	const t = useTranslations("HomePage.Hero");
	const roles = t.raw("roles") as string[];

	return (
		<section className="relative flex min-h-[calc(100vh-73px)] items-center justify-center overflow-hidden px-4">
			{/* Background gradient */}
			<div className="pointer-events-none absolute inset-0 overflow-hidden">
				<div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
				<div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
			</div>

			<div className="mx-auto max-w-4xl text-center">
				{/* Greeting */}
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground"
				>
					{t("greeting")}
				</motion.p>

				{/* Name */}
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
				>
					<span className="text-balance">{t("title_prefix")}</span>
					<span className="text-primary">Khaetbek</span>
				</motion.h1>

				{/* Roles */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="mb-8 flex flex-wrap items-center justify-center gap-2"
				>
					{roles.map((role, index) => (
						<span
							key={role}
							className="inline-flex items-center gap-2"
						>
							<span className="text-lg font-medium text-muted-foreground sm:text-xl">
								{role}
							</span>
							{index < roles.length - 1 && (
								<span className="text-muted-foreground/50">
									•
								</span>
							)}
						</span>
					))}
				</motion.div>

				{/* Bio */}
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="mx-auto mb-10 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
				>
					{t("bio")}
				</motion.p>

				{/* CTAs */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className="flex flex-col items-center justify-center gap-4 sm:flex-row"
				>
					<Button asChild size="lg" className="gap-2">
						<Link href={ROUTERS.projects}>
							{t("projects")}
							<ArrowRight className="h-4 w-4" />
						</Link>
					</Button>
					<Button asChild variant="outline" size="lg">
						<Link href={ROUTERS.contacts}>{t("contact")}</Link>
					</Button>
				</motion.div>

				{/* Scroll indicator */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.8 }}
					className="absolute bottom-8 left-1/2 -translate-x-1/2"
				>
					<motion.div
						animate={{ y: [0, 8, 0] }}
						transition={{
							duration: 1.5,
							repeat: Number.POSITIVE_INFINITY,
							ease: "easeInOut",
						}}
					>
						<ChevronDown className="h-6 w-6 text-muted-foreground/50" />
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
