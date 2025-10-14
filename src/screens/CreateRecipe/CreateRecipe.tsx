import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Palette } from "src/styles/Palette";
import NavigationHeader from "src/components/NavigationHeader";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { placeholder } from "src/assets";
import { BlurView } from "expo-blur";
import Style from "src/styles/Style";
import PlaySVG from "src/assets/AppIcon/play";
import PenSVG from "src/assets/AppIcon/pen";
import Input from "src/components/Input";
import PrepCard from "./components/PrepCard";
import { TextStyle } from "src/styles/fonts";
import IngredientsCard from "./components/IngredientsCard";
import PlusSVG from "src/assets/AppIcon/plus";
import Button from "src/components/Button";
import DropShadow from "react-native-drop-shadow";
import VideoSVG from "src/assets/AppIcon/videoIcon";
import * as ImagePicker from "expo-image-picker";
import RecipesService from "src/services/Recipes";

const CreateRecipe = () => {
  const [ingredients, setIngredients] = useState([]);
  const [img, setImg] = useState<any>(null);
  const [name, setName] = useState<string>("");
  const [serves, setServes] = useState<string>("");
  const [cookTime, setCookTime] = useState<string>("");

  console.log("name: ", name);

  const onPressAddIngredients = () => {
    setIngredients((prev) => [...prev, { id: prev.length }]);
  };

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
          <View style={styles.videoContainer}>
            <Image
              source={{ uri: img }}
              style={{ width: "100%", height: "100%" }}
            />
            <Pressable style={styles.playContainer}>
              <BlurView
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#30303030",
                  ...Style.containerCenter,
                }}
              >
                <PlaySVG color={Palette.white} />
              </BlurView>
            </Pressable>
            <Pressable style={styles.editContainer}>
              <PenSVG color={Palette.primary50} size={20} />
            </Pressable>
          </View>
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
        <View style={{ marginTop: 24, gap: 16 }}>
          <Text
            style={{
              ...TextStyle.h5Bold,
              color: Palette.neutral100,
            }}
          >
            Ingredients
          </Text>
          {ingredients.map((item, index) => (
            <IngredientsCard key={index} />
          ))}
          <Pressable
            style={{
              flexDirection: "row",
              gap: 4,
            }}
            onPress={onPressAddIngredients}
          >
            <PlusSVG />
            <Text
              style={{
                ...TextStyle.paragraphBold,
                color: Palette.neutral90,
              }}
            >
              Add new Ingredient
            </Text>
          </Pressable>
        </View>
      </ScrollView>
      <DropShadow
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.25,
          shadowRadius: 3,
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <View
          style={{
            paddingHorizontal: 20,
            paddingTop: 16,
            paddingBottom: responsiveHeight(4),
            backgroundColor: Palette.white,
          }}
        >
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
  videoContainer: {
    height: 200,
    borderRadius: 10,
    overflow: "hidden",
    ...Style.containerCenter,
  },
  playContainer: {
    width: 48,
    height: 48,
    overflow: "hidden",
    borderRadius: 100,
    position: "absolute",
  },
  editContainer: {
    ...Style.containerCenter,
    width: 32,
    height: 32,
    borderRadius: 100,
    backgroundColor: Palette.white,
    position: "absolute",
    top: 8,
    right: 8,
  },
  emptyVideoContainer: {
    height: 200,
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: "dashed",
    ...Style.containerCenter,
  },
});
