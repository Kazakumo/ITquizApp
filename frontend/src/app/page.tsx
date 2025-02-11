"use server";
import { SignIn } from "./_feature/SignIn";

export default async function Home() {
	return (
		<>
			<SignIn />
		</>
	);
}
