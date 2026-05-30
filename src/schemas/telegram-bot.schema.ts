import * as z from "zod";

export const messageSchema = z.object({
	text: z.string().min(1, "Text is required"),
	parse_mode: z.enum(["HTML", "Markdown"]).default("HTML"),
});

export type TelegramMessage = z.infer<typeof messageSchema>;