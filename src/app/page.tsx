"use server";

import { redirect } from "next/navigation";
import { SignIn } from "@/app/_features/SignIn";
import { auth } from "@/auth";

export default async function Home() {
	const session = await auth();
	if (session) {
		redirect("/home");
	}
	return (
		<>
			<SignIn />
		</>
	);
}
