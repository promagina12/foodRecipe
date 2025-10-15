import { View, Text, Image } from "react-native";
import React from "react";
import Style from "src/styles/Style";
import { Palette } from "src/styles/Palette";
import { icon } from "src/assets";
import { TextStyle } from "src/styles/fonts";

interface Props {
  label: string;
}

const IngredientsCard: React.FC<Props> = ({ label }) => {
  return (
    <View
      style={{
        ...Style.containerSpaceBetween,
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: Palette.neutral10,
        borderRadius: 12,
        gap: 10,
      }}
    >
      <View
        style={{
          ...Style.containerRow,
          gap: 16,
          flex: 1,
        }}
      >
        <View
          style={{
            ...Style.containerCenter,
            width: 52,
            height: 52,
            backgroundColor: Palette.white,
            borderRadius: 10,
          }}
        >
          <Image source={icon.noodleIcon} />
        </View>
        <Text
          style={{
            ...TextStyle.paragraphBold,
            color: Palette.neutral90,
            flex: 1,
          }}
        >
          {label}
        </Text>
      </View>
      <Text
        style={{
          ...TextStyle.labelRegular,
          color: Palette.neutral40,
        }}
      >
        200g
      </Text>
    </View>
  );
};

export default IngredientsCard;
