import { View, Text } from "react-native";
import React from "react";
import { TextStyle } from "src/styles/fonts";
import { Palette } from "src/styles/Palette";
import SearchBar from "src/components/SearchBar";

const HomeHeader = () => {
  return (
    <View style={{ paddingHorizontal: 20, gap: 28, paddingTop: 12 }}>
      <Text
        style={{
          ...TextStyle.h4Bold,
          color: Palette.neutral90,
        }}
      >
        Find best recipes{"\n"}for cooking
      </Text>
      <SearchBar />
    </View>
  );
};

export default HomeHeader;
