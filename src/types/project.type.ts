import type { StaticImageData } from "next/image";
import type { Name } from "./share.type";

export interface Project {
	id: string;
	title: Name;
	slug: string;
	description: Name;
	longDescription: Name;
	techStack: string[];
	image: string | StaticImageData;
	screenshots: (string | StaticImageData)[];
	responsibilities: {
		en: string[];
		ru: string[];
		uz: string[];
	};
	results: {
		en: string[];
		ru: string[];
		uz: string[];
	};
	category: string;
	featured: boolean;
	date: string;
	liveUrl?: string;
	githubUrl?: string;
}
