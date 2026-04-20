"use client";

import { motion } from "framer-motion";
import {
	ArrowLeft,
	Calendar,
	CheckCircle,
	ExternalLink,
	TrendingUp,
} from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { ROUTERS } from "@/configs/router.config";
import { Link } from "@/i18n/navigation";
import { projects } from "@/mocks/projects.mock";
import type { Project } from "@/types/project.type";

export const ProjectContent = ({ slug }: Props) => {
	const project = projects.find((p) => p.slug === slug);
	const locale = useLocale();
	const t = useTranslations("ProjectsPage.ById");

	if (!project) {
		notFound();
	}

	return (
		<div className="py-24">
			<div className="mx-auto max-w-5xl px-4 lg:px-8">
				{/* Back Button */}
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
				>
					<Button asChild variant="ghost" className="mb-8 gap-2">
						<Link href={ROUTERS.projects}>
							<ArrowLeft className="h-4 w-4" />
							{t("back")}
						</Link>
					</Button>
				</motion.div>

				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="mb-8"
				>
					<div className="mb-4 flex flex-wrap items-center gap-3">
						{project.featured && (
							<span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
								{t("featured")}
							</span>
						)}
						<span className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">
							{project.category}
						</span>
						<span className="flex items-center gap-1 text-sm text-muted-foreground">
							<Calendar className="h-3.5 w-3.5" />
							{project.date}
						</span>
					</div>
					<h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
						{project.title[locale]}
					</h1>
					<p className="text-lg text-muted-foreground">
						{project.description[locale]}
					</p>
				</motion.div>

				{/* Main Image */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className="mb-12 overflow-hidden rounded-xl border border-border"
				>
					<div className="relative aspect-video">
						<Image
							src={project.image || "/placeholder.svg"}
							alt={project.title[locale]}
							fill
							className="object-cover object-top"
							priority
						/>
					</div>
				</motion.div>

				{/* Links */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.15 }}
					className="mb-12 flex flex-wrap gap-4"
				>
					{project.liveUrl && (
						<Button asChild className="gap-2">
							<a
								href={project.liveUrl}
								target="_blank"
								rel="noopener noreferrer"
							>
								<ExternalLink className="h-4 w-4" />
								{t("demo")}
							</a>
						</Button>
					)}
					{project.githubUrl && (
						<Button
							asChild
							variant="outline"
							className="gap-2 bg-transparent"
						>
							<a
								href={project.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaGithub className="h-4 w-4" />
								{t("source")}
							</a>
						</Button>
					)}
				</motion.div>

				{/* Content Grid */}
				<div className="grid gap-12 lg:grid-cols-3">
					{/* Main Content */}
					<div className="lg:col-span-2">
						{/* Description */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="mb-12"
						>
							<h2 className="mb-4 text-2xl font-bold text-foreground">
								{t("about")}
							</h2>
							<p className="text-base leading-relaxed text-muted-foreground">
								{project.longDescription[locale]}
							</p>
						</motion.div>

						{/* Responsibilities */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.25 }}
							className="mb-12"
						>
							<h2 className="mb-4 text-2xl font-bold text-foreground">
								{t("responsibilities")}
							</h2>
							<ul className="space-y-3">
								{project.responsibilities[locale].map(
									(item, index) => (
										<li
											key={index.toString()}
											className="flex items-start gap-3"
										>
											<CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
											<span className="text-muted-foreground">
												{item}
											</span>
										</li>
									),
								)}
							</ul>
						</motion.div>

						{/* Results */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.3 }}
						>
							<h2 className="mb-4 text-2xl font-bold text-foreground">
								{t("results")}
							</h2>
							<ul className="space-y-3">
								{project.results[locale].map((item, index) => (
									<li
										key={index.toString()}
										className="flex items-start gap-3"
									>
										<TrendingUp className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
										<span className="text-muted-foreground">
											{item}
										</span>
									</li>
								))}
							</ul>
						</motion.div>
					</div>

					{/* Sidebar */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.35 }}
						className="lg:col-span-1"
					>
						<div className="sticky top-24 rounded-xl border border-border bg-card p-6">
							<h3 className="mb-4 font-semibold text-foreground">
								{t("technologies")}
							</h3>
							<div className="flex flex-wrap gap-2">
								{project.techStack.map((tech) => (
									<span
										key={tech}
										className="rounded-full bg-secondary px-3 py-1.5 text-sm text-secondary-foreground"
									>
										{tech}
									</span>
								))}
							</div>
						</div>
					</motion.div>
				</div>

				{/* Screenshots */}
				{project.screenshots.length > 0 && (
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						className="mt-16"
					>
						<h2 className="mb-6 text-2xl font-bold text-foreground">
							{t("screenshots")}
						</h2>
						<div className="grid gap-6 sm:grid-cols-2">
							{project.screenshots.map((screenshot, index) => (
								<div
									key={index.toString()}
									className="overflow-hidden rounded-xl border border-border"
								>
									<div className="relative aspect-video">
										<Image
											src={
												screenshot || "/placeholder.svg"
											}
											alt={`${project.title} screenshot ${index + 1}`}
											fill
											className="object-cover"
										/>
									</div>
								</div>
							))}
						</div>
					</motion.div>
				)}
			</div>
		</div>
	);
};

interface Props {
	slug: Project["slug"];
}
