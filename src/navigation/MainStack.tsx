import React from "react";
import Onboarding from "src/screens/Onboarding";
import { ROUTES } from "./Routes";
import { createStackNavigator } from "@react-navigation/stack";
import BottomStack from "./BottomStack";

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={ROUTES.Onboarding} component={Onboarding} />
      <Stack.Screen name={ROUTES.BottomStack} component={BottomStack} />
    </Stack.Navigator>
  );
};

export default MainStack;
