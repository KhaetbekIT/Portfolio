"use client";

import { motion } from "framer-motion";
import { Calendar, ExternalLink, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { results } from "@/mocks/results.mock";
import { skills } from "@/mocks/skills.mock";
import { timeline } from "@/mocks/timeline.mock";
import { siteSettings } from "@/mocks/user.mock";

export const AboutContent = () => {
	const locale = useLocale();
	const t = useTranslations("AboutPage.About");

	return (
		<div className="py-24">
			<div className="mx-auto max-w-7xl px-4 lg:px-8">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="mb-16"
				>
					<p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
						{t("label")}
					</p>
					<h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
						<span className="text-balance">{t("title")}</span>
					</h1>
				</motion.div>

				{/* Main Content */}
				<div className="grid gap-16 lg:grid-cols-3">
					{/* Left Column - Image & Quick Info */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="lg:col-span-1"
					>
						<div className="sticky top-24">
							<div className="relative mb-6 aspect-square overflow-hidden rounded-2xl bg-linear-to-br from-primary/20 to-primary/5">
								<Image
									src={
										siteSettings.avatar ||
										"/placeholder.svg"
									}
									alt="Khaetbek"
									fill
									className="object-cover"
								/>
							</div>

							{/* Quick Info */}
							<div className="space-y-3">
								<div className="flex items-center gap-3 text-muted-foreground">
									<MapPin className="h-4 w-4 text-primary" />
									<span>{t("location")}</span>
								</div>
								<div className="flex items-center gap-3 text-muted-foreground">
									<Mail className="h-4 w-4 text-primary" />
									<span>{siteSettings.email}</span>
								</div>
								<div className="flex items-center gap-3 text-muted-foreground">
									<Calendar className="h-4 w-4 text-primary" />
									<span>{t("experienceYears")}</span>
								</div>
							</div>

							{/* Social Links */}
							<div className="mt-6 flex flex-wrap gap-2">
								{Object.entries(siteSettings.social).map(
									([key, url]) => (
										<a
											key={key}
											href={url}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-sm text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
										>
											{key.charAt(0).toUpperCase() +
												key.slice(1)}
											<ExternalLink className="h-3 w-3" />
										</a>
									),
								)}
							</div>
						</div>
					</motion.div>

					{/* Right Column - Biography */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="lg:col-span-2"
					>
						{/* Biography */}
						<div className="mb-16">
							<h2 className="mb-6 text-2xl font-bold text-foreground">
								{t("bio.title")}
							</h2>
							<div className="space-y-4 text-base leading-relaxed text-muted-foreground">
								<p>{siteSettings.bio[locale]}</p>
								<p>{t("bio.p1")}</p>
								<p>{t("bio.p2")}</p>
								<p>{t("bio.p3")}</p>
							</div>
						</div>

						{/* Career Timeline */}
						<div className="mb-16">
							<h2 className="mb-6 text-2xl font-bold text-foreground">
								{t("experience")}
							</h2>
							<div className="relative">
								{/* Timeline line */}
								<div className="absolute left-0 top-0 h-full w-px bg-border md:left-25" />

								<div className="space-y-8">
									{timeline.map((item, index) => (
										<motion.div
											key={`${item.year}-${item.title}`}
											initial={{ opacity: 0, y: 20 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true }}
											transition={{
												duration: 0.5,
												delay: index * 0.1,
											}}
											className="relative grid gap-2 pl-6 md:grid-cols-[100px_1fr] md:pl-0"
										>
											{/* Year */}
											<time className="text-sm font-medium text-primary md:text-right mr-0 md:mr-6">
												{item.year}
											</time>

											{/* Timeline dot */}
											<div className="absolute left-0 top-1 h-2 w-2 rounded-full bg-primary md:left-24" />

											{/* Content */}
											<div className="ml-0 md:ml-6">
												<h3 className="font-semibold text-foreground">
													{item.title[locale]}
												</h3>
												<p className="text-sm text-primary/80">
													{item.company}
												</p>
												<p className="mt-2 text-sm text-muted-foreground">
													{item.description[locale]}
												</p>
											</div>
										</motion.div>
									))}
								</div>
							</div>
						</div>

						{/* Skills */}
						<div className="mb-16">
							<h2 className="mb-6 text-2xl font-bold text-foreground">
								{t("skills")}
							</h2>
							<div className="space-y-6">
								{skills.map((skillGroup, groupIndex) => (
									<motion.div
										key={skillGroup.category}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{
											duration: 0.5,
											delay: groupIndex * 0.1,
										}}
									>
										<h3 className="mb-3 font-semibold text-foreground">
											{skillGroup.category}
										</h3>
										<div className="flex flex-wrap gap-2">
											{skillGroup.items.map((skill) => (
												<span
													key={skill}
													className="rounded-full bg-secondary px-3 py-1.5 text-sm text-secondary-foreground"
												>
													{skill}
												</span>
											))}
										</div>
									</motion.div>
								))}
							</div>
						</div>

						{/* Teaching Experience */}
						<div>
							<h2 className="mb-6 text-2xl font-bold text-foreground">
								{t("teaching.title")}
							</h2>
							<div className="space-y-4 text-base leading-relaxed text-muted-foreground">
								<p>{t("teaching.p1")}</p>
								<p>{t("teaching.p2")}</p>
							</div>

							{/* Teaching Stats */}
							<div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
								{results.map((stat) => (
									<div
										key={stat.label[locale]}
										className="rounded-lg border border-border bg-card p-4 text-center"
									>
										<div className="text-2xl font-bold text-primary">
											{stat.number}
										</div>
										<div className="text-sm text-muted-foreground">
											{stat.label[locale]}
										</div>
									</div>
								))}
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};
