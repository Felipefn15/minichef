import React, { useState } from "react";
import { Check } from "@tamagui/lucide-icons";
import { Button, Checkbox, Text, XStack, YStack } from "tamagui";

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
  const [checked, setChecked] = useState(list.indexOf(position) !== -1);
  return (
    <YStack
      mb={5}
      pr={30}
      width="100%"
    >
      <Button
        ai="center"
        jc="flex-start"
        width="100%"
        variant="outlined"
        gap={1}
        onPress={() => {
          handleChecklist(position);
          setChecked(!checked);
        }}
      >
        <Checkbox
          size="$4"
          checked={checked}
        >
          <Checkbox.Indicator>
            <Check />
          </Checkbox.Indicator>
        </Checkbox>
        <Text textDecorationLine={checked ? "line-through" : "none"}>
          {item}
        </Text>
      </Button>
    </YStack>
  );
}
