import { useEffect } from "react";
import { useRouter } from "expo-router";
import { H1, YStack } from "tamagui";

import { MyStack } from "../components/MyStack";
import DatabaseInit from "../database";
import { useDatabase } from "../hooks/useDatabase";
import { IRecipe } from "../interfaces";

export default function Home() {
  const router = useRouter();
  const { getRecipes } = useDatabase();
  setTimeout(() => {
    router.push("/search");
  }, 2000);
  useEffect(() => {
    getRecipes().then((recipes: IRecipe[]) => {
      if (!recipes || recipes.length === 0) {
        new DatabaseInit();
      }
    });
  }, []);
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
