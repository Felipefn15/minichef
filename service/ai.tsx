import { NativeModules, Platform } from "react-native";
import axios from "axios";

import { OPENAI_KEY } from "@env";

interface messageInterface {
  role: string;
  content: string;
}
const instance = axios.create({
  baseURL: "https://api.openai.com/v1/chat/completions",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${OPENAI_KEY}`
  }
});

export const generateResponse = async (messages: messageInterface) => {
  console.log("Start AI PROCESS", { messages });
  // Get device language
  const deviceLanguage =
    Platform.OS === "ios"
      ? NativeModules.SettingsManager.settings.AppleLocale // iOS
      : NativeModules.I18nManager.localeIdentifier; // Android
  const defaultContext: messageInterface[] = [
    {
      role: "user",
      content: `
      Due the next message find TWO RECIPES that make sense.
      The result MUST contain at TWO OPTIONS. Besides that the answers MUST be a JSON that satisfies the following Typescript interface and contains TWO RECIPES OPTIONS. 
      YOU MUST SEND ONLY THE JSON NON FORMATTTED TO BE PRESENTED ON A CHAT:
      recipes: {
        name: string // The name of the recipe
        description: string // The description of the recipe, nothing more than 200 characters, need to have the quantity of portions
        time_to_prepare: number;
        prepation: {
          step: number;
          description: string;
        }[];
        ingredients: {
          name: string // The name of the ingredient
          amount: number // The amount of the ingredient
          unit: string // The unit of the ingredient
        }[]
      }[]
      DON'T FORGET TO SEND THE JSON NON FORMATTTED TO BE PRESENTED ON A CHAT 
      NOTHING MORE THAN THAT
      The answer must be in ${deviceLanguage} language.
      `
    }
  ];
  try {
    const response = await instance.post("", {
      model: "gpt-3.5-turbo",
      messages: [...defaultContext, messages]
    });

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error sending message:", error);
  }
};
