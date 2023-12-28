import { Clock } from "@tamagui/lucide-icons";
import { useRouter } from "expo-router";
import { Button, H4, Stack, Text, XStack } from "tamagui";

import { IRecipe } from "../interfaces";

interface RecipeCardInterface {
  recipe: IRecipe;
}

export default function RecipeCard({ recipe }: RecipeCardInterface) {
  const router = useRouter();
  return (
    <Button
      w="100%"
      h="auto"
      fd="column"
      ai="center"
      bg="#dedfff"
      p="$2"
      br="$2"
      bw={1}
      bc="#afb1fa"
      onPress={() =>
        router.push({
          pathname: "/recipe",
          params: { recipe: JSON.stringify(recipe) }
        })
      }
    >
      <H4>{recipe.name}</H4>
      <Text
        fontSize={14}
        fontWeight={500}
      >
        {recipe.description}
      </Text>
      <Stack ai="center">
        <XStack
          ai="center"
          gap={5}
        >
          <Clock size={15} />
          <Text>Time to prepare</Text>
        </XStack>
        <Text>{recipe.duration} min</Text>
      </Stack>
    </Button>
  );
}
