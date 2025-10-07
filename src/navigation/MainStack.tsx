import React from "react";
import Onboarding from "src/screens/Onboarding";
import { ROUTES } from "./Routes";
import { createStackNavigator } from "@react-navigation/stack";
import BottomStack from "./BottomStack";
import RecipeDetail from "src/screens/Recipe/RecipeDetail";
import CreateRecipe from "src/screens/CreateRecipe/CreateRecipe";

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
      <Stack.Screen name={ROUTES.RecipeDetail} component={RecipeDetail} />
      <Stack.Screen name={ROUTES.CreateRecipe} component={CreateRecipe} />
    </Stack.Navigator>
  );
};

export default MainStack;
