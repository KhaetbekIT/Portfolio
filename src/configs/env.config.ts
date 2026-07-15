export const validateRequiredEnv = (keys: readonly string[]): void => {
	const missingVars = keys.filter((key) => !process.env[key]);

	if (missingVars.length > 0) {
		throw new Error(
			`Missing required environment variables: ${missingVars.join(", ")}`
		);
	}
};

export const ENV = {
	NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL ?? "http://localhost:3000",
	GITHUB_URL:
		process.env.NEXT_PUBLIC_GITHUB_URL ??
		"https://github.com/KhaetbekIT",
	LINKEDIN_URL:
		process.env.NEXT_PUBLIC_LINKEDIN_URL ??
		"https://www.linkedin.com/in/khaetbekit/",
	EMAIL: process.env.EMAIL ?? "khaetbek@internet.ru",
	TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN ?? "",
	TELEGRAM_BOT_CHATID: process.env.TELEGRAM_BOT_CHATID ?? "",
	TELEGRAM_BOT_API:
		process.env.TELEGRAM_BOT_API ?? "https://api.telegram.org",
	TELEGRAM_URL: process.env.NEXT_PUBLIC_TELEGRAM_URL ?? "https://t.me/khaetbekit",
} as const;
