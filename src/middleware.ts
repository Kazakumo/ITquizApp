import { auth } from "@/auth";

export { auth as middleware } from "@/auth";
export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
export default auth((req) => {
	if (!req.auth && req.nextUrl.pathname !== "/") {
		const newUrl = new URL("/", req.nextUrl.origin);
		return Response.redirect(newUrl);
	}
});
