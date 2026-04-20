"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { CheckCircle, Mail, MapPin, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteSettings } from "@/mocks/user.mock";
import {
	type ContactSchemaType,
	contactSchema,
} from "@/schemas/contacts.schema";

const socialLinks = [
	{ icon: FaGithub, label: "GitHub", key: "github" },
	{ icon: FaLinkedin, label: "LinkedIn", key: "linkedin" },
	{ icon: FaInstagram, label: "Instagram", key: "instagram" },
];

const toastOption: Record<string, unknown> = {
	position: "top-center",
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: 0.1,
	theme: "dark",
	transition: Bounce,
};

export const ContactsContent = () => {
	const [pending, startTransition] = useTransition();
	const t = useTranslations("ContactsPage");

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<ContactSchemaType>({
		resolver: zodResolver(contactSchema),
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			message: "",
		}
	});

	const onSubmit = async (data: ContactSchemaType) => {
		startTransition(async () => {
			try {
				const response = await fetch("/api/telegram-bot", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						text: `
<b>${t("telegram.title")}</b>

${t("telegram.name")}: ${data.name}
${t("telegram.phone")}: ${data.phone}
${t("telegram.email")}: ${data.email}
${t("telegram.message")}: ${data.message}
		`,
					}),
				});

				if (!response.ok) {
					toast.error(t("toast.error"), toastOption);
				}

				toast.success(t("toast.success"), toastOption);
				reset();
			} catch (error) {
				console.error(error);
				toast.error(t("toast.error"), toastOption);
			}
		});
	};

	return (
		<div className="py-24">
			<div className="mx-auto max-w-7xl px-4 lg:px-8">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="mb-16 text-center"
				>
					<p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
						{t("header.label")}
					</p>
					<h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
						{t("header.title")}
					</h1>
					<p className="mx-auto max-w-2xl text-base text-muted-foreground">
						{t("header.description")}
					</p>
				</motion.div>

				<div className="grid gap-12 lg:grid-cols-2">
					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
					>
						<div className="rounded-2xl border border-border bg-card p-8">
							<h2 className="mb-6 text-2xl font-bold text-foreground">
								{t("form.title")}
							</h2>

							{pending ? (
								<motion.div
									initial={{ opacity: 0, scale: 0.95 }}
									animate={{ opacity: 1, scale: 1 }}
									className="flex flex-col items-center justify-center py-12 text-center"
								>
									<div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
										<CheckCircle className="h-8 w-8 text-primary" />
									</div>
									<h3 className="mb-2 text-xl font-semibold text-foreground">
										{t("form.successTitle")}
									</h3>
									<p className="text-muted-foreground">
										{t("form.successDescription")}
									</p>
								</motion.div>
							) : (
								<form
									onSubmit={handleSubmit(onSubmit)}
									className="space-y-6"
								>
									{/* Name */}
									<div className="space-y-2">
										<Label htmlFor="name">
											{t("form.name")}
										</Label>
										<Input
											id="name"
											placeholder={t(
												"form.namePlaceholder",
											)}
											{...register("name")}
											className={
												errors.name
													? "border-destructive"
													: ""
											}
										/>
										{errors.name && (
											<p className="text-sm text-destructive">
												{errors.name.message}
											</p>
										)}
									</div>

									{/* Email */}
									<div className="space-y-2">
										<Label htmlFor="email">
											{t("form.email")}
										</Label>
										<Input
											id="email"
											type="email"
											placeholder={t(
												"form.emailPlaceholder",
											)}
											{...register("email")}
											className={
												errors.email
													? "border-destructive"
													: ""
											}
										/>
										{errors.email && (
											<p className="text-sm text-destructive">
												{errors.email.message}
											</p>
										)}
									</div>

									{/* Phone */}
									<div className="space-y-2">
										<Label htmlFor="phone">
											{t("form.phone")}
										</Label>
										<Input
											id="phone"
											type="tel"
											placeholder={t(
												"form.phonePlaceholder",
											)}
											{...register("phone")}
											className={
												errors.phone
													? "border-destructive"
													: ""
											}
										/>
										{errors.phone && (
											<p className="text-sm text-destructive">
												{errors.phone.message}
											</p>
										)}
									</div>

									{/* Message */}
									<div className="space-y-2">
										<Label htmlFor="message">
											{t("form.message")}
										</Label>
										<Textarea
											id="message"
											placeholder={t(
												"form.messagePlaceholder",
											)}
											rows={6}
											{...register("message")}
											className={
												errors.message
													? "border-destructive"
													: ""
											}
										/>
										{errors.message && (
											<p className="text-sm text-destructive">
												{errors.message.message}
											</p>
										)}
									</div>

									{/* Submit */}
									<Button
										type="submit"
										size="lg"
										className="w-full gap-2"
										disabled={isSubmitting}
										loading={pending}
									>
										{t("form.submit")}
										<Send className="h-4 w-4" />
									</Button>
								</form>
							)}
						</div>
					</motion.div>

					{/* Contact Info */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="space-y-8"
					>
						{/* Info Cards */}
						<div className="space-y-4">
							<div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
								<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
									<Mail className="h-6 w-6" />
								</div>
								<div>
									<h3 className="font-semibold text-foreground">
										{t("info.email")}
									</h3>
									<a
										href={`mailto:${siteSettings.email}?subject=Привет!&body=Здравствуйте!`}
										className="text-muted-foreground transition-colors hover:text-primary"
									>
										{siteSettings.email}
									</a>
								</div>
							</div>

							<div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
								<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
									<MapPin className="h-6 w-6" />
								</div>
								<div>
									<h3 className="font-semibold text-foreground">
										{t("info.location")}
									</h3>
									<p className="text-muted-foreground">
										{t("info.locationValue")}
									</p>
								</div>
							</div>
						</div>

						{/* Social Links */}
						<div className="rounded-xl border border-border bg-card p-6">
							<h3 className="mb-4 font-semibold text-foreground">
								{t("social.title")}
							</h3>
							<div className="grid grid-cols-2 gap-3">
								{socialLinks.map((social) => {
									const url =
										siteSettings.social[
											social.key as keyof typeof siteSettings.social
										];
									return (
										<a
											key={social.key}
											href={url}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-3 rounded-lg border border-border bg-background p-4 transition-all hover:border-primary/50 hover:bg-accent"
										>
											<social.icon className="h-5 w-5 text-muted-foreground" />
											<span className="text-sm font-medium text-foreground">
												{social.label}
											</span>
										</a>
									);
								})}
							</div>
						</div>

						{/* Availability */}
						<div className="rounded-xl border border-primary/30 bg-primary/5 p-6">
							<div className="mb-2 flex items-center gap-2">
								<span className="relative flex h-3 w-3">
									<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
									<span className="relative inline-flex h-3 w-3 rounded-full bg-primary" />
								</span>
								<span className="font-semibold text-foreground">
									{t("availability.title")}
								</span>
							</div>
							<p className="text-sm text-muted-foreground">
								{t("availability.description")}
							</p>
						</div>
					</motion.div>
				</div>
			</div>

			<ToastContainer
				position="top-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
				transition={Bounce}
			/>
		</div>
	);
};
