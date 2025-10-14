import { Text, FlatList, Pressable, Image } from "react-native";
import React from "react";
import CardContainer from "./CardContainer";
import Style from "src/styles/Style";
import { TextStyle } from "src/styles/fonts";
import { Palette } from "src/styles/Palette";
import useUsers from "src/hooks/useUsers";

const PopularCreator = () => {
  const { users } = useUsers();

  return (
    <CardContainer title="Popular creators">
      <FlatList
        data={users}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          gap: 16,
        }}
        renderItem={({ item }) => (
          <Pressable style={{ width: 75, ...Style.containerCenter, gap: 8 }}>
            <Image
              source={{ uri: item.image }}
              style={{ width: "100%", height: 75, borderRadius: 100 }}
            />
            <Text
              style={{
                ...TextStyle.smallBold,
                color: Palette.neutral90,
                textAlign: "center",
              }}
            >
              {item.firstName} {item.lastName}
            </Text>
          </Pressable>
        )}
      />
    </CardContainer>
  );
};

export default PopularCreator;
