"use client";

import LogoImage from "@public/logo.png";
import { AnimatePresence, motion } from "framer-motion";
import { Globe, Menu, X } from "lucide-react";
import Image from "next/image";
import { useLocale } from "next-intl";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navLinks } from "@/configs/navigation.config";
import { ROUTERS } from "@/configs/router.config";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const languages = [
	{ code: "en", label: "English" },
	{ code: "uz", label: "O'zbek" },
	{ code: "ru", label: "Русский" },
] as const;

export function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const pathname = usePathname();
	const locale = useLocale();

	return (
		<header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg shrink-0">
			<nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
				{/* Logo */}
				<Link
					href={ROUTERS.home}
					className="inline-flex items-center overflow-hidden rounded-full"
				>
					<Image
						src={LogoImage}
						alt="Khaetbek Logo"
						width={62}
						height={62}
						className="h-12 w-12 object-cover"
						priority
					/>
				</Link>

				{/* Desktop Navigation */}
				<div className="hidden items-center gap-1 lg:flex">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
						>
							{link.label[locale]}
						</Link>
					))}
				</div>

				{/* Right side actions */}
				<div className="flex items-center gap-2">
					{/* Language Switcher */}
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								variant="ghost"
								size="icon"
								className="hidden lg:flex"
							>
								<Globe className="h-4 w-4" />
								<span className="sr-only">Switch language</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className="space-y-1" align="end">
							{languages.map((lang) => (
								<DropdownMenuItem
									key={lang.code}
									className={cn(
										locale === lang.code && "bg-accent",
										"p-0",
									)}
								>
									<Link
										className="inline-block px-2 py-1.5"
										href={{
											pathname,
										}}
										locale={lang.code}
									>
										{lang.label}
									</Link>
								</DropdownMenuItem>
							))}
						</DropdownMenuContent>
					</DropdownMenu>

					{/* CTA Button */}
					<Button asChild className="hidden lg:inline-flex">
						<Link href={ROUTERS.contacts}>{"Связаться"}</Link>
					</Button>

					{/* Mobile menu button */}
					<Button
						variant="ghost"
						size="icon"
						className="lg:hidden"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					>
						{mobileMenuOpen ? (
							<X className="h-5 w-5" />
						) : (
							<Menu className="h-5 w-5" />
						)}
						<span className="sr-only">Toggle menu</span>
					</Button>
				</div>
			</nav>

			{/* Mobile Navigation */}
			<AnimatePresence>
				{mobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						className="overflow-hidden border-t border-border/50 bg-background lg:hidden"
					>
						<div className="space-y-1 px-4 py-4">
							{navLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									onClick={() => setMobileMenuOpen(false)}
									className="block rounded-md px-3 py-2 text-base text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
								>
									{link.label[locale]}
								</Link>
							))}

							<div className="pt-4">
								<Button asChild className="w-full">
									<Link href={ROUTERS.contacts}>
										{"Связаться"}
									</Link>
								</Button>
							</div>
							{/* Mobile Language Switcher */}
							<div className="flex items-center gap-2 pt-2">
								{languages.map((lang) => (
									<button
										type="button"
										key={lang.code}
										className={cn(
											"rounded-md text-sm transition-colors",
											locale === lang.code
												? "bg-primary text-primary-foreground"
												: "bg-secondary text-secondary-foreground",
										)}
									>
										<Link
											locale={lang.code}
											href={{ pathname }}
											className="px-3 py-1.5 inline-block"
										>
											{lang.code.toUpperCase()}
										</Link>
									</button>
								))}
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
