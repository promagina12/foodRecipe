import { StackScreenProps } from "@react-navigation/stack";

export type RootStackParamList = {
  Onboarding: undefined;
  BottomStack: undefined;
  RecipeDetail: { itemId: string | undefined };
  CreateRecipe: undefined;
};

export type RootStackProps = StackScreenProps<RootStackParamList>;
