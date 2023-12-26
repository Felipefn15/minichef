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
          // headerLeft() {
          //   return (
          //     <Button
          //       ml="$2.5"
          //       onPress={() => router.push("/")}
          //     >
          //       <MaterialCommunityIcons name="arrow-left" />
          //     </Button>
          //   );
          // }
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
          // headerLeft() {
          //   return (
          //     <Button
          //       ml="$2.5"
          //       onPress={() => router.push("/")}
          //     >
          //       <MaterialCommunityIcons name="arrow-left" />
          //     </Button>
          //   );
          // }
        }}
      />
    </Tabs>
  );
}
