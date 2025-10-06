import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Palette } from "src/styles/Palette";
import Trending from "./components/Trending";
import HomeHeader from "./components/HomeHeader";
import Popular from "./components/Popular";
import { responsiveHeight } from "react-native-responsive-dimensions";
import RecentRecipe from "./components/RecentRecipe";
import PopularCreator from "./components/PopularCreator";

const Home = () => {
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
