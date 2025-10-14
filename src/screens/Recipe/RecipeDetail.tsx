import { View, Text, ScrollView, Image } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Palette } from "src/styles/Palette";
import NavigationHeader from "src/components/NavigationHeader";
import RecipeDetailHeader from "./components/RecipeDetailHeader";
import { icon } from "src/assets";
import Style from "src/styles/Style";
import { TextStyle } from "src/styles/fonts";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { useRoute } from "@react-navigation/native";
import { useAppDispatch } from "src/store";
import { getRecipeById } from "src/store/slices/recipes/thunk";
import useRecipes from "src/hooks/useRecipes";

const RecipeDetail = () => {
  const params = useRoute()?.params;
  const itemId = params?.itemId;
  const dispatch = useAppDispatch();
  const { recipe } = useRecipes();

  useEffect(() => {
    if (itemId) {
      dispatch(getRecipeById(itemId));
    }
  }, []);

  console.log("recipe: ", recipe);

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
              <View
                key={index}
                style={{
                  ...Style.containerSpaceBetween,
                  paddingHorizontal: 16,
                  paddingVertical: 12,
                  backgroundColor: Palette.neutral10,
                  borderRadius: 12,
                }}
              >
                <View
                  style={{
                    ...Style.containerRow,
                    gap: 16,
                  }}
                >
                  <View
                    style={{
                      ...Style.containerCenter,
                      width: 52,
                      height: 52,
                      backgroundColor: Palette.white,
                      borderRadius: 10,
                    }}
                  >
                    <Image source={icon.noodleIcon} />
                  </View>
                  <Text
                    style={{
                      ...TextStyle.paragraphBold,
                      color: Palette.neutral90,
                    }}
                  >
                    {item}
                  </Text>
                </View>
                <Text
                  style={{
                    ...TextStyle.labelRegular,
                    color: Palette.neutral40,
                  }}
                >
                  200g
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecipeDetail;
