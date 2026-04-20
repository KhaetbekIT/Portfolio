// @ts-check

import createNextIntlPlugin from "next-intl/plugin";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	reactStrictMode: true,
	logging: {
		fetches: {
			fullUrl: true,
			hmrRefreshes: true,
		},
	},
	poweredByHeader: false,
	typedRoutes: true,
	output: "standalone",
	transpilePackages: ["@t3-oss/env-nextjs", "@t3-oss/env-core"],
	images: {
		qualities: [75, 100],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
				port: "",
				pathname: "/**",
			}
		]
	},
	reactCompiler: true,
	experimental: {
		cssChunking: true,
		// A list of packages that Next.js should automatically evaluate and optimize the imports for.
		// @see https://vercel.com/blog/how-we-optimized-package-imports-in-next-js
		optimizePackageImports: [
			"tailwindcss",
			"tailwind-merge",
			"clsx",
		],
	},
	headers: async () => {
		return [
			{
				source: "/(.*)",
				headers: [
					{
						key: "X-Developed-By",
						value: "Khaetbek",
					},
				],
			},
			{
				source: "/:path*{/}?",
				headers: [
					{
						key: "X-Accel-Buffering",
						value: "no",
					},
				],
			},
		];
	},
};

const withNextIntl = createNextIntlPlugin({
	experimental: {
		createMessagesDeclaration: "./messages/ru.json",
	},
});

export default withNextIntl(nextConfig);