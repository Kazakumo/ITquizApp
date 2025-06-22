import { SessionProvider } from "next-auth/react";
import { Header } from "../_components/Header";

export default function PageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<SessionProvider>
				<Header />
				<div>{children}</div>
			</SessionProvider>
		</>
	);
}
