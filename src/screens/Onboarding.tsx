import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { image } from "src/assets";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import StarSVG from "src/assets/AppIcon/star";
import { Palette } from "src/styles/Palette";
import { TextStyle } from "src/styles/fonts";
import { responsiveHeight } from "react-native-responsive-dimensions";
import Button from "src/components/Button";
import { ROUTES } from "src/navigation/Routes";
import { useAppDispatch } from "src/store";
import { getAllRecipe, getAllTags } from "src/store/slices/recipes/thunk";
import { getAllUsers, getUserById } from "src/store/slices/users/thunk";
import { navigate } from "src/navigation/NavigationService";

const currentUserID: any = 152;

const Onboarding = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    try {
      dispatch(getAllRecipe());
      dispatch(getAllTags());
      dispatch(getAllUsers());
      dispatch(getUserById(currentUserID));
    } catch (error) {
      console.log("Onboarding ERROR: ", error);
    }
  }, [dispatch]);

  return (
    <ImageBackground source={image.onboadingBG} style={{ flex: 1 }}>
      <View style={styles.overlay}>
        <LinearGradient
          colors={["transparent", "#000000"]}
          locations={[0, 1]}
          style={{ flex: 1 }}
        />
      </View>
      <SafeAreaView style={{ flex: 1, paddingBottom: responsiveHeight(10) }}>
        <View style={styles.headerContainer}>
          <View style={{ marginTop: 4 }}>
            <StarSVG size={16} color={Palette.white} />
          </View>
          <Text style={TextStyle.paragraphBold}>
            60k+{"  "}
            <Text style={TextStyle.paragraphRegular}>Premium recipes</Text>
          </Text>
        </View>
        <View style={styles.contentContainer}>
          <View>
            <Text
              style={{
                ...TextStyle.headingBold,
                textAlign: "center",
              }}
            >
              Let’s{"\n"}Cooking
            </Text>
            <Text style={TextStyle.paragraphRegular}>
              Find best recipes for cooking
            </Text>
          </View>
          <Button
            title="Start cooking "
            onPress={() => navigate(ROUTES.BottomStack)}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  overlay: {
    height: "50%",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  headerContainer: {
    flexDirection: "row",
    gap: 8,
    alignSelf: "center",
    paddingTop: 12,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 40,
  },
});
