import { View, Text, Modal, Pressable } from "react-native";
import React from "react";
import { useVideoPlayer, VideoView } from "expo-video";
import { BlurView } from "expo-blur";
import PlusSVG from "src/assets/AppIcon/plus";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { Palette } from "src/styles/Palette";
import Style from "src/styles/Style";

interface Props {
  visible: boolean;
  onClose: () => void;
}

const videoSource =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

const VideoModal: React.FC<Props> = ({ visible, onClose }) => {
  const player = useVideoPlayer(videoSource, (player) => {
    player.play();
  });

  return (
    <Modal
      visible={visible}
      onRequestClose={onClose}
      animationType="fade"
      transparent
    >
      <BlurView
        intensity={50}
        tint="dark"
        style={{ flex: 1, backgroundColor: "#30303030" }}
      >
        <Pressable
          style={{
            width: 32,
            height: 32,
            borderRadius: 100,
            backgroundColor: Palette.white,
            ...Style.containerCenter,
            position: "absolute",
            top: responsiveHeight(5),
            right: 20,
          }}
          onPress={onClose}
        >
          <View
            style={{
              transform: [{ rotate: "45deg" }],
            }}
          >
            <PlusSVG />
          </View>
        </Pressable>
        <VideoView player={player} style={{ width: "100%", height: "100%" }} />
      </BlurView>
    </Modal>
  );
};

export default VideoModal;
