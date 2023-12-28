import { useState } from "react";
import { ArrowLeft, ChevronDown } from "@tamagui/lucide-icons";
import { useGlobalSearchParams, useRouter } from "expo-router";
import {
  Accordion,
  Button,
  H2,
  H3,
  H4,
  H5,
  Paragraph,
  ScrollView,
  Square,
  Stack,
  Text,
  XStack
} from "tamagui";

import Checklist from "../../components/Checklist";
import { MyStack } from "../../components/MyStack";
import { IIngredient, IPreparation, IRecipe } from "../../interfaces";

export default function Recipe() {
  const router = useRouter();
  const glob = useGlobalSearchParams();
  const recipe: IRecipe = JSON.parse(glob?.recipe);
  const [checklist, setChecklist] = useState<number[]>([]);
  const handleChecklist = (position: number) => {
    if (checklist.indexOf(position) === -1)
      setChecklist((prev) => [...prev, position]);
    else setChecklist((prev) => prev.filter((item) => item !== position));
  };

  const AccordionItem = ({ title, content }) => {
    return (
      <Accordion.Item
        value={title}
        bw={1}
      >
        <Accordion.Trigger
          flexDirection="row"
          justifyContent="space-between"
          bg="#dedfff"
        >
          {({ open }) => (
            <>
              <Paragraph>{title}</Paragraph>
              <Square
                animation="quick"
                rotate={open ? "180deg" : "0deg"}
              >
                <ChevronDown size="$1" />
              </Square>
            </>
          )}
        </Accordion.Trigger>
        <Accordion.Content
          gap={5}
          bg="#dedfff"
          dsp="flex"
          fd="column"
        >
          {content?.map((item: string, index: number) => {
            return (
              <Checklist
                item={item}
                key={index}
                position={index}
                handleChecklist={handleChecklist}
                list={checklist}
              />
            );
          })}
        </Accordion.Content>
      </Accordion.Item>
    );
  };

  return (
    <>
      <XStack
        w="100%"
        ai="center"
        jc="center"
        bbw={1}
        btw={1}
        p={10}
        pt={20}
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
          fontSize={16}
          fontWeight={600}
        >
          {recipe.name.length > 40
            ? `${recipe.name.slice(0, 40)}...`
            : recipe.name}
        </Text>
      </XStack>
      <MyStack jc="flex-start">
        <Text
          fontSize={14}
          fontWeight={500}
          mt={10}
          textAlign="center"
        >
          {recipe.description}
        </Text>
        <ScrollView
          space="$4"
          mah="100%"
        >
          <Accordion
            overflow="hidden"
            type="multiple"
            gap={10}
          >
            {AccordionItem({
              title: "Ingredients",
              content: recipe.ingredients.map((item: IIngredient) => {
                return `${item.name} : ${item.amount}`;
              })
            })}
            {AccordionItem({
              title: "Preparation",
              content: recipe.preparation.map((item: IPreparation) => {
                return item.description;
              })
            })}
          </Accordion>
        </ScrollView>
      </MyStack>
    </>
  );
}
