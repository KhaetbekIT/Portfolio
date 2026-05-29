import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes with proper precedence handling
 */
export const cn = (...params: ClassValue[]) => twMerge(clsx(params));

/**
 * Create URL search parameters from an object
 * Filters out undefined, null, and empty string values
 */
export const createSearchParams = (params: Record<string, unknown>) => {
	const searchParams = new URLSearchParams();
	for (const key in params) {
		const value = params[key];
		if (value !== undefined && value !== null && value !== "") {
			searchParams.set(key, String(value));
		}
	}
	return searchParams;
};

/**
 * Safely parse JSON without throwing on invalid input
 */
export const safeJsonParse = <T,>(
	json: string,
	fallback: T,
): T => {
	try {
		return JSON.parse(json);
	} catch {
		return fallback;
	}
};

/**
 * Truncate text with ellipsis
 */
export const truncateText = (text: string, length: number): string => {
	if (text.length <= length) return text;
	return `${text.slice(0, length)}...`;
};

/**
 * Format date in locale-aware manner
 */
export const formatDate = (
	date: Date,
	locale: string,
	options: Intl.DateTimeFormatOptions = {},
): string => {
	const defaultOptions: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "long",
		day: "numeric",
		...options,
	};
	return new Intl.DateTimeFormat(locale, defaultOptions).format(date);
};

/**
 * Debounce function to prevent excessive function calls
 */
export const debounce = <T extends (...args: unknown[]) => unknown>(
	func: T,
	wait: number,
): ((...args: Parameters<T>) => void) => {
	let timeout: NodeJS.Timeout;
	return (...args: Parameters<T>) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => func(...args), wait);
	};
};

/**
 * Check if value is empty (works for various types)
 */
export const isEmpty = (value: unknown): boolean => {
	if (value === null || value === undefined) return true;
	if (typeof value === "string") return value.trim().length === 0;
	if (Array.isArray(value)) return value.length === 0;
	if (typeof value === "object") return Object.keys(value).length === 0;
	return false;
};
