import { Text, ViewStyle, TextStyle, StyleProp, Pressable } from "react-native";
import React from "react";
import { ButtonTypes } from "src/types/types";
import ArrowRightSVG from "src/assets/AppIcon/arrowRight";
import { Palette } from "src/styles/Palette";
import Style from "src/styles/Style";
import { TextStyle as textStyle } from "src/styles/fonts";

interface ButtonProps {
  title?: string;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  hideIcon?: boolean;
  small?: boolean;
  type?: string;
  iconColor?: string;
  onPress?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  title,
  containerStyle,
  titleStyle,
  hideIcon,
  small,
  type = "default",
  iconColor = Palette.white,
  onPress,
}) => {
  const backgroundColor =
    type === ButtonTypes.secondary
      ? Palette.white
      : type === ButtonTypes.disable
      ? Palette.neutral20
      : Palette.primary50;

  return (
    <Pressable
      style={[
        containerStyle,
        title
          ? {
              ...Style.containerRow,
              gap: 8,
              backgroundColor,
              paddingHorizontal: small ? 16 : 32,
              height: small ? 36 : 54,
              borderRadius: small ? 8 : 10,
            }
          : {
              width: small ? 36 : 54,
              height: small ? 36 : 54,
              borderRadius: 10,
              backgroundColor,
              ...Style.containerCenter,
            },
      ]}
      onPress={onPress}
    >
      {title && (
        <Text
          style={[
            small ? textStyle.labelBold : textStyle.paragraphBold,
            titleStyle,
          ]}
        >
          {title}
        </Text>
      )}
      {!hideIcon && <ArrowRightSVG color={iconColor} size={20} />}
    </Pressable>
  );
};

export default Button;
