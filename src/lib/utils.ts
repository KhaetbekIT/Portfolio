import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...params: ClassValue[]) => twMerge(clsx(params));

export const createSearchParams = (params: Record<string, unknown>) => {
	const searchParams = new URLSearchParams();
	for (const key in params) {
		if (
			params[key] !== undefined &&
			params[key] !== null &&
			params[key] !== ""
		) {
			searchParams.set(key, `${params[key]}`);
		}
	}
	return searchParams;
};
