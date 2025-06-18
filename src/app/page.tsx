"use server";

import { SignIn } from "@/app/_features/SignIn";

export default async function Home() {
	return (
		<>
			<SignIn />
		</>
	);
}
