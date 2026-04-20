import { ImageResponse } from "next/og";

export const size = {
	width: 1200,
	height: 630,
};

export default function Image() {
	return new ImageResponse(
		<div
			style={{
				background: "#000",
				color: "#fff",
				width: "100%",
				height: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				fontSize: 64,
			}}
		>
			Khaetbek
		</div>,
		size,
	);
}
