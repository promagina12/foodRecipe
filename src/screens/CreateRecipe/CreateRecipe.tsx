import { View, ScrollView, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Palette } from "src/styles/Palette";
import NavigationHeader from "src/components/NavigationHeader";
import { responsiveHeight } from "react-native-responsive-dimensions";
import Style from "src/styles/Style";
import Input from "src/components/Input";
import PrepCard from "./components/PrepCard";
import Button from "src/components/Button";
import DropShadow from "react-native-drop-shadow";
import VideoSVG from "src/assets/AppIcon/videoIcon";
import * as ImagePicker from "expo-image-picker";
import RecipesService from "src/services/Recipes";
import VideoPlaceholderCard from "./components/VideoPlaceholderCard";
import IngredientsContainer from "./components/IngredientsContainer";

const CreateRecipe = () => {
  const [img, setImg] = useState<any>(null);
  const [name, setName] = useState<string>("");
  const [serves, setServes] = useState<string>("");
  const [cookTime, setCookTime] = useState<string>("");

  const onPressSelectVideo = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImg(result.assets[0].uri);
    }
  };

  const onSubmit = async () => {
    try {
      const newRecipes = {
        name: name,
        cookTimeMinutes: cookTime,
        servings: serves,
      };

      const response = await RecipesService.createRecipe(newRecipes);

      console.log("response: ", response);
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Palette.white }}>
      <NavigationHeader title="Create recipe" />
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {img ? (
          <VideoPlaceholderCard img={img} />
        ) : (
          <Pressable
            style={styles.emptyVideoContainer}
            onPress={onPressSelectVideo}
          >
            <VideoSVG color={Palette.primary50} size={50} />
          </Pressable>
        )}
        <View style={{ marginTop: 20 }}>
          <Input
            placeholder="Recipe name"
            value={name}
            onChangeText={setName}
          />
        </View>
        <View style={{ gap: 12, marginTop: 16 }}>
          <PrepCard value={serves} onChangeText={setServes} />
          <PrepCard cook value={cookTime} onChangeText={setCookTime} />
        </View>
        <IngredientsContainer />
      </ScrollView>
      <DropShadow style={styles.dropShadow}>
        <View style={styles.buttonContainer}>
          <Button title="Save my recipes" hideIcon onPress={onSubmit} />
        </View>
      </DropShadow>
    </SafeAreaView>
  );
};

export default CreateRecipe;

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: responsiveHeight(20),
  },
  emptyVideoContainer: {
    height: 200,
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: "dashed",
    ...Style.containerCenter,
  },
  dropShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: responsiveHeight(4),
    backgroundColor: Palette.white,
  },
});
