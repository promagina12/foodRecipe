import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { TextStyle } from "src/styles/fonts";
import { Palette } from "src/styles/Palette";
import IngredientsCard from "./IngredientsCard";
import PlusSVG from "src/assets/AppIcon/plus";

const IngredientsContainer = () => {
  const [ingredients, setIngredients] = useState<any>([]);

  const onPressAddIngredients = () => {
    setIngredients((prev: any) => [...prev, { id: prev.length }]);
  };

  return (
    <View style={{ marginTop: 24, gap: 16 }}>
      <Text
        style={{
          ...TextStyle.h5Bold,
          color: Palette.neutral100,
        }}
      >
        Ingredients
      </Text>
      {ingredients.map((_: any, index: React.Key | null | undefined) => (
        <IngredientsCard key={index} />
      ))}
      <Pressable
        style={{
          flexDirection: "row",
          gap: 4,
        }}
        onPress={onPressAddIngredients}
      >
        <PlusSVG />
        <Text
          style={{
            ...TextStyle.paragraphBold,
            color: Palette.neutral90,
          }}
        >
          Add new Ingredient
        </Text>
      </Pressable>
    </View>
  );
};

export default IngredientsContainer;
