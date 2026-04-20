import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "404 | Page not found",
	description: "This page does not exist or has been moved.",
};

export default async function NotFound() {
	return (
		<html lang="en" translate="yes">
			<body className="min-h-screen flex flex-col justify-between">
				<main className="flex-1">
					<div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4">
						{/* Gradient background */}
						<div className="pointer-events-none absolute inset-0 -z-10">
							<div className="absolute left-1/2 top-[-20%] h-125 w-125 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
							<div className="absolute bottom-[-20%] right-[-10%] h-100 w-100 rounded-full bg-accent/20 blur-3xl" />
						</div>

						<div className="mx-auto w-full max-w-xl text-center">
							{/* 404 */}
							<h1 className="bg-linear-to-b from-foreground to-muted-foreground bg-clip-text text-8xl font-bold text-transparent">
								404
							</h1>

							{/* Title */}
							<h2 className="mt-4 text-2xl font-semibold tracking-tight">
								404
							</h2>

							{/* Description */}
							<p className="mt-2 text-sm text-muted-foreground">
								Not found
							</p>

							{/* Actions */}
							<div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
								<Link
									href="/"
									className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-6 text-sm font-medium text-primary-foreground transition hover:opacity-90"
								>
									Home
								</Link>

								<Link
									href="/contact"
									className="inline-flex h-11 items-center justify-center rounded-xl border border-border bg-background px-6 text-sm font-medium transition hover:bg-accent"
								>
									Contact
								</Link>
							</div>

							{/* Hint */}
							<p className="mt-6 text-xs text-muted-foreground">
								This page does not exist or has been moved.
							</p>
						</div>
					</div>
				</main>
			</body>
		</html>
	);
}
