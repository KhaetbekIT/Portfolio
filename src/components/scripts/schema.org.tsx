import { ENV } from "@/configs/env.config";

export const SchemaOrg = () => {
	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Person",
					name: "Khaetbek",
					url: ENV.NEXT_PUBLIC_URL,
					jobTitle: "Frontend Developer",
					sameAs: [ENV.GITHUB_URL, ENV.LINKEDIN_URL],
				}),
			}}
		/>
	);
};
