import { View, Text, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { placeholder } from "src/assets";
import { TextStyle } from "src/styles/fonts";
import { Palette } from "src/styles/Palette";
import { useAppDispatch } from "src/store";
import { isNull } from "lodash";
import { getUserById } from "src/store/slices/users/thunk";
import { IUser } from "src/interface/user";

interface Props {
  image: string;
  name: string;
  userId: any;
  onPress: () => void;
}

const RecentRecipeCard: React.FC<Props> = ({
  image,
  name,
  userId,
  onPress,
}) => {
  const dispatch = useAppDispatch();
  const [user, setUser] = useState<IUser | null>(null);

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
    <Pressable style={{ width: 124, gap: 8 }} onPress={onPress}>
      <Image
        source={image ? { uri: image } : placeholder.trendingMeal}
        style={{ width: "100%", height: 124, borderRadius: 10 }}
      />
      <View
        style={{
          gap: 4,
          paddingHorizontal: 4,
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            ...TextStyle.labelBold,
            color: Palette.neutral90,
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            ...TextStyle.tinyRegular,
            color: Palette.neutral40,
          }}
        >
          By {user?.firstName} {user?.lastName}
        </Text>
      </View>
    </Pressable>
  );
};

export default RecentRecipeCard;
