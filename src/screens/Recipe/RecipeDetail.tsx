import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Palette } from "src/styles/Palette";
import NavigationHeader from "src/components/NavigationHeader";
import RecipeDetailHeader from "./components/RecipeDetailHeader";
import { icon } from "src/assets";
import Style from "src/styles/Style";
import { TextStyle } from "src/styles/fonts";
import { responsiveHeight } from "react-native-responsive-dimensions";

const RecipeDetail = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Palette.white }}>
      <NavigationHeader title={`How to make french\ntoast`} />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
          gap: 26,
          paddingBottom: responsiveHeight(10),
        }}
        showsVerticalScrollIndicator={false}
      >
        <RecipeDetailHeader />
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
              5 items
            </Text>
          </View>
          <View style={{ gap: 12 }}>
            {Array.from({ length: 5 }).map((_, index) => (
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
                    Bread
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
