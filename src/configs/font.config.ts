import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-mono",
});

export const fonts = {
	inter,
	jetbrainsMono,
};
