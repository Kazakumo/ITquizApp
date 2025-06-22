"use client";
import { Button, Container, Flex, Heading } from "@yamada-ui/react";
import { useRouter } from "next/navigation";
export default function Home() {
	const router = useRouter();

	return (
		<>
			<Container centerContent={true}>
				<Heading>ITquiz</Heading>
				<Flex gap={2}>
					<Button onClick={() => router.push("/my-quiz")}>私のクイズ</Button>
					<Button onClick={() => router.push("/our-quiz")}>
						みんなのクイズ
					</Button>
				</Flex>
			</Container>
		</>
	);
}
