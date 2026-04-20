import type { Metadata, ResolvingMetadata } from "next";
import type { Locale } from "next-intl";
import type { ReactNode } from "react";

type SearchParams = { [key: string]: string | string[] | undefined };
export interface ParamsWithLocale {
	locale: Locale;
	[key: string]: string;
}

export interface PageProps<Params extends ParamsWithLocale = ParamsWithLocale> {
	params: Promise<Params>;
	searchParams: Promise<SearchParams>;
}

export interface LayoutProps<
	Params extends ParamsWithLocale = ParamsWithLocale,
> {
	params: Promise<Params>;
	children: ReactNode;
}

export type ErrorRouteComponent = {
	error: Error;
	reset: () => void;
};

export type DynamicMetadata = {
	params: Promise<ParamsWithLocale>;
	searchParams: Promise<SearchParams>;
};
