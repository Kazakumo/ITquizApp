import { prisma } from "@/app/_lib/prisma";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [GitHub],
	session: {
		strategy: "jwt",
	},
	callbacks: {
		async signIn({ profile }) {
			try {
				const githubId = profile?.id?.toString();
				if (!githubId) {
					throw new Error("Missing GitHub ID");
				}
				const existingUser = await prisma.user.findUnique({
					where: { githubId },
				});
				// 新規登録の場合
				if (!existingUser) {
					await prisma.user.create({
						data: {
							githubId: githubId,
							name: profile?.name || "No Name",
						},
					});
				}
				return true;
			} catch (e) {
				console.error(e); //NOTE: 精緻化したほうがいいのか？？？
				return false;
			}
		},

		authorized({ request, auth }) {
			return !!auth;
		},
	},
});
