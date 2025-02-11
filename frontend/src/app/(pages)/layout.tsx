"use client";
import { Header } from "@/components/Header";

export default function PageLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<>
			<Header />
			<div>{children}</div>
		</>
	);
}
