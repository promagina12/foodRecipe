import { FlatList } from "react-native";
import React from "react";
import CardContainer from "./CardContainer";
import VideoCard from "src/components/VideoCard";
import { IRecipe } from "src/interface/recipe";
import { navigate } from "src/navigation/NavigationService";
import { ROUTES } from "src/navigation/Routes";

interface Props {
  recipes?: IRecipe[];
}

const Trending: React.FC<Props> = ({ recipes }) => {
  return (
    <CardContainer title="Trending now 🔥">
      <FlatList
        data={recipes}
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 20,
          gap: 16,
        }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <VideoCard
            horizontal
            img={item.image}
            name={item.name}
            rating={item.rating}
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

export default Trending;
