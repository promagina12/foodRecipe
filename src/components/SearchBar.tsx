import { View, Text, TextInput } from "react-native";
import React from "react";
import SearchSVG from "src/assets/AppIcon/search";
import { Palette } from "src/styles/Palette";
import { TextStyle } from "src/styles/fonts";
import Style from "src/styles/Style";

const SearchBar = () => {
  return (
    <View
      style={{
        ...Style.containerRow,
        gap: 12,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: Palette.neutral20,
      }}
    >
      <SearchSVG color={Palette.neutral20} />
      <TextInput
        style={{
          flex: 1,
          ...TextStyle.labelRegular,
        }}
        placeholderTextColor={Palette.neutral30}
        textAlignVertical="center"
        placeholder="Search recipes"
      />
    </View>
  );
};

export default SearchBar;
