import { View, Text } from "react-native";
import React from "react";
import { Palette } from "src/styles/Palette";
import Style from "src/styles/Style";
import FileSVG from "src/assets/AppIcon/file";
import { TextStyle } from "src/styles/fonts";

const NotifCard = () => {
  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 12,
        backgroundColor: Palette.neutral10,
        flexDirection: "row",
        gap: 12,
      }}
    >
      <View
        style={{
          width: 28,
          height: 28,
          backgroundColor: Palette.green10,
          ...Style.containerCenter,
          borderRadius: 10,
        }}
      >
        <FileSVG size={16} color={Palette.green100} />
      </View>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            ...TextStyle.smallBold,
            color: Palette.neutral90,
          }}
        >
          New recipe!
        </Text>
        <Text
          style={{
            ...TextStyle.smallRegular,
            color: Palette.neutral40,
          }}
        >
          Far far away, behind the word mountains, far from the countries.
        </Text>
      </View>
      <View
        style={{
          width: 6,
          height: 6,
          borderRadius: 10,
          backgroundColor: Palette.primary50,
        }}
      />
    </View>
  );
};

export default NotifCard;
