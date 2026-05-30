const requiredEnvVars = [
	"NEXT_PUBLIC_URL",
	"GITHUB_URL",
	"LINKEDIN_URL",
	"EMAIL",
	"TELEGRAM_BOT_TOKEN",
	"TELEGRAM_BOT_CHATID",
	"TELEGRAM_BOT_API",
] as const;

function validateEnv(): void {
	const missingVars = requiredEnvVars.filter(
		(varName) => !process.env[varName]
	);

	if (missingVars.length > 0) {
		throw new Error(
			`Missing required environment variables: ${missingVars.join(", ")}`
		);
	}
}

validateEnv();

export const ENV = {
	NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL as string,
	GITHUB_URL: process.env.GITHUB_URL as string,
	LINKEDIN_URL: process.env.LINKEDIN_URL as string,
	EMAIL: process.env.EMAIL as string,
	TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN as string,
	TELEGRAM_BOT_CHATID: process.env.TELEGRAM_BOT_CHATID as string,
	TELEGRAM_BOT_API: process.env.TELEGRAM_BOT_API as string,
} as const;
