import React, { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

import GetStarted from "./screens/GetStarted";
import PersonInfo from "./screens/PersonInfo";
import Feedback from "./screens/Feedback";
import Capture from "./screens/Capture";
import Preview from "./screens/Preview";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    medium: require("./assets/fonts/PlayfairDisplay-Medium.ttf"),
    regular: require("./assets/fonts/PlayfairDisplay-Regular.ttf"),
    semibold: require("./assets/fonts/PlayfairDisplay-SemiBold.ttf"),
    bold: require("./assets/fonts/PlayfairDisplay-Bold.ttf"),
    black: require("./assets/fonts/PlayfairDisplay-Black.ttf"),
  });

  const onLayoutView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, animation: "slide_from_right" }}
      >
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="PersonInfo" component={PersonInfo} />
        <Stack.Screen name="Feedback" component={Feedback} />
        <Stack.Screen name="Capture" component={Capture} />
        <Stack.Screen name="Preview" component={Preview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
