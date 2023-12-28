import React, { useState } from "react";
import { Check } from "@tamagui/lucide-icons";
import { Checkbox, Text, XStack, YStack } from "tamagui";

interface ChecklistInterface {
  item: string;
  position: number;
  handleChecklist: (position: number) => void;
  list: number[];
}

export default function Checklist({
  item,
  position,
  handleChecklist,
  list
}: ChecklistInterface) {
  return (
    <YStack
      ai="flex-start"
      mb={10}
    >
      <XStack
        ai="center"
        gap={10}
      >
        <Checkbox
          size="$4"
          onPress={() => handleChecklist(position)}
          checked={list.indexOf(position) !== -1}
        >
          <Checkbox.Indicator>
            <Check />
          </Checkbox.Indicator>
        </Checkbox>
        <Text
          textDecorationLine={
            list.indexOf(position) !== -1 ? "line-through" : "none"
          }
        >
          {item}
        </Text>
      </XStack>
    </YStack>
  );
}
