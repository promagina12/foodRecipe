import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import CardContainer from "./CardContainer";
import { placeholder } from "src/assets";
import { TextStyle } from "src/styles/fonts";
import { Palette } from "src/styles/Palette";

const RecentRecipe = () => {
  return (
    <CardContainer title="Recent recipe">
      <FlatList
        data={Array.from({ length: 10 })}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, gap: 16 }}
        renderItem={() => (
          <View style={{ width: 124, gap: 8 }}>
            <Image
              source={placeholder.trendingMeal}
              style={{ width: "100%", height: 124, borderRadius: 10 }}
            />
            <View style={{ gap: 4, paddingHorizontal: 4 }}>
              <Text
                style={{
                  ...TextStyle.labelBold,
                  color: Palette.neutral90,
                }}
              >
                Indonesian chicken burger
              </Text>
              <Text
                style={{
                  ...TextStyle.tinyRegular,
                  color: Palette.neutral40,
                }}
              >
                By Adrianna Curl
              </Text>
            </View>
          </View>
        )}
      />
    </CardContainer>
  );
};

export default RecentRecipe;
