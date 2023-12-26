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
      role: "assistant",
      content: "Hello, I'm your personal cookbook. How can I help you?"
    },
    {
      role: "user",
      content: `I need 5 recipes
      Please follow the struction example:
      Interface Recipe{
        Name:string
        Ingredients:{
        Name:string
        }
        Preparation(Step by step):{
        Step:string
        }
        Time to prepare: number
        Difficulty: number // 1 to 10
        Quantity of a portion: number
      }
      By default, all the users will have salt, pepper, oil and water.
      answer nedd to be in ${deviceLanguage}
      Return as a JSON recipes: Recipes[]
      You can not break this structure
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
