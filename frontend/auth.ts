import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [GitHub],
	callbacks: {
		authorized({ request, auth }) {
			const { pathname } = request.nextUrl;
			// if (pathname === "/dashboard") {
			return !!auth;
			// }
			// return true;
		},
	},
});
