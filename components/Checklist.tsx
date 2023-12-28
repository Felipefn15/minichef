import React, { useState } from "react";
import { Check } from "@tamagui/lucide-icons";
import { Button, Checkbox, Stack, Text, XStack, YStack } from "tamagui";

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
    <Button
      ai="center"
      jc="flex-end"
      variant="outlined"
      h="auto"
      gap={1}
      onPress={() => {
        handleChecklist(position);
        setChecked(!checked);
      }}
    >
      <Stack
        dsp="flex"
        fd="row"
        w="100%"
        ai="center"
        gap={8}
      >
        <Checkbox
          checked={checked}
          onPress={() => {
            handleChecklist(position);
            setChecked(!checked);
          }}
        >
          <Checkbox.Indicator>
            <Check />
          </Checkbox.Indicator>
        </Checkbox>
        <Text textDecorationLine={checked ? "line-through" : "none"}>
          {item}
        </Text>
      </Stack>
    </Button>
  );
}
