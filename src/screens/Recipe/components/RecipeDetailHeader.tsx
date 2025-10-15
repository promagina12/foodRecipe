import { View, Text, Image, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import Style from "src/styles/Style";
import { Palette } from "src/styles/Palette";
import StarSVG from "src/assets/AppIcon/star";
import { TextStyle } from "src/styles/fonts";
import LocationSVG from "src/assets/AppIcon/location";
import Button from "src/components/Button";
import { useAppDispatch } from "src/store";
import { IUser } from "src/interface/user";
import { getUserById } from "src/store/slices/users/thunk";
import { isNull } from "lodash";

interface Props {
  img?: string;
  rating?: number;
  userId: any;
  reviewCount?: number;
}

const RecipeDetailHeader: React.FC<Props> = ({
  img,
  rating,
  reviewCount,
  userId,
}) => {
  const dispatch = useAppDispatch();
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      if (!isNull(userId)) {
        setIsLoading(true);
        const response = await dispatch(getUserById(userId));

        if (response.payload) {
          setUser(response.payload);
        }
        setIsLoading(false);
      }
    })();
  }, [dispatch]);

  return (
    <View style={{ gap: 16 }}>
      <View style={{ ...Style.containerCenter }}>
        <Image
          source={{ uri: img }}
          style={{ width: "100%", height: 200, borderRadius: 10 }}
        />
      </View>
      <View style={{ ...Style.containerRow, gap: 7 }}>
        <View style={{ flexDirection: "row", gap: 4 }}>
          <View style={{ marginTop: 3 }}>
            <StarSVG size={16} color={Palette.rating100} />
          </View>
          <Text
            style={{
              ...TextStyle.labelBold,
              color: Palette.neutral90,
            }}
          >
            {rating}
          </Text>
        </View>
        <Text
          style={{
            ...TextStyle.labelRegular,
            color: Palette.neutral40,
          }}
        >
          ({reviewCount} Reviews)
        </Text>
      </View>
      <View
        style={{
          ...Style.containerSpaceBetween,
        }}
      >
        {isLoading ? (
          <View style={{ ...Style.containerCenter, flex: 1 }}>
            <ActivityIndicator color={Palette.primary50} />
          </View>
        ) : (
          <View style={{ ...Style.containerRow, gap: 10 }}>
            <Image
              source={{ uri: user?.image }}
              style={{ width: 41, height: 41, borderRadius: 100 }}
            />
            <View>
              <Text
                style={{
                  ...TextStyle.paragraphBold,
                  color: Palette.neutral100,
                }}
              >
                {user?.firstName} {user?.lastName}
              </Text>
              <View
                style={{
                  ...Style.containerRow,
                  gap: 4,
                }}
              >
                <LocationSVG size={16} color={Palette.primary50} />
                <Text
                  style={{
                    ...TextStyle.labelRegular,
                    color: Palette.neutral40,
                  }}
                >
                  {user?.address.city}, {user?.address.country}
                </Text>
              </View>
            </View>
          </View>
        )}
        <Button small title="Follow" hideIcon />
      </View>
    </View>
  );
};

export default RecipeDetailHeader;
