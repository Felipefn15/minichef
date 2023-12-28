import { useState } from "react";
import { SendHorizontal } from "@tamagui/lucide-icons";
import {
  Button,
  ScrollView,
  Spinner,
  Stack,
  TextArea,
  XStack,
  YStack
} from "tamagui";

import { MyStack } from "../../components/MyStack";
import RecipeCard from "../../components/RecipeCard";
import { useDatabase } from "../../hooks/useDatabase";
import { IRecipe } from "../../interfaces";
import { generateResponse } from "../../service/ai";

export default function Search() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { saveRecipes } = useDatabase();

  const handleSearch = async () => {
    if (!input) return;
    setMessages((prev) => [...prev, { role: "user", content: input }]);
    setInput("");
    setIsLoading(true);
    try {
      const botResponse = await generateResponse({
        role: "user",
        content: input
      });
      setMessages((prev) => [
        ...prev,
        { role: "system", content: "Sure, here some suggestions:" }
      ]);
      if (!botResponse) return;
      const parsedBotResponse = JSON.parse(botResponse);
      await saveRecipes(parsedBotResponse?.recipes);
      parsedBotResponse?.recipes.forEach((recipe: IRecipe) => {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: recipe }
        ]);
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderMessages = () => {
    return messages?.map((message, index) => {
      if (message.role === "assistant") {
        return (
          <RecipeCard
            key={index}
            recipe={message.content}
          />
        );
      }
      return (
        <Stack
          key={index}
          w="100%"
          ai={message.role === "system" ? "flex-start" : "flex-end"}
        >
          <TextArea
            w="70%"
            mah={140}
            value={message.content}
            editable={false}
            bg={message.role === "system" ? "#dedfff" : "#afb1fa"}
          />
        </Stack>
      );
    });
  };

  return (
    <MyStack>
      <ScrollView
        space="$4"
        mah="88%"
      >
        <YStack space="$4">{renderMessages()}</YStack>
      </ScrollView>
      {isLoading ? (
        <Spinner size="large" />
      ) : (
        <XStack
          display="flex"
          pos="absolute"
          ai="center"
          w="100%"
          bottom={10}
          l={10}
          gap="$2"
        >
          <TextArea
            w="80%"
            mah={140}
            value={input}
            onChangeText={(text) => setInput(text)}
          />
          <Button
            onPress={() => handleSearch()}
            variant="outlined"
          >
            <SendHorizontal />
          </Button>
        </XStack>
      )}
    </MyStack>
  );
}
