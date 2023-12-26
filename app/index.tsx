import { useRouter } from "expo-router";
import { H1, YStack } from "tamagui";

import { MyStack } from "../components/MyStack";

export default function Home() {
  const router = useRouter();
  setTimeout(() => {
    router.push("/search");
  }, 2000);
  return (
    <MyStack>
      <YStack
        space="$4"
        maxWidth={600}
      >
        <H1 textAlign="center">Welcome to Minichef.</H1>
      </YStack>
    </MyStack>
  );
}
