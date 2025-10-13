import { View, Text, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Palette } from "src/styles/Palette";
import Trending from "./components/Trending";
import HomeHeader from "./components/HomeHeader";
import Popular from "./components/Popular";
import { responsiveHeight } from "react-native-responsive-dimensions";
import RecentRecipe from "./components/RecentRecipe";
import PopularCreator from "./components/PopularCreator";
import useRecipes from "src/hooks/useRecipes";
import { getAllRecipe } from "src/store/slices/recipes/thunk";
import { useAppDispatch } from "src/store";

const Home = () => {
  const dispatch = useAppDispatch();
  const { recipes, isLoadingRecipes } = useRecipes();

  useEffect(() => {
    try {
      console.log("HOME");
      dispatch(getAllRecipe());
    } catch (error) {
      console.log("ERROR: ", error);
    }
  }, [dispatch]);
  // console.log("dispatch: ", dispatch(getAllRecipe()));
  console.log("recipes: ", recipes);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Palette.white, gap: 20 }}>
      <HomeHeader />
      <View style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{
            gap: 24,
            paddingBottom: responsiveHeight(20),
          }}
          showsVerticalScrollIndicator={false}
        >
          <Trending />
          <Popular />
          <RecentRecipe />
          <PopularCreator />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
