import { View, TextInput } from "react-native";
import React, { useState } from "react";
import SearchSVG from "src/assets/AppIcon/search";
import { Palette } from "src/styles/Palette";
import { TextStyle } from "src/styles/fonts";
import Style from "src/styles/Style";

const SearchBar = () => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  return (
    <View
      style={{
        ...Style.containerRow,
        gap: 12,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: isFocus ? Palette.primary50 : Palette.neutral20,
      }}
    >
      <SearchSVG color={Palette.neutral20} />
      <TextInput
        style={{
          flex: 1,
          ...TextStyle.labelRegular,
          color: Palette.neutral90,
        }}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        placeholderTextColor={Palette.neutral30}
        textAlignVertical="center"
        placeholder="Search recipes"
      />
    </View>
  );
};

export default SearchBar;
