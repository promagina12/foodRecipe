import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { responsiveWidth } from "react-native-responsive-dimensions";
import Style from "src/styles/Style";
import { placeholder } from "src/assets";
import { BlurView } from "expo-blur";
import StarSVG from "src/assets/AppIcon/star";
import { Palette } from "src/styles/Palette";
import { TextStyle } from "src/styles/fonts";
import BookmarkSVG from "src/assets/AppIcon/bookmark";
import PlaySVG from "src/assets/AppIcon/play";
import ThreeDotsHorizontalSVG from "src/assets/AppIcon/threeDotsHorizontal";
import VideoModal from "./Modal/VideoModal";
import useUsers from "src/hooks/useUsers";
import { useAppDispatch } from "src/store";
import { getUserById } from "src/store/slices/users/thunk";
import { isNull } from "lodash";
import { IUser } from "src/interface/user";

interface Props {
  horizontal?: boolean;
  onPress?: () => void;
  img?: string;
  name?: string;
  rating?: number;
  userId: any;
}

const VideoCard: React.FC<Props> = ({
  horizontal,
  onPress,
  img,
  name,
  rating,
  userId,
}) => {
  const dispatch = useAppDispatch();
  const [user, setUser] = useState<IUser | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    (async () => {
      if (!isNull(userId)) {
        const response = await dispatch(getUserById(userId));

        if (response.payload) {
          setUser(response.payload);
        }
      }
    })();
  }, [dispatch]);

  return (
    <>
      <Pressable
        style={{ width: horizontal ? responsiveWidth(70) : "100%", gap: 12 }}
        onPress={onPress}
      >
        <View
          style={{
            position: "relative",
            ...Style.containerCenter,
            height: 180,
            borderRadius: 15,
            overflow: "hidden",
          }}
        >
          <Image
            source={{ uri: img }}
            style={{ width: "100%", height: "100%" }}
          />
          <BlurView style={styles.ratingsContainer}>
            <StarSVG size={16} color={Palette.white} />
            <Text
              style={{
                ...TextStyle.labelBold,
                marginTop: 4,
              }}
            >
              {String(rating)}
            </Text>
          </BlurView>
          <Pressable style={styles.bookmarkContainer}>
            <BookmarkSVG color={Palette.neutral90} size={21} />
          </Pressable>
          <BlurView style={styles.durationContainer}>
            <Text
              style={{
                ...TextStyle.smallRegular,
              }}
            >
              15:10
            </Text>
          </BlurView>
          <Pressable
            style={styles.playContainer}
            onPress={() => setVisible(true)}
          >
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
        </View>
        <View style={{ gap: 8 }}>
          <View style={Style.containerSpaceBetween}>
            <Text
              style={{
                ...TextStyle.paragraphBold,
                color: Palette.neutral90,
              }}
            >
              {name}
            </Text>
            <Pressable>
              <ThreeDotsHorizontalSVG />
            </Pressable>
          </View>
          <View
            style={{
              ...Style.containerRow,
              gap: 8,
            }}
          >
            <Image
              source={{ uri: user?.image }}
              style={{ width: 32, height: 32, borderRadius: 100 }}
            />
            <Text
              style={{
                ...TextStyle.smallRegular,
                color: Palette.neutral40,
              }}
            >
              By {user?.firstName} {user?.lastName}
            </Text>
          </View>
        </View>
      </Pressable>
      {/* <VideoModal visible={visible} onClose={() => setVisible(false)} /> */}
    </>
  );
};

export default VideoCard;

const styles = StyleSheet.create({
  ratingsContainer: {
    position: "absolute",
    ...Style.containerRow,
    paddingHorizontal: 8,
    height: 28,
    backgroundColor: "#30303030",
    borderRadius: 8,
    left: 8,
    top: 8,
    overflow: "hidden",
  },
  bookmarkContainer: {
    ...Style.containerCenter,
    width: 32,
    height: 32,
    borderRadius: 100,
    backgroundColor: Palette.white,
    position: "absolute",
    top: 8,
    right: 8,
  },
  durationContainer: {
    ...Style.containerCenter,
    backgroundColor: "#30303030",
    borderRadius: 8,
    position: "absolute",
    bottom: 8,
    right: 8,
    paddingHorizontal: 8,
    height: 26,
    overflow: "hidden",
  },
  playContainer: {
    width: 48,
    height: 48,
    overflow: "hidden",
    borderRadius: 100,
    position: "absolute",
  },
});
