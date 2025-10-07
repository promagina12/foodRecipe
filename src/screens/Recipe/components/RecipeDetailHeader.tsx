import { View, Text, Image } from "react-native";
import React from "react";
import Style from "src/styles/Style";
import { placeholder } from "src/assets";
import { Palette } from "src/styles/Palette";
import StarSVG from "src/assets/AppIcon/star";
import { TextStyle } from "src/styles/fonts";
import LocationSVG from "src/assets/AppIcon/location";
import Button from "src/components/Button";

const RecipeDetailHeader = () => {
  return (
    <View style={{ gap: 16 }}>
      <View style={{ ...Style.containerCenter }}>
        <Image
          source={placeholder.trendingMeal}
          style={{ width: "100%", height: 200, borderRadius: 10 }}
        />
      </View>
      <View style={{ ...Style.containerRow, gap: 7 }}>
        <View style={{ flexDirection: "row", gap: 4 }}>
          <View style={{ marginTop: 3 }}>
            <StarSVG size={16} color={Palette.rating100} />
          </View>
          <Text
            style={{
              ...TextStyle.labelBold,
              color: Palette.neutral90,
            }}
          >
            4,5
          </Text>
        </View>
        <Text
          style={{
            ...TextStyle.labelRegular,
            color: Palette.neutral40,
          }}
        >
          (300 Reviews)
        </Text>
      </View>
      <View
        style={{
          ...Style.containerSpaceBetween,
        }}
      >
        <View style={{ ...Style.containerRow, gap: 10 }}>
          <Image
            source={placeholder.profile}
            style={{ width: 41, height: 41, borderRadius: 100 }}
          />
          <View>
            <Text
              style={{
                ...TextStyle.paragraphBold,
                color: Palette.neutral100,
              }}
            >
              Roberta Anny
            </Text>
            <View
              style={{
                ...Style.containerRow,
                gap: 4,
              }}
            >
              <LocationSVG size={16} color={Palette.primary50} />
              <Text
                style={{
                  ...TextStyle.labelRegular,
                  color: Palette.neutral40,
                }}
              >
                Bali, Indonesia
              </Text>
            </View>
          </View>
        </View>
        <Button small title="Follow" hideIcon />
      </View>
    </View>
  );
};

export default RecipeDetailHeader;
