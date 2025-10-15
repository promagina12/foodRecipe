import { View, Pressable } from "react-native";
import React from "react";
import Input from "src/components/Input";
import PlusSquareSVG from "src/assets/AppIcon/plusSquare";
import Style from "src/styles/Style";

const IngredientsCard = () => {
  return (
    <View style={{ ...Style.containerRow, gap: 12 }}>
      <Input containerStyle={{ flex: 1 }} placeholder="Item name" />
      <Input containerStyle={{ width: 115 }} placeholder="Quantity" />
      <Pressable>
        <PlusSquareSVG />
      </Pressable>
    </View>
  );
};

export default IngredientsCard;
