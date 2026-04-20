import { ENV } from "@/configs/env.config";

export const POST = async (req: Request) => {
	try {
		const { text, parse_mode = "HTML" } = await req.json();

		if (!text) {
			return new Response(
				JSON.stringify({ ok: false, error: "Text is required" }),
				{ status: 400 },
			);
		}

		const telegramRes = await fetch(
			`${ENV.TELEGRAM_BOT_API}/bot${ENV.TELEGRAM_BOT_TOKEN}/sendMessage`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					chat_id: ENV.TELEGRAM_BOT_CHATID,
					text,
					parse_mode,
				}),
			},
		);

		const data = await telegramRes.json();

		if (!telegramRes.ok) {
			return new Response(JSON.stringify({ ok: false, error: data }), {
				status: 500,
			});
		}

		return new Response(
			JSON.stringify({
				ok: true,
				result: data,
			}),
			{ status: 200 },
		);
	} catch (error) {
		console.error(error);

		return new Response(
			JSON.stringify({
				ok: false,
				error: "Internal Server Error",
			}),
			{ status: 500 },
		);
	}
};
