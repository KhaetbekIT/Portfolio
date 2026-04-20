"use client";
import { motion } from "framer-motion";
import { ExternalLink, Search } from "lucide-react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ROUTERS } from "@/configs/router.config";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { allTechStacks, projects } from "@/mocks/projects.mock";

export const ProjectsContent = () => {
	const locale = useLocale();
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedTech, setSelectedTech] = useState<string | null>(null);
	const t = useTranslations("ProjectsPage.Projects");

	// Filter projects based on search and tech filter
	const filteredProjects = projects.filter((project) => {
		const matchesSearch =
			project.title[locale]
				.toLowerCase()
				.includes(searchQuery.toLowerCase()) ||
			project.description[locale]
				.toLowerCase()
				.includes(searchQuery.toLowerCase());
		const matchesTech =
			!selectedTech || project.techStack.includes(selectedTech);
		return matchesSearch && matchesTech;
	});

	return (
		<div className="py-24">
			<div className="mx-auto max-w-7xl px-4 lg:px-8">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="mb-12"
				>
					<p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
						{t("header.label")}
					</p>
					<h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
						{t("header.title")}
					</h1>
					<p className="max-w-2xl text-base text-muted-foreground">
						{t("header.description")}
					</p>
				</motion.div>

				{/* Filters */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className="mb-8 space-y-4"
				>
					{/* Search */}
					<div className="relative max-w-md">
						<Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
						<Input
							placeholder={t("search.placeholder")}
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className="pl-10"
						/>
					</div>

					{/* Tech Stack Filter */}
					<div className="flex flex-wrap gap-2">
						<Button
							variant={
								selectedTech === null ? "default" : "outline"
							}
							size="sm"
							onClick={() => setSelectedTech(null)}
						>
							{t("filters.all")}
						</Button>
						{allTechStacks.map((tech) => (
							<Button
								key={tech}
								variant={
									selectedTech === tech
										? "default"
										: "outline"
								}
								size="sm"
								onClick={() =>
									setSelectedTech(
										tech === selectedTech ? null : tech,
									)
								}
							>
								{tech}
							</Button>
						))}
					</div>
				</motion.div>

				{/* Projects Grid */}
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{filteredProjects.map((project, index) => (
						<motion.article
							key={project.id}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.05 }}
							className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg"
						>
							<Link href={ROUTERS.projectsById(project.slug)}>
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
											{t("project.featured")}
										</div>
									)}
									<div className="absolute right-3 top-3 rounded-full bg-background/80 px-2 py-0.5 text-xs text-foreground backdrop-blur-sm">
										{project.category}
									</div>
								</div>

								{/* Project Info */}
								<div className="p-5">
									<div className="mb-2 text-xs text-muted-foreground">
										{project.date}
									</div>
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
													className={cn(
														"rounded bg-secondary px-2 py-0.5 text-xs text-secondary-foreground",
														selectedTech === tech &&
															"bg-primary text-primary-foreground",
													)}
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

							{/* Links */}
							<div className="flex items-center gap-4 border-t border-border px-5 py-3">
								{project.liveUrl && (
									<a
										href={project.liveUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
									>
										<ExternalLink className="h-3.5 w-3.5" />
										{t("project.demo")}
									</a>
								)}
								{project.githubUrl && (
									<a
										href={project.githubUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
									>
										<FaGithub className="h-3.5 w-3.5" />
										{t("project.source")}
									</a>
								)}
							</div>
						</motion.article>
					))}
				</div>

				{/* No Results */}
				{filteredProjects.length === 0 && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className="py-12 text-center"
					>
						<p className="text-muted-foreground">
							{t("empty.title")}
						</p>
						<Button
							variant="outline"
							className="mt-4 bg-transparent"
							onClick={() => {
								setSearchQuery("");
								setSelectedTech(null);
							}}
						>
							{t("empty.reset")}
						</Button>
					</motion.div>
				)}
			</div>
		</div>
	);
};
