import { FlatList } from "react-native";
import React from "react";
import CardContainer from "./CardContainer";
import { IRecipe } from "src/interface/recipe";
import RecentRecipeCard from "./RecentRecipeCard";
import { navigate } from "src/navigation/NavigationService";
import { ROUTES } from "src/navigation/Routes";

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
            onPress={() =>
              navigate(ROUTES.RecipeDetail, {
                itemId: item.id,
              })
            }
          />
        )}
      />
    </CardContainer>
  );
};

export default RecentRecipe;
