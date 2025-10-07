import { View, Text, Pressable } from "react-native";
import React from "react";
import ArrowLeftSVG from "src/assets/AppIcon/arrowLeft";
import ThreeDotsHorizontalSVG from "src/assets/AppIcon/threeDotsHorizontal";
import Style from "src/styles/Style";
import { TextStyle } from "src/styles/fonts";
import { Palette } from "src/styles/Palette";
import { goBack } from "src/navigation/NavigationService";

interface Props {
  title: string;
}

const NavigationHeader: React.FC<Props> = ({ title }) => {
  return (
    <View style={{ paddingHorizontal: 20, gap: 16, paddingVertical: 12 }}>
      <View
        style={{
          ...Style.containerSpaceBetween,
        }}
      >
        <Pressable onPress={goBack}>
          <ArrowLeftSVG />
        </Pressable>
        <Pressable>
          <ThreeDotsHorizontalSVG />
        </Pressable>
      </View>
      <Text style={{ ...TextStyle.h4Bold, color: Palette.neutral90 }}>
        {title}
      </Text>
    </View>
  );
};

export default NavigationHeader;
