import { auth, signIn, signOut } from "@auth";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

// import { signIn } from "@/auth";
// import { useFocusOnHide } from "@yamada-ui/react";
// import { useSession } from "next-auth/react";
// import { useEffect, useState } from "react";

// import { useEffect } from "react";
// import { redirect } from "next/navigation";
export const SignIn = async () => {
	// const { status } = useSession();

	// useEffect(() => {
	// 	if (status === undefined) {
	// 	}
	// });
	const session = await auth();
	// useEffect(() => {
	// 	router.push("/home");
	// });

	// redirect("/home");
	return (
		<>
			{!session && (
				<form
					action={async () => {
						"use server";
						await signIn("GitHub");
					}}
				>
					<button type="button">Sign in with GitHub</button>
				</form>
			)}
			{session && (
				<form
					action={async () => {
						"use server";
						await signOut();
					}}
				>
					<button type="button">Sign out</button>
				</form>
			)}
		</>
	);
};
