import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Options from "../components/Options";

const DetailsScreen = ({ route }) => {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageX}
          source={require(`../assets/${item.image}`)}
        />
      </View>
      <View style={styles.textContainer}>
        <View style={{ flexDirection: "row", gap: 2, marginBottom: 5 }}>
          <AntDesign name="star" size={12} color="orange" />{" "}
          <Text style={styles.title}>{item.rating}</Text>
        </View>
        {/*  */}
        <View style={styles.titleContainer}>
          <Text style={{ fontSize: 26, fontWeight: 600, color: "#000" }}>
            {item.title}
          </Text>
          <Text style={{ fontSize: 20, fontWeight: 500 }}> $ {item.price}</Text>
        </View>
      </View>
      <View style={styles.valueWrapper}>
        <TouchableOpacity style={styles.value}>S</TouchableOpacity>
        <TouchableOpacity style={styles.value}>M</TouchableOpacity>
        <TouchableOpacity style={styles.value}>L</TouchableOpacity>
      </View>
      <Options/>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    // flex: "1",
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageX: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  textContainer: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  valueWrapper: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    gap: 14,
  },
  value: {
    borderRadius: 10,
    padding: 5,
    width: 30,
    height: 30,
    backgroundColor: "white",
    shadowColor: "gray",
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
});
