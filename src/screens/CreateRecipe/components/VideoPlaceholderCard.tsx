import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import Style from "src/styles/Style";
import PlaySVG from "src/assets/AppIcon/play";
import { Palette } from "src/styles/Palette";
import PenSVG from "src/assets/AppIcon/pen";

interface Props {
  img: string;
}

const VideoPlaceholderCard: React.FC<Props> = ({ img }) => {
  return (
    <View style={styles.videoContainer}>
      <Image source={{ uri: img }} style={{ width: "100%", height: "100%" }} />
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
      <Pressable style={styles.editContainer}>
        <PenSVG color={Palette.primary50} size={20} />
      </Pressable>
    </View>
  );
};

export default VideoPlaceholderCard;

const styles = StyleSheet.create({
  videoContainer: {
    height: 200,
    borderRadius: 10,
    overflow: "hidden",
    ...Style.containerCenter,
  },
  playContainer: {
    width: 48,
    height: 48,
    overflow: "hidden",
    borderRadius: 100,
    position: "absolute",
  },
  editContainer: {
    ...Style.containerCenter,
    width: 32,
    height: 32,
    borderRadius: 100,
    backgroundColor: Palette.white,
    position: "absolute",
    top: 8,
    right: 8,
  },
});
