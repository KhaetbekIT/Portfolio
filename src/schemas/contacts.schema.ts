import { z } from "zod";

const nameSchema = z
	.string()
	.trim()
	.min(2, "Name must be at least 2 characters")
	.max(100, "Name must be less than 100 characters");

const emailSchema = z
	.string()
	.trim()
	.email("Invalid email address")
	.max(255, "Email must be less than 255 characters");

const phoneSchema = z
	.string()
	.trim()
	.regex(/^\+\d{1,3}\d{1,14}$/, "Invalid phone number format");

const messageSchema = z
	.string()
	.trim()
	.min(10, "Message must be at least 10 characters")
	.max(5000, "Message must be less than 5000 characters");

export const contactSchema = z.object({
	name: nameSchema,
	email: emailSchema,
	phone: phoneSchema,
	message: messageSchema,
});

export type ContactSchemaType = z.infer<typeof contactSchema>;
