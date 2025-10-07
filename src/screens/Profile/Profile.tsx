import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import React from "react";
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

const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Palette.white }}>
      <ProfileHeader />
      <ProfileInfo />
      <FlatList
        data={Array.from({ length: 3 })}
        contentContainerStyle={{
          paddingTop: 20,
          paddingHorizontal: 20,
          paddingBottom: responsiveHeight(20),
          gap: 16,
        }}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <View
            style={{
              borderRadius: 10,
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Image
              source={placeholder.trendingMeal}
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
                4,5
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
                Simple chicken meal prep dishes
              </Text>
              <Text
                style={{
                  ...TextStyle.smallRegular,
                }}
              >
                12 Ingredients | 40 min
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
