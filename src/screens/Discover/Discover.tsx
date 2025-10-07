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

const Discover = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Palette.white }}>
      <DiscoverHeader />
      <FlatList
        data={Array.from({ length: 10 })}
        contentContainerStyle={{
          paddingTop: 12,
          paddingHorizontal: 20,
          paddingBottom: responsiveHeight(15),
          gap: 16,
        }}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <VideoCard onPress={() => navigate(ROUTES.RecipeDetail)} />
        )}
      />
    </SafeAreaView>
  );
};

export default Discover;
