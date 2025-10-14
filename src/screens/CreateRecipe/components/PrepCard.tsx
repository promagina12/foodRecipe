import { View, Text, TextInput } from "react-native";
import React from "react";
import UserSVG from "src/assets/AppIcon/user";
import { Palette } from "src/styles/Palette";
import { TextStyle } from "src/styles/fonts";
import ArrowRightSVG from "src/assets/AppIcon/arrowRight";
import Style from "src/styles/Style";
import ClockSVG from "src/assets/AppIcon/clock";

interface Props {
  cook?: boolean;
  value?: string;
  onChangeText?: ((text: string) => void) | undefined;
}

const PrepCard: React.FC<Props> = ({ cook, value, onChangeText }) => {
  return (
    <View
      style={{
        ...Style.containerSpaceBetween,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 12,
        backgroundColor: Palette.neutral10,
      }}
    >
      <View
        style={{
          ...Style.containerRow,
          gap: 16,
        }}
      >
        <View
          style={{
            width: 36,
            height: 36,
            backgroundColor: Palette.white,
            borderRadius: 10,
            ...Style.containerCenter,
          }}
        >
          {cook ? (
            <ClockSVG size={20} color={Palette.primary50} />
          ) : (
            <UserSVG size={20} color={Palette.primary50} />
          )}
        </View>
        <Text
          style={{
            ...TextStyle.paragraphBold,
            color: Palette.neutral90,
          }}
        >
          {cook ? "Cook time" : "Serves"}
        </Text>
      </View>
      <View
        style={{
          ...Style.containerRow,
          gap: 8,
        }}
      >
        <View style={Style.containerRow}>
          <TextInput
            placeholder="00"
            style={{
              ...TextStyle.labelRegular,
              color: Palette.neutral90,
              textAlign: "right",
            }}
            placeholderTextColor={Palette.neutral40}
            value={value}
            onChangeText={onChangeText}
          />
          {cook && (
            <Text
              style={{
                ...TextStyle.labelRegular,
                color: Palette.neutral40,
              }}
            >
              min
            </Text>
          )}
        </View>
        <ArrowRightSVG color={Palette.neutral100} />
      </View>
    </View>
  );
};

export default PrepCard;
