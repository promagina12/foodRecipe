import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Palette } from "src/styles/Palette";
import NotificationHeader from "./components/NotificationHeader";
import FileSVG from "src/assets/AppIcon/file";
import { TextStyle } from "src/styles/fonts";
import Style from "src/styles/Style";
import NotifCard from "./components/NotifCard";

const Notification = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Palette.white, gap: 12 }}>
      <NotificationHeader />
      <View style={{ paddingHorizontal: 16, gap: 28 }}>
        <View style={{ gap: 12 }}>
          <Text
            style={{
              ...TextStyle.labelBold,
              color: Palette.neutral90,
            }}
          >
            Today
          </Text>
          <View style={{ paddingHorizontal: 4, gap: 12 }}>
            <NotifCard />
            <NotifCard />
          </View>
        </View>
        <View style={{ gap: 12 }}>
          <Text
            style={{
              ...TextStyle.labelBold,
              color: Palette.neutral90,
            }}
          >
            Yesterday
          </Text>
          <View style={{ paddingHorizontal: 4, gap: 12 }}>
            <NotifCard />
          </View>
        </View>
      </View>
      <Text
        style={{
          ...TextStyle.tinyRegular,
          color: Palette.neutral40,
          textAlign: "center",
          marginTop: 4,
        }}
      >
        You’re all set!
      </Text>
    </SafeAreaView>
  );
};

export default Notification;
