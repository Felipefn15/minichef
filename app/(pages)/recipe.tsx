import { useState } from "react";
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

import Checklist from "../../components/Checklist";
import { MyStack } from "../../components/MyStack";
import { IIngredient } from "../../interfaces";

export default function Recipe() {
  const router = useRouter();
  const glob = useGlobalSearchParams();
  const recipe = JSON.parse(glob?.recipe);
  const [checklist, setChecklist] = useState<number[]>([]);
  const handleChecklist = (position: number) => {
    if (checklist.indexOf(position) === -1)
      setChecklist((prev) => [...prev, position]);
    else setChecklist((prev) => prev.filter((item) => item !== position));
  };
  console.log({ recipe });
  return (
    <>
      <XStack
        w="100%"
        ai="center"
        jc="center"
        bbw={1}
        p={10}
        bg="#dedfff"
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
      <MyStack>
        <Text>{recipe.description}</Text>
        <ScrollView
          space="$4"
          mah="88%"
        >
          <Stack
            ai="flex-start"
            bw={1}
            p={10}
          >
            <H5>Ingredients</H5>
            <Stack
              w="100%"
              ai="flex-start"
              p={10}
            >
              {recipe.ingredients?.map(
                (ingredient: IIngredient, index: number) => {
                  return (
                    <Checklist
                      item={`${ingredient.name} : ${ingredient.amount}`}
                      key={index}
                      position={index}
                      handleChecklist={handleChecklist}
                      list={checklist}
                    />
                  );
                }
              )}
            </Stack>
          </Stack>
          <Stack
            ai="flex-start"
            bw={1}
            p={10}
          >
            <H5>Ingredients</H5>
            <Stack
              w="100%"
              ai="flex-start"
              p={10}
            >
              {recipe.ingredients?.map(
                (ingredient: IIngredient, index: number) => {
                  return (
                    <Checklist
                      item={`${ingredient.name} : ${ingredient.amount}`}
                      key={index}
                      position={index}
                      handleChecklist={handleChecklist}
                      list={checklist}
                    />
                  );
                }
              )}
            </Stack>
          </Stack>
        </ScrollView>
      </MyStack>
    </>
  );
}
