import { ArrowLeft } from "@tamagui/lucide-icons";
import { useGlobalSearchParams, useRouter } from "expo-router";
import {
  Button,
  H2,
  H3,
  H4,
  H5,
  ScrollView,
  Stack,
  Text,
  XStack
} from "tamagui";

import { MyStack } from "../../components/MyStack";

export default function Recipe() {
  const router = useRouter();
  const glob = useGlobalSearchParams();
  const recipe = JSON.parse(glob?.recipe);
  return (
    <MyStack>
      <XStack
        w="100%"
        ai="center"
        jc="center"
        bbw={1}
        p={10}
      >
        <Button
          onPress={() => router.back()}
          pos="absolute"
          left={0}
          variant="outlined"
        >
          <ArrowLeft size={20} />
        </Button>
        <Text
          fontSize={17}
          fontWeight={500}
        >
          {recipe.name}
        </Text>
      </XStack>

      <ScrollView
        space="$4"
        mah="88%"
      >
        <Stack ai="flex-start">
          <H5>Ingredient</H5>
          <Stack
            w="100%"
            ai="flex-start"
          >
            {recipe.ingredients?.map((ingredient, index) => {
              return (
                <Stack key={index}>
                  <Text key={index}>
                    - {ingredient.name} : {ingredient.amount} {ingredient.unit}
                  </Text>
                </Stack>
              );
            })}
          </Stack>
        </Stack>
      </ScrollView>
    </MyStack>
  );
}
