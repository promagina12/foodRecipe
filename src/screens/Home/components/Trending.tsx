import { FlatList } from "react-native";
import React from "react";
import CardContainer from "./CardContainer";
import VideoCard from "src/components/VideoCard";

const Trending = () => {
  return (
    <CardContainer title="Trending now 🔥">
      <FlatList
        data={Array.from({ length: 10 })}
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 20,
          gap: 16,
        }}
        showsHorizontalScrollIndicator={false}
        renderItem={() => <VideoCard horizontal />}
      />
    </CardContainer>
  );
};

export default Trending;
