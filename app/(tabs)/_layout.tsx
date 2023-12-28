import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";
import { Button } from "tamagui";

export default function Layout() {
  const router = useRouter();

  return (
    <Tabs>
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon(props) {
            return (
              <MaterialCommunityIcons
                name="food"
                {...props}
              />
            );
          }
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon(props) {
            return (
              <MaterialCommunityIcons
                name="history"
                {...props}
              />
            );
          }
        }}
      />
    </Tabs>
  );
}
