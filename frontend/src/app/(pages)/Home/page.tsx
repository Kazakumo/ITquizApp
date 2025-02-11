"use client";
import { Container } from "@yamada-ui/react";
import { Heading } from "@yamada-ui/react";
import { Flex } from "@yamada-ui/react";
import { Button } from "@yamada-ui/react";
import { useRouter } from "next/navigation";
export default function Home() {
	const router = useRouter();
	const GoToMyQuiz = () => {
		router.push("/MyQuiz");
	};
	const GoToOurQuiz = () => {
		router.push("/OurQuiz");
	};
	return (
		<>
			<Container centerContent={true}>
				<Heading>ITquiz</Heading>
				<Flex gap={2}>
					<Button onClick={GoToMyQuiz}>私のクイズ</Button>
					<Button onClick={GoToOurQuiz}>みんなのクイズ</Button>
				</Flex>
			</Container>
		</>
	);
}
