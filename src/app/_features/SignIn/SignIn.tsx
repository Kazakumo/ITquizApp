import { signIn } from "@/auth";

export const SignIn = async () => {
	return (
		<>
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
		</>
	);
};
