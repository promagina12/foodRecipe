import { View, Text, Image } from "react-native";
import React from "react";
import { placeholder } from "src/assets";
import Button from "src/components/Button";
import { ButtonTypes } from "src/types/types";
import Style from "src/styles/Style";
import { TextStyle } from "src/styles/fonts";
import { Palette } from "src/styles/Palette";
import { responsiveWidth } from "react-native-responsive-dimensions";
import CustomSegmentedTab from "src/components/CustomSegmentedTab";

interface Props {
  img?: string;
  name: string;
  recipeCount: number;
  videosCount: number;
}

const ProfileInfo: React.FC<Props> = ({
  img,
  name,
  recipeCount,
  videosCount,
}) => {
  const FAKE_DATA = [
    {
      title: "Recipe",
      value: recipeCount,
    },
    {
      title: "Videos",
      value: videosCount,
    },
    {
      title: "Followers",
      value: "14K",
    },
    {
      title: "Following",
      value: "120",
    },
  ];

  return (
    <View>
      <View
        style={{
          paddingHorizontal: 20,
          gap: 16,
          paddingBottom: 21,
          borderBottomWidth: 1,
          borderColor: Palette.neutral20,
        }}
      >
        <View style={{ ...Style.containerSpaceBetween }}>
          <Image
            source={{ uri: img }}
            style={{ width: 100, height: 100, borderRadius: 100 }}
          />
          <Button
            title="Edit profile"
            type={ButtonTypes.secondary}
            hideIcon
            small
          />
        </View>
        <View style={{ gap: 20 }}>
          <View style={{ gap: 12, width: responsiveWidth(70) }}>
            <Text
              style={{
                ...TextStyle.h5Bold,
                color: Palette.neutral90,
              }}
            >
              {name}
            </Text>
            <Text
              style={{
                ...TextStyle.labelRegular,
                color: Palette.neutral40,
              }}
            >
              Hello world I’m {name}, I’m from Italy 🇮🇹 I love cooking so much!
            </Text>
          </View>
          <View style={{ ...Style.containerSpaceBetween, gap: 10 }}>
            {FAKE_DATA.map((item, index) => (
              <View
                key={index}
                style={{
                  ...Style.containerCenter,
                }}
              >
                <Text
                  style={{
                    ...TextStyle.smallRegular,
                    color: Palette.neutral40,
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    ...TextStyle.h5Bold,
                    color: Palette.neutral90,
                  }}
                >
                  {item.value}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <CustomSegmentedTab data={["Video", "Recipe"]} />
      </View>
    </View>
  );
};

export default ProfileInfo;
