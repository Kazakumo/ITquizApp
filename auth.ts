import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { NextResponse } from "next/server";

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [GitHub],
	callbacks: {
		authorized({ request, auth }) {
			return !!auth;
		},
	},
});
