import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Palette } from "src/styles/Palette";
import NavigationHeader from "src/components/NavigationHeader";
import RecipeDetailHeader from "./components/RecipeDetailHeader";
import Style from "src/styles/Style";
import { TextStyle } from "src/styles/fonts";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useAppDispatch } from "src/store";
import { getRecipeById } from "src/store/slices/recipes/thunk";
import useRecipes from "src/hooks/useRecipes";
import { RootStackParamList } from "src/navigation/types";
import IngredientsCard from "./components/IngredientsCard";

type Props = RouteProp<RootStackParamList, "RecipeDetail">;
const RecipeDetail = () => {
  const params = useRoute<Props>().params;
  const { itemId } = params;
  const dispatch = useAppDispatch();
  const { recipe, isLoadingRecipe } = useRecipes();

  useEffect(() => {
    if (itemId) {
      dispatch(getRecipeById(itemId));
    }
  }, [params]);

  if (isLoadingRecipe) {
    return (
      <View style={{ flex: 1, ...Style.containerCenter }}>
        <ActivityIndicator color={Palette.primary50} />;
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Palette.white }}>
      <NavigationHeader title={`How to make ${recipe?.name}`} />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
          gap: 26,
          paddingBottom: responsiveHeight(10),
        }}
        showsVerticalScrollIndicator={false}
      >
        <RecipeDetailHeader
          img={recipe?.image}
          rating={recipe?.rating}
          reviewCount={recipe?.reviewCount}
          userId={recipe?.userId}
        />
        <View style={{ gap: 16 }}>
          <View style={{ ...Style.containerSpaceBetween }}>
            <Text
              style={{
                ...TextStyle.h5Bold,
                color: Palette.neutral90,
              }}
            >
              Ingredients
            </Text>
            <Text
              style={{
                ...TextStyle.labelRegular,
                color: Palette.neutral40,
              }}
            >
              {recipe?.ingredients.length} items
            </Text>
          </View>
          <View style={{ gap: 12 }}>
            {recipe?.ingredients.map((item, index) => (
              <IngredientsCard label={item} key={index} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecipeDetail;
