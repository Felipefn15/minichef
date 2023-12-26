import { Clock } from "@tamagui/lucide-icons";
import { Button, H3, H5, Stack, Text, XStack } from "tamagui";

interface RecipeCardInterface {
  recipe: {
    name: string;
    timeToPrepare: number;
    difficulty: number;
    ingredients: {
      name: string;
    }[];
  };
}

export default function RecipeCard({ recipe }: RecipeCardInterface) {
  return (
    <Stack
      w="100%"
      ai="center"
      bg="#dedfff"
      p="$2"
      br="$2"
      bw={1}
      bc="#afb1fa"
    >
      <XStack
        ai="center"
        jc="space-between"
        w="90%"
      >
        <H3>{recipe.name}</H3>
        <XStack
          ai="center"
          gap={5}
        >
          <Clock />
          <Text>{recipe.timeToPrepare} minutes</Text>
        </XStack>
      </XStack>
      <XStack
        ai="center"
        jc="space-between"
        w="80%"
      >
        <Stack ai="flex-start">
          <H5>Ingredient</H5>
          <Stack
            w="100%"
            ai="flex-start"
          >
            {recipe.ingredients?.map((ingredient, index) => {
              return <Text key={index}>- {ingredient.name}</Text>;
            })}
          </Stack>
        </Stack>
        <Stack ai="center">
          <H5>Difficulty</H5>
          <Text>{recipe.difficulty}</Text>
        </Stack>
      </XStack>
    </Stack>
  );
}
