import React, {useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { Rating } from "react-native-ratings";
import colors from "../helpers/colors";
import spacings from "../helpers/spacings";
import customStyles from "../helpers/styles";
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from "@expo/vector-icons";
const LikedItem = ({ item, onPress, likedItemDetails}) => {
  return (
    <View style={{ marginHorizontal: 20 }}>
      <TouchableOpacity style={styles.card} onPress={likedItemDetails}>
        <View style={styles.imageWrap}>
          <Image
            source={
              item.img_url !== "Default"
                ? { uri: item.img_url }
                : require("../../assets/images/placeholder.png")
            }
            style={styles.image}
          ></Image>
        </View>
        <View style={styles.details}>
          <Text numberOfLines={1} style={styles.title}>
            {item.name}
          </Text>
          <View style={styles.rating}>
            <View style={styles.address}>
              <Entypo name="location-pin" size={18} color="#FA5D5D" />
              <Text>{item.address}</Text>
            </View>
            <Rating
              startingValue={parseFloat(item.rating)}
              readonly={true}
              imageSize={15}
            />
          </View>
        </View>
        <TouchableOpacity onPress={onPress.bind(this, item._id)}>
            <EvilIcons name="trash" size={30} color={colors.primary} />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

export default LikedItem;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 110,
    marginBottom: spacings.s16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.bg_white,
    padding: spacings.s8,
    borderRadius: 15,
    ...customStyles.shadow_1,
  },
  details: {
    alignItems: "flex-start",
    justifyContent: 'center',
    flex: 1,
    height: "100%",
    paddingHorizontal: spacings.s12,
  },
  imageWrap: {
    height: 95,
    width: 120,
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  title: {
    color: "#000",
    textAlign: "center",
    fontSize: 19,
    fontWeight: "bold",
  },

  rating: {
    width: "100%",
    alignItems: "flex-start",
  },
  address: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacings.s5,
  },
});
