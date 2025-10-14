import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Palette } from "src/styles/Palette";
import DiscoverHeader from "./components/DiscoverHeader";
import { placeholder } from "src/assets";
import VideoCard from "src/components/VideoCard";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { navigate } from "src/navigation/NavigationService";
import { ROUTES } from "src/navigation/Routes";
import useRecipes from "src/hooks/useRecipes";

const Discover = () => {
  const { recipes } = useRecipes();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Palette.white }}>
      <DiscoverHeader />
      <FlatList
        data={recipes}
        contentContainerStyle={{
          paddingTop: 12,
          paddingHorizontal: 20,
          paddingBottom: responsiveHeight(15),
          gap: 16,
        }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <VideoCard
            onPress={() =>
              navigate(ROUTES.RecipeDetail, {
                itemId: item.id,
              })
            }
            userId={item.userId}
            img={item.image}
            name={item.name}
            rating={item.rating}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Discover;
