import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import { responsiveWidth } from "react-native-responsive-dimensions";
import Style from "src/styles/Style";
import { placeholder } from "src/assets";
import { BlurView } from "expo-blur";
import StarSVG from "src/assets/AppIcon/star";
import { Palette } from "src/styles/Palette";
import { TextStyle } from "src/styles/fonts";
import BookmarkSVG from "src/assets/AppIcon/bookmark";
import PlaySVG from "src/assets/AppIcon/play";
import ThreeDotsHorizontalSVG from "src/assets/AppIcon/threeDotsHorizontal";
import VideoModal from "./Modal/VideoModal";

interface Props {
  horizontal?: boolean;
  onPress?: () => void;
}

const VideoCard: React.FC<Props> = ({ horizontal, onPress }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Pressable
        style={{ width: horizontal ? responsiveWidth(70) : "100%", gap: 12 }}
        onPress={onPress}
      >
        <View
          style={{
            position: "relative",
            ...Style.containerCenter,
            height: 180,
            borderRadius: 15,
            overflow: "hidden",
          }}
        >
          <Image
            source={placeholder.trendingMeal}
            style={{ width: "100%", height: "100%" }}
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
          <Pressable
            style={styles.playContainer}
            onPress={() => setVisible(true)}
          >
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
      </Pressable>
      {/* <VideoModal visible={visible} onClose={() => setVisible(false)} /> */}
    </>
  );
};

export default VideoCard;

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
    overflow: "hidden",
  },
  playContainer: {
    width: 48,
    height: 48,
    overflow: "hidden",
    borderRadius: 100,
    position: "absolute",
  },
});
