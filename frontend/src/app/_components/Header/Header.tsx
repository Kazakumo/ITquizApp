import { Button, Divider, Flex, Link, Spacer } from "@yamada-ui/react";

import { useRouter } from "next/navigation";

export const Header = () => {
	const router = useRouter();
	return (
		<>
			<header>
				<Flex justify={"center"} align="center" gap={2}>
					<Link
						href="/"
						fontSize={{ base: "4xl", sm: "3xl" }}
						fontFamily="heading"
						fontWeight="bold"
						bgGradient="linear(to-l, #7928CA, #FF0080)"
						bgClip="text"
						ml={2}
					>
						ITQuiz
					</Link>
					<Spacer />
					<Button size="xs">設定</Button>
					<Link href="/" color={"blackAlpha 700"}>
						データ
					</Link>
					<Link href="/" color={"blackAlpha 700"}>
						単語帳
					</Link>
					<Button
						size="xs"
						mr={2}
						h={"full"}
						onClick={() => {
							router.push("/");
						}}
					>
						SignOut
					</Button>
				</Flex>
				<Divider variant="solid" />
			</header>
		</>
	);
};
