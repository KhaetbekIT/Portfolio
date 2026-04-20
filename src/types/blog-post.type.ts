export interface BlogPost {
	id: string;
	title: string;
	slug: string;
	excerpt: string;
	content: string;
	coverImage: string;
	tags: string[];
	author: string;
	date: string;
	readTime: string;
	metaTitle?: string;
	metaDescription?: string;
}
