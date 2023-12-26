import { Clock, SmilePlus } from "@tamagui/lucide-icons";
import { Button, H3, H5, Stack, Text, XStack } from "tamagui";

interface RecipeCardInterface {
  recipe: {
    name: string;
    timeToPrepare: number;
    difficulty: number;
    quantityOfAPortion: number;
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
      gap={15}
    >
      <XStack
        ai="center"
        jc="space-between"
        w="90%"
        gap={5}
      >
        <H3>{recipe.name}</H3>
        <Stack ai="center">
          <XStack
            ai="center"
            gap={5}
          >
            <Clock size={15} />
            <Text>Time to prepare</Text>
          </XStack>

          <Text>{recipe.timeToPrepare} minutes</Text>
        </Stack>
      </XStack>
      <XStack
        ai="flex-start"
        jc="space-between"
        w="80%"
        gap={15}
      >
        {/* <Stack ai="flex-start">
          <H5>Ingredient</H5>
          <Stack
            w="100%"
            ai="flex-start"
          >
            {recipe.ingredients?.map((ingredient, index) => {
              return <Text key={index}>- {ingredient.name}</Text>;
            })}
          </Stack>
        </Stack> */}
        <Stack ai="center">
          <XStack
            ai="center"
            gap={5}
          >
            <SmilePlus size={15} />
            <Text>Quantity of a portion</Text>
          </XStack>
          <Text>{recipe.quantityOfAPortion}</Text>
        </Stack>
        <Stack ai="center">
          <Text>Difficulty</Text>
          <Text>{recipe.difficulty}</Text>
        </Stack>
      </XStack>
    </Stack>
  );
}
