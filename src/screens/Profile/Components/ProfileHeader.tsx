import { View, Text, Pressable } from "react-native";
import React from "react";
import ThreeDotsHorizontalSVG from "src/assets/AppIcon/threeDotsHorizontal";
import Style from "src/styles/Style";
import { TextStyle } from "src/styles/fonts";
import { Palette } from "src/styles/Palette";

const ProfileHeader = () => {
  return (
    <View
      style={{
        ...Style.containerSpaceBetween,
        padding: 20,
      }}
    >
      <Text
        style={{
          ...TextStyle.h4Bold,
          color: Palette.neutral90,
        }}
      >
        My profile
      </Text>
      <Pressable>
        <ThreeDotsHorizontalSVG />
      </Pressable>
    </View>
  );
};

export default ProfileHeader;
