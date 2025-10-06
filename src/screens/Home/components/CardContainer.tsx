import { View, Text, Pressable } from "react-native";
import React from "react";
import ArrowRightSVG from "src/assets/AppIcon/arrowRight";
import Style from "src/styles/Style";
import { TextStyle } from "src/styles/fonts";
import { Palette } from "src/styles/Palette";

interface Props {
  children?: React.ReactNode;
  hideSeeAll?: boolean;
  title: string;
  onPressSeeAll?: () => void;
}

const CardContainer: React.FC<Props> = ({
  title,
  hideSeeAll,
  onPressSeeAll,
  children,
}) => {
  return (
    <View style={{ gap: 16 }}>
      <View
        style={{
          ...Style.containerSpaceBetween,
          paddingHorizontal: 20,
        }}
      >
        <Text
          style={{
            ...TextStyle.h5Bold,
            color: Palette.neutral90,
          }}
        >
          {title}
        </Text>
        {!hideSeeAll && (
          <Pressable
            style={{
              flexDirection: "row",
              gap: 4,
            }}
            onPress={onPressSeeAll}
          >
            <Text
              style={{
                ...TextStyle.labelBold,
                color: Palette.primary50,
              }}
            >
              See all
            </Text>
            <View>
              <ArrowRightSVG size={20} color={Palette.primary50} />
            </View>
          </Pressable>
        )}
      </View>
      <View>{children}</View>
    </View>
  );
};

export default CardContainer;
