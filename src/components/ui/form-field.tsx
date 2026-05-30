import type { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { Input } from "./input";
import { Label } from "./label";
import { Textarea } from "./textarea";

export function TextInputField({
	label,
	error,
	id,
	placeholder,
	type = "text",
	register,
	required,
}: TextInputFieldProps) {
	return (
		<div className="space-y-2">
			<Label htmlFor={id}>
				{label}
				{required && <span className="text-destructive">*</span>}
			</Label>
			<Input
				id={id}
				type={type}
				placeholder={placeholder}
				{...register}
				aria-invalid={!!error}
				aria-describedby={error ? `${id}-error` : undefined}
				className={error ? "border-destructive" : ""}
			/>
			{error && (
				<p id={`${id}-error`} className="text-sm text-destructive">
					{error.message}
				</p>
			)}
		</div>
	);
}

export function TextareaField({
	label,
	error,
	id,
	placeholder,
	rows = 5,
	register,
	required,
}: TextareaFieldProps) {
	return (
		<div className="space-y-2">
			<Label htmlFor={id}>
				{label}
				{required && <span className="text-destructive">*</span>}
			</Label>
			<Textarea
				id={id}
				placeholder={placeholder}
				rows={rows}
				{...register}
				aria-invalid={!!error}
				aria-describedby={error ? `${id}-error` : undefined}
				className={error ? "border-destructive" : ""}
			/>
			{error && (
				<p id={`${id}-error`} className="text-sm text-destructive">
					{error.message}
				</p>
			)}
		</div>
	);
}

interface FormFieldProps {
	label: string;
	error?: FieldError;
	id: string;
	placeholder?: string;
	required?: boolean;
}

interface TextInputFieldProps extends FormFieldProps {
	type?: "text" | "email" | "tel";
	register: UseFormRegisterReturn;
}

interface TextareaFieldProps extends FormFieldProps {
	rows?: number;
	register: UseFormRegisterReturn;
}