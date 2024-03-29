import React, { useContext } from "react";
import Context from "../context/Context";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../helpers/colors";
import spacings from "../helpers/spacings";
import { Octicons } from "@expo/vector-icons";

const SearchArea = ({ onEnd, search, setSearch, setShowModal }) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchArea}>
        <TextInput
          autoCorrect={false}
          onEndEditing={onEnd}
          style={styles.input}
          value={search}
          onChangeText={(value) => {
            setSearch(value);
          }}
          placeholder="Search a place..."
          placeholderTextColor="#666"
        />
        <TouchableOpacity onPress={onEnd} style={styles.icon}>
          <AntDesign name="search1" size={20} color={"#666"} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => setShowModal(true)}>
        <View style={styles.filter}>
          <Octicons name="settings" size={20} color="black" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SearchArea;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: spacings.s20,
    paddingBottom: spacings.s10,
  },
  searchArea: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 40,
    backgroundColor: colors.light_gray,
    borderRadius: 10,
    paddingLeft: spacings.s20,
    paddingRight: spacings.s50,
    marginBottom: spacings.s10,
    position: "relative",
  },
  icon: {
    position: "absolute",
    right: spacings.s16,
  },
  input: {
    width: "100%",
    flex: 1,
    fontSize: 16,
  },
  filter: {
    height: 40,
    width: 40,
    borderRadius: 10,
    backgroundColor: colors.secondary,
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
