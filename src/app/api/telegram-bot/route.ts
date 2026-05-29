import * as z from "zod";
import { ENV } from "@/configs/env.config";
import {
	messageSchema,
	type TelegramMessage,
} from "@/schemas/telegram-bot.schema";

async function sendTelegramMessage(
	message: TelegramMessage,
): Promise<{ ok: boolean; error?: unknown }> {
	try {
		const response = await fetch(
			`${ENV.TELEGRAM_BOT_API}/bot${ENV.TELEGRAM_BOT_TOKEN}/sendMessage`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					chat_id: ENV.TELEGRAM_BOT_CHATID,
					text: message.text,
					parse_mode: message.parse_mode,
				}),
			},
		);

		const data = (await response.json()) as unknown;

		if (!response.ok) {
			return { ok: false, error: data };
		}

		return { ok: true };
	} catch (error) {
		return { ok: false, error };
	}
}

export async function POST(req: Request): Promise<Response> {
	try {
		const body = (await req.json()) as unknown;
		const validatedData = messageSchema.parse(body);

		const result = await sendTelegramMessage(validatedData);

		if (!result.ok) {
			return Response.json(
				{ ok: false, error: "Failed to send message" },
				{ status: 500 },
			);
		}

		return Response.json({ ok: true }, { status: 200 });
	} catch (error) {
		if (error instanceof z.ZodError) {
			return Response.json(
				{ ok: false, error: "Invalid request format" },
				{ status: 400 },
			);
		}

		if (error instanceof SyntaxError) {
			return Response.json(
				{ ok: false, error: "Invalid JSON" },
				{ status: 400 },
			);
		}

		return Response.json(
			{ ok: false, error: "Internal server error" },
			{ status: 500 },
		);
	}
}
