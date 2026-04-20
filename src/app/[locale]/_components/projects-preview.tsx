"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { ROUTERS } from "@/configs/router.config";
import { projects } from "@/mocks/projects.mock";

export function ProjectsPreviewSection() {
	const displayProjects = projects.slice(0, 6);
	const locale = useLocale();
	const t = useTranslations("HomePage.ProjectsPreview");

	return (
		<section className="bg-card/50 py-24">
			<div className="mx-auto max-w-7xl px-4 lg:px-8">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="mb-12 text-center"
				>
					<p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
						{t("label")}
					</p>
					<h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
						<span className="text-balance">{t("title")}</span>
					</h2>
					<p className="mx-auto max-w-2xl text-base text-muted-foreground">
						{t("description")}
					</p>
				</motion.div>

				{/* Projects Grid */}
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{displayProjects.map((project, index) => (
						<motion.article
							key={project.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg"
						>
							<Link href={`/projects/${project.slug}`}>
								{/* Project Image */}
								<div className="relative aspect-video overflow-hidden">
									<Image
										src={
											project.image || "/placeholder.svg"
										}
										alt={project.title[locale]}
										fill
										className="object-top object-cover transition-transform duration-300 group-hover:scale-105"
									/>
									{project.featured && (
										<div className="absolute left-3 top-3 rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
											{t("featured")}
										</div>
									)}
								</div>

								{/* Project Info */}
								<div className="p-5">
									<h3 className="mb-2 font-semibold text-foreground transition-colors group-hover:text-primary">
										{project.title[locale]}
									</h3>
									<p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
										{project.description[locale]}
									</p>

									{/* Tech Stack */}
									<div className="flex flex-wrap gap-1.5">
										{project.techStack
											.slice(0, 4)
											.map((tech) => (
												<span
													key={tech}
													className="rounded bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
												>
													{tech}
												</span>
											))}
										{project.techStack.length > 4 && (
											<span className="rounded bg-secondary px-2 py-0.5 text-xs text-secondary-foreground">
												+{project.techStack.length - 4}
											</span>
										)}
									</div>
								</div>
							</Link>

							{/* External Link */}
							{project.liveUrl && (
								<div className="border-t border-border px-5 py-3">
									<a
										href={project.liveUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
									>
										<ExternalLink className="h-3.5 w-3.5" />
										{t("open")}
									</a>
								</div>
							)}
						</motion.article>
					))}
				</div>

				{/* View All Button */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="mt-12 text-center"
				>
					<Button asChild size="lg" className="gap-2">
						<Link href={ROUTERS.projects}>
							{t("all")}
							<ArrowRight className="h-4 w-4" />
						</Link>
					</Button>
				</motion.div>
			</div>
		</section>
	);
}
