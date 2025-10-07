import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import Style from "src/styles/Style";
import { Palette } from "src/styles/Palette";
import { TextStyle } from "src/styles/fonts";

interface Props {
  data: string[];
  onPress?: ((value: string) => void) | undefined;
  spacing?: number;
}

const CustomSegmentedTab: React.FC<Props> = ({
  data,
  onPress,
  spacing = 15,
}) => {
  const [selected, setSelected] = useState<number>(0);

  return (
    <View
      style={{
        ...Style.containerRow,
        gap: spacing,
        paddingVertical: 12,
      }}
    >
      {data.map((item, index) => {
        const selectedItem = index === selected;

        return (
          <Pressable
            key={index}
            style={{
              flex: 1,
              ...Style.containerCenter,
              backgroundColor: selectedItem ? Palette.primary50 : Palette.trans,
              height: 34,
              borderRadius: 10,
            }}
            onPress={() => {
              setSelected(index);
              onPress?.(item);
            }}
          >
            <Text
              style={{
                ...TextStyle.smallBold,
                color: selectedItem ? Palette.white : Palette.primary30,
              }}
            >
              {item}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default CustomSegmentedTab;
