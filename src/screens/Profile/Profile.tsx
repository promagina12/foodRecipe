import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Palette } from "src/styles/Palette";
import ProfileHeader from "./Components/ProfileHeader";
import ProfileInfo from "./Components/ProfileInfo";
import { placeholder } from "src/assets";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { BlurView } from "expo-blur";
import StarSVG from "src/assets/AppIcon/star";
import { TextStyle } from "src/styles/fonts";
import Style from "src/styles/Style";
import ThreeDotsHorizontalSVG from "src/assets/AppIcon/threeDotsHorizontal";
import useRecipes from "src/hooks/useRecipes";
import { useUserStore } from "src/store/slices/users/useUserStore";
import { IRecipe } from "src/interface/recipe";
import { filter } from "lodash";

const currentUserID = 43;

const Profile = () => {
  const { recipes } = useRecipes();
  const { currUser } = useUserStore();
  const [myRecipes, setMyRecipes] = useState<IRecipe[]>([]);

  useEffect(() => {
    if (currUser) {
      const newData = filter(recipes, ["userId", currUser.id]);
      setMyRecipes(newData);
    }
  }, [currUser]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Palette.white }}>
      <ProfileHeader />
      <ProfileInfo
        img={currUser?.image}
        name={`${currUser?.firstName} ${currUser?.lastName}`}
        recipeCount={myRecipes.length}
        videosCount={myRecipes.length}
      />
      <FlatList
        data={myRecipes}
        contentContainerStyle={{
          paddingTop: 20,
          paddingHorizontal: 20,
          paddingBottom: responsiveHeight(20),
          gap: 16,
        }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View
            style={{
              borderRadius: 10,
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Image
              source={{ uri: item.image }}
              style={{ width: "100%", height: 200 }}
            />
            <BlurView style={styles.ratingsContainer}>
              <StarSVG size={16} color={Palette.white} />
              <Text
                style={{
                  ...TextStyle.labelBold,
                  marginTop: 4,
                }}
              >
                {item.rating}
              </Text>
            </BlurView>
            <Pressable style={styles.bookmarkContainer}>
              <ThreeDotsHorizontalSVG color={Palette.primary50} size={20} />
            </Pressable>

            <View style={styles.recipeTitleContainer}>
              <Text
                style={{
                  ...TextStyle.paragraphBold,
                }}
              >
                {item.name}
              </Text>
              <Text
                style={{
                  ...TextStyle.smallRegular,
                }}
              >
                {item.ingredients.length} Ingredients | {item.cookTimeMinutes}{" "}
                min
              </Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  ratingsContainer: {
    position: "absolute",
    ...Style.containerRow,
    paddingHorizontal: 8,
    height: 28,
    backgroundColor: "#30303030",
    borderRadius: 8,
    left: 8,
    top: 8,
    overflow: "hidden",
  },
  bookmarkContainer: {
    ...Style.containerCenter,
    width: 32,
    height: 32,
    borderRadius: 100,
    backgroundColor: Palette.white,
    position: "absolute",
    top: 8,
    right: 8,
  },
  recipeTitleContainer: {
    position: "absolute",
    bottom: 16,
    left: 16,
    width: responsiveWidth(40),
  },
});
