import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ROUTES } from "./Routes";
import Home from "src/screens/Home/Home";
import Discover from "src/screens/Discover/Discover";
import Notification from "src/screens/Notification/Notification";
import Profile from "src/screens/Profile/Profile";
import {
  CurvedBottomBar,
  CurvedBottomBarExpo,
  ICurvedBottomBarRef,
} from "react-native-curved-bottom-bar";
import PlusSVG from "src/assets/AppIcon/plus";
import HomeSVG from "src/assets/AppIcon/home";
import BookmarkSVG from "src/assets/AppIcon/bookmark";
import BellSVG from "src/assets/AppIcon/bell";
import PersonSVG from "src/assets/AppIcon/person";
import HomeActiveSVG from "src/assets/AppIcon/homeActive";
import BookmarkActiveSVG from "src/assets/AppIcon/bookmarkActive";
import BellActiveSVG from "src/assets/AppIcon/bellActive";
import PersonActiveSVG from "src/assets/AppIcon/personActive";
import { Palette } from "src/styles/Palette";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { navigate } from "./NavigationService";

const BottomTab = createBottomTabNavigator();

const BottomStack = () => {
  const ref = useRef<ICurvedBottomBarRef>(null);
  const { bottom } = useSafeAreaInsets();

  const _renderIcon = (routeName: string, selectedTab: string) => {
    switch (routeName) {
      case ROUTES.Home:
        return selectedTab === routeName ? <HomeActiveSVG /> : <HomeSVG />;
        break;
      case ROUTES.Discover:
        return selectedTab === routeName ? (
          <BookmarkActiveSVG />
        ) : (
          <BookmarkSVG />
        );
        break;
      case ROUTES.Notification:
        return selectedTab === routeName ? <BellActiveSVG /> : <BellSVG />;
        break;
      case ROUTES.Profile:
        return selectedTab === routeName ? <PersonActiveSVG /> : <PersonSVG />;
        break;
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: Palette.white }}>
      <CurvedBottomBarExpo.Navigator
        shadowStyle={styles.shadow}
        screenOptions={{
          headerShown: false,
        }}
        type={"DOWN"}
        circlePosition={"CENTER"}
        initialRouteName={ROUTES.Home}
        bgColor="white"
        height={80}
        ref={ref}
        // borderColor="gray"
        // borderWidth={0.5}
        renderCircle={() => (
          <Pressable
            style={styles.btnCircle}
            onPress={() => navigate(ROUTES.CreateRecipe)}
          >
            <PlusSVG color={Palette.white} />
          </Pressable>
        )}
        tabBar={({ routeName, selectedTab, navigate }) => {
          return (
            <Pressable
              onPress={() => navigate(routeName)}
              style={styles.tabbarIcon}
            >
              {_renderIcon(routeName, selectedTab)}
            </Pressable>
          );
        }}
      >
        <CurvedBottomBarExpo.Screen
          position="LEFT"
          name={ROUTES.Home}
          component={Home}
        />
        <CurvedBottomBarExpo.Screen
          position="LEFT"
          name={ROUTES.Discover}
          component={Discover}
        />
        <CurvedBottomBarExpo.Screen
          position="RIGHT"
          name={ROUTES.Notification}
          component={Notification}
        />
        <CurvedBottomBarExpo.Screen
          position="RIGHT"
          name={ROUTES.Profile}
          component={Profile}
        />
      </CurvedBottomBarExpo.Navigator>
    </View>
  );
};

export default BottomStack;

const styles = StyleSheet.create({
  btnCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Palette.primary50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
    bottom: 28,
  },
  tabbarIcon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 25,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
  },
});
