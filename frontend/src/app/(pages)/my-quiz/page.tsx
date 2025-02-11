"use client";
import { Button, Container, Fieldset, Heading } from "@yamada-ui/react";
export const MyQuiz = () => {
	return (
		<>
			<Container centerContent={true}>
				<Heading>問1 ほげほげとは何か</Heading>
				<Fieldset legend="1" errorMessage="不正解です。">
					<Button variant={"ghost"} width={"full"}>
						1. hogehogehguaghuag
					</Button>
				</Fieldset>
				<Fieldset legend="2" errorMessage="不正解です。">
					<Button variant={"ghost"} width={"full"}>
						2. hogehogehguaghuag
					</Button>
				</Fieldset>
				<Fieldset legend="3">
					<Button variant={"ghost"} width={"full"}>
						3. hogehogehguaghuag
					</Button>
				</Fieldset>
				<Fieldset legend="4">
					<Button variant={"ghost"} width={"full"}>
						4. hogehogehguaghuag
					</Button>
				</Fieldset>
			</Container>
		</>
	);
};
export default MyQuiz;
