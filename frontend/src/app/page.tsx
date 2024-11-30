"use client";
import { Container } from "@yamada-ui/react";
import { Heading } from "@yamada-ui/react";
import { Flex } from "@yamada-ui/react";
import { Button } from "@yamada-ui/react";
import { useRouter } from "next/navigation";
export default function Home() {
	const router = useRouter();
	const GoToSignIn = () => {
		router.push("/Home"); //TODO: 認可認証へ
	};
	const GoToLogin = () => {
		router.push("/Home"); //TODO: 認可認証へ
	};
	return (
		<>
			<Container centerContent={true}>
				<Heading>ITquiz</Heading>
				<Flex gap={2}>
					<Button onClick={GoToSignIn}>Sign In</Button>
					<Button onClick={GoToLogin}>Log In</Button>
				</Flex>
			</Container>
		</>
	);
}
