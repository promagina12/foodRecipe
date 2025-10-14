import { View, Text, FlatList, Pressable, Image } from "react-native";
import React, { useEffect, useState } from "react";
import CardContainer from "./CardContainer";
import { TextStyle } from "src/styles/fonts";
import { Palette } from "src/styles/Palette";
import Style from "src/styles/Style";
import { placeholder } from "src/assets";
import BookmarkSVG from "src/assets/AppIcon/bookmark";
import DropShadow from "react-native-drop-shadow";
import { useAppDispatch } from "src/store";
import useRecipes from "src/hooks/useRecipes";
import { getRecipesByTag } from "src/store/slices/recipes/thunk";

interface Props {
  tags: string[];
}

const Popular: React.FC<Props> = ({ tags }) => {
  const dispatch = useAppDispatch();
  const { tagRecipes } = useRecipes();
  const [selectedCategory, setSelectedCategory] = useState<any>(tags[0]);

  useEffect(() => {
    if (selectedCategory) {
      dispatch(getRecipesByTag(selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <CardContainer title="Popular category" hideSeeAll>
      <View style={{ gap: 20 }}>
        <FlatList
          data={tags}
          horizontal
          contentContainerStyle={{ paddingHorizontal: 20, gap: 8 }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <Pressable
              key={index}
              onPress={() => setSelectedCategory(item)}
              style={{
                paddingHorizontal: 12,
                height: 34,
                backgroundColor:
                  selectedCategory === item ? Palette.primary50 : Palette.trans,
                ...Style.containerCenter,
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  ...TextStyle.smallBold,
                  color:
                    selectedCategory === item
                      ? Palette.white
                      : Palette.primary30,
                }}
              >
                {item}
              </Text>
            </Pressable>
          )}
        />
        <FlatList
          data={tagRecipes}
          horizontal
          contentContainerStyle={{
            paddingHorizontal: 20,
            gap: 16,
            paddingTop: 60,
          }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={{ width: 160, ...Style.containerCenter }}>
              <DropShadow
                style={{
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 0 },
                  shadowOpacity: 0.25,
                  shadowRadius: 3,
                  position: "absolute",
                  zIndex: 1,
                  top: -55,
                }}
              >
                <Image
                  source={{ uri: item.image }}
                  style={{
                    width: 110,
                    height: 110,
                    borderRadius: 100,
                  }}
                />
              </DropShadow>
              <View
                style={{
                  backgroundColor: Palette.neutral10,
                  paddingHorizontal: 12,
                  paddingVertical: 12,
                  borderRadius: 12,
                  gap: 18,
                  paddingTop: 65,
                  flex: 1,
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    ...TextStyle.labelBold,
                    color: Palette.neutral90,
                    textAlign: "center",
                  }}
                >
                  {item.name}
                </Text>
                <View
                  style={{
                    ...Style.containerSpaceBetween,
                    alignItems: "flex-end",
                  }}
                >
                  <View style={{ gap: 4 }}>
                    <Text
                      style={{
                        ...TextStyle.smallRegular,
                        color: Palette.neutral30,
                      }}
                    >
                      Time
                    </Text>
                    <Text
                      style={{
                        ...TextStyle.smallBold,
                        color: Palette.neutral90,
                      }}
                    >
                      {item.cookTimeMinutes} Mins
                    </Text>
                  </View>
                  <Pressable
                    style={{
                      ...Style.containerCenter,
                      width: 24,
                      height: 24,
                      backgroundColor: Palette.white,
                      borderRadius: 100,
                    }}
                  >
                    <BookmarkSVG color={Palette.neutral90} size={16} />
                  </Pressable>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </CardContainer>
  );
};

export default Popular;
