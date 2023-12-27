import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { Button } from "tamagui";

export default function Layout() {
  const router = useRouter();
  return (
    <>
      <Stack.Screen
        options={{
          headerLeft() {
            return (
              <Button
                ml="$2.5"
                onPress={() => router.push("/")}
              >
                <MaterialCommunityIcons name="arrow-left" />
              </Button>
            );
          }
        }}
      />
      <Stack />
    </>
  );
}
