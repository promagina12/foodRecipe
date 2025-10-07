import {
  View,
  Text,
  TextInput,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import React, { useState } from "react";
import Style from "src/styles/Style";
import { Palette } from "src/styles/Palette";
import { TextStyle as textStyle } from "src/styles/fonts";

interface Props {
  placeholder?: string;
  value?: string | undefined;
  onChangeText?: ((text: string) => void) | undefined;
  textInputStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

const Input: React.FC<Props> = ({
  placeholder,
  value,
  onChangeText,
  textInputStyle,
  containerStyle,
}) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  return (
    <View
      style={[
        {
          paddingHorizontal: 16,
          borderWidth: 1,
          borderColor: isFocus ? Palette.primary50 : Palette.neutral20,
          borderRadius: 10,
        },
        containerStyle,
      ]}
    >
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={Palette.neutral30}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        textAlignVertical="center"
        style={[
          {
            ...textStyle.labelRegular,
            color: Palette.neutral90,
          },
          textInputStyle,
        ]}
      />
    </View>
  );
};

export default Input;
