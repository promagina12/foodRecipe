import { View, Text, FlatList, Pressable, Image } from "react-native";
import React from "react";
import CardContainer from "./CardContainer";
import { placeholder } from "src/assets";
import Style from "src/styles/Style";
import { TextStyle } from "src/styles/fonts";
import { Palette } from "src/styles/Palette";

const PopularCreator = () => {
  return (
    <CardContainer title="Popular creators">
      <FlatList
        data={Array.from({ length: 10 })}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          gap: 16,
        }}
        renderItem={() => (
          <Pressable style={{ width: 75, ...Style.containerCenter, gap: 8 }}>
            <Image
              source={placeholder.profile}
              style={{ width: "100%", height: 75, borderRadius: 100 }}
            />
            <Text
              style={{
                ...TextStyle.smallBold,
                color: Palette.neutral90,
                textAlign: "center",
              }}
            >
              Niki Samantha
            </Text>
          </Pressable>
        )}
      />
    </CardContainer>
  );
};

export default PopularCreator;
