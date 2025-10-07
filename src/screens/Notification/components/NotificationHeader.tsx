import { View, Text, Pressable } from "react-native";
import React from "react";
import FilterSVG from "src/assets/AppIcon/filter";
import Style from "src/styles/Style";
import { TextStyle } from "src/styles/fonts";
import { Palette } from "src/styles/Palette";
import CustomSegmentedTab from "src/components/CustomSegmentedTab";

const NotificationHeader = () => {
  return (
    <View style={{ gap: 20, paddingTop: 20, paddingHorizontal: 20 }}>
      <View
        style={{
          ...Style.containerSpaceBetween,
        }}
      >
        <Text
          style={{
            ...TextStyle.h4Bold,
            color: Palette.neutral100,
          }}
        >
          Notifications
        </Text>
        <Pressable>
          <FilterSVG />
        </Pressable>
      </View>
      <CustomSegmentedTab data={["All", "Unread", "Read"]} spacing={7} />
    </View>
  );
};

export default NotificationHeader;
