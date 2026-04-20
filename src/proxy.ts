import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
	matcher: ["/", "/(ru|uz)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"],
};
