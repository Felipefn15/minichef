import { Clock, SmilePlus } from "@tamagui/lucide-icons";
import { useRouter } from "expo-router";
import { Button, H3, H5, Stack, Text, XStack } from "tamagui";

interface RecipeCardInterface {
  recipe: {
    name: string;
    time_to_prepare: number;
    difficulty: number;
    quantity_of_a_portion: number;
    ingredients: {
      name: string;
    }[];
  };
}

export default function RecipeCard({ recipe }: RecipeCardInterface) {
  const router = useRouter();
  return (
    <Button
      w="100%"
      h={125}
      fd="column"
      ai="center"
      bg="#dedfff"
      p="$2"
      br="$2"
      bw={1}
      bc="#afb1fa"
      gap={5}
      onPress={() =>
        router.push({
          pathname: "/recipe",
          params: { recipe: JSON.stringify(recipe) }
        })
      }
    >
      <H3>{recipe.name}</H3>
      <XStack
        ai="flex-start"
        jc="space-around"
        w="100%"
        gap={15}
      >
        <Stack ai="center">
          <XStack
            ai="center"
            gap={5}
          >
            <Clock size={15} />
            <Text>Time to prepare</Text>
          </XStack>
          <Text>{recipe.time_to_prepare} min</Text>
        </Stack>
        <Stack ai="center">
          <Text>Difficulty</Text>
          <Text>{recipe.difficulty}</Text>
        </Stack>
      </XStack>
    </Button>
  );
}
