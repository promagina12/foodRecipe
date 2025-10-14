import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import CardContainer from "./CardContainer";
import { placeholder } from "src/assets";
import { TextStyle } from "src/styles/fonts";
import { Palette } from "src/styles/Palette";
import { IRecipe } from "src/interface/recipe";
import RecentRecipeCard from "./RecentRecipeCard";

interface Props {
  recipes: IRecipe[];
}

const RecentRecipe: React.FC<Props> = ({ recipes }) => {
  return (
    <CardContainer title="Recent recipe">
      <FlatList
        data={recipes}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, gap: 16 }}
        renderItem={({ item }) => (
          <RecentRecipeCard
            image={item.image}
            name={item.name}
            userId={item.userId}
          />
        )}
      />
    </CardContainer>
  );
};

export default RecentRecipe;
