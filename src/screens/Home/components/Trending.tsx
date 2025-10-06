import {
  View,
  Text,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";
import React from "react";
import CardContainer from "./CardContainer";
import { placeholder } from "src/assets";
import { responsiveWidth } from "react-native-responsive-dimensions";
import ThreeDotsHorizontalSVG from "src/assets/AppIcon/threeDotsHorizontal";
import Style from "src/styles/Style";
import { TextStyle } from "src/styles/fonts";
import { Palette } from "src/styles/Palette";
import { BlurView } from "expo-blur";
import StarSVG from "src/assets/AppIcon/star";
import BookmarkSVG from "src/assets/AppIcon/bookmark";
import PlaySVG from "src/assets/AppIcon/play";

const Trending = () => {
  return (
    <CardContainer title="Trending now 🔥">
      <FlatList
        data={Array.from({ length: 10 })}
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 20,
          gap: 16,
        }}
        showsHorizontalScrollIndicator={false}
        renderItem={() => (
          <View style={{ width: responsiveWidth(70), gap: 12 }}>
            <View style={{ position: "relative", ...Style.containerCenter }}>
              <Image
                source={placeholder.trendingMeal}
                style={{ width: "100%", height: 180, borderRadius: 15 }}
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
                <BookmarkSVG color={Palette.neutral90} size={21} />
              </Pressable>
              <BlurView style={styles.durationContainer}>
                <Text
                  style={{
                    ...TextStyle.smallRegular,
                  }}
                >
                  15:10
                </Text>
              </BlurView>
              <Pressable style={styles.playContainer}>
                <BlurView
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#30303030",
                    ...Style.containerCenter,
                  }}
                >
                  <PlaySVG color={Palette.white} />
                </BlurView>
              </Pressable>
            </View>
            <View style={{ gap: 8 }}>
              <View style={Style.containerSpaceBetween}>
                <Text
                  style={{
                    ...TextStyle.paragraphBold,
                    color: Palette.neutral90,
                  }}
                >
                  How to make sushi at home
                </Text>
                <Pressable>
                  <ThreeDotsHorizontalSVG />
                </Pressable>
              </View>
              <View
                style={{
                  ...Style.containerRow,
                  gap: 8,
                }}
              >
                <Image
                  source={placeholder.profile}
                  style={{ width: 32, height: 32, borderRadius: 100 }}
                />
                <Text
                  style={{
                    ...TextStyle.smallRegular,
                    color: Palette.neutral40,
                  }}
                >
                  By Niki Samantha
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </CardContainer>
  );
};

export default Trending;

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
  durationContainer: {
    ...Style.containerCenter,
    backgroundColor: "#30303030",
    borderRadius: 8,
    position: "absolute",
    bottom: 8,
    right: 8,
    paddingHorizontal: 8,
    height: 26,
  },
  playContainer: {
    width: 48,
    height: 48,
    overflow: "hidden",
    borderRadius: 100,
    position: "absolute",
  },
});
