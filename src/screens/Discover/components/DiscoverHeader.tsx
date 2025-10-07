import { View, Text } from "react-native";
import React from "react";
import CustomSegmentedTab from "src/components/CustomSegmentedTab";
import { TextStyle } from "src/styles/fonts";
import { Palette } from "src/styles/Palette";

interface Props {
  onPress?: (value: string) => void | undefined;
}

const DiscoverHeader: React.FC<Props> = ({ onPress }) => {
  return (
    <View style={{ paddingHorizontal: 20, gap: 20, paddingTop: 12 }}>
      <Text
        style={{
          ...TextStyle.h4Bold,
          color: Palette.neutral100,
        }}
      >
        Saved recipes
      </Text>
      <CustomSegmentedTab
        data={["Video", "Recipe"]}
        onPress={(value) => onPress?.(value)}
      />
    </View>
  );
};

export default DiscoverHeader;
