import * as z from "zod";

export const contactSchema = z.object({
	name: z
		.string()
		.nonempty("Name is required")
		.min(3, "Name must be at least 3 characters"),
	email: z
		.string()
		.trim()
		.regex(
			/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
			"Invalid email address. Must be your@email.com",
		)
		.optional(),
	phone: z
		.string()
		.trim()
		.regex(/^\+998\d{9}$/, "Invalid phone number. Must be +998XXXXXXXXX"),
	message: z
		.string()
		.trim()
		.nonempty("Message is required")
		.min(10, "Message must be at least 10 characters"),
});

export type ContactSchemaType = z.infer<typeof contactSchema>;
