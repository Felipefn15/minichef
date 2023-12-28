import { useEffect, useState } from "react";
import { Github, Twitter } from "@tamagui/lucide-icons";
import { Link, useRouter } from "expo-router";
import {
  Button,
  H1,
  ListItem,
  Paragraph,
  ScrollView,
  Separator,
  Spinner,
  YGroup,
  YStack
} from "tamagui";

import { MyStack } from "../../components/MyStack";
import RecipeCard from "../../components/RecipeCard";
import { useDatabase } from "../../hooks/useDatabase";
import { IRecipe } from "../../interfaces";

export default function History() {
  const { getRecipes } = useDatabase();
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    setIsLoading(true);
    getRecipes().then((recipes: IRecipe[]) => {
      setRecipes(recipes);
      setIsLoading(false);
    });
  }, []);
  return (
    <MyStack>
      {isLoading ? (
        <Spinner size="large" />
      ) : (
        <ScrollView
          space="$4"
          mah="100%"
        >
          <YStack
            gap="$4"
            p={8}
          >
            {recipes?.map((recipe: IRecipe, index: number) => (
              <RecipeCard
                key={index}
                recipe={recipe}
              />
            ))}
          </YStack>
        </ScrollView>
      )}
    </MyStack>
  );
}
