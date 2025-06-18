import { auth, signIn, signOut } from "@/auth";

export const SignIn = async () => {
	const session = await auth();

	return (
		<>
			{!session && (
				<form>
					<button
						type="button"
						onClick={async () => {
							"use server";
							await signIn("GitHub", { redirectTo: "/home" });
						}}
					>
						Sign in with GitHub
					</button>
				</form>
			)}
			{session && (
				<form
					action={async () => {
						"use server";
						console.log("signOut");
						await signOut();
					}}
				>
					<button
						type="button"
						onClick={async () => {
							"use server";
							await signOut();
						}}
					>
						Sign out
					</button>
				</form>
			)}
		</>
	);
};
