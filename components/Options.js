import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Options = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18, fontWeight: 500 }}>Add more stuff</Text>
      <View style={styles.wrapper}>
        <View style={styles.leftSection}>
          <Text>Cheese</Text>
        </View>
        <View style={styles.rightSection}>
          <TouchableOpacity style={styles.counterContainer}>
            <Text style={styles.counter}>-</Text>
          </TouchableOpacity>{" "}
          <TextInput placeholder="0" style={styles.textInput} />{" "}
          <TouchableOpacity style={styles.counterContainer}>
            <Text style={styles.counter}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.wrapper}>
        <View style={styles.leftSection}>
          <Text>Onion</Text>
        </View>
        <View style={styles.rightSection}>
          <TouchableOpacity style={styles.counterContainer2}>
            <Text style={styles.counterTwo}>+ Add</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.wrapper}>
        <View style={styles.leftSection}>
          <Text>Bacon</Text>
        </View>
        <View style={styles.rightSection}>
          <TouchableOpacity style={styles.counterContainer2}>
            <Text style={styles.counterTwo}>+ Add</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.wrapper}>
        <View style={styles.leftSection}>
          <Text>Chicken</Text>
        </View>
        <View style={styles.rightSection}>
          <TouchableOpacity style={styles.counterContainer2}>
            <Text style={styles.counterTwo}>+ Add</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.wrapper}>
        <View style={styles.leftSection}>
          <Text>Chicken</Text>
        </View>
        <View style={styles.rightSection}>
          <TouchableOpacity style={styles.counterContainer2}>
            <Text style={styles.counterTwo}>+ Add</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.buttonWrapper}>
        <View style={{ flex: 3, marginRight: 20 }}>
          <TouchableOpacity style={styles.addToCartButton}>
            <Text style={styles.addToCartText}>Add to cart</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cartIon}>
          <Feather name="shopping-bag" size={18} color="black" />
        </View>
      </View>
    </View>
  );
};

export default Options;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    paddingTop: 30,
    paddingBottom: 30,
    marginTop: -5,
    paddingLeft: 20,
    paddingRight: 20,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    zIndex: -1,
    shadowColor: "gray",
    borderColor: " #ddd",
    shadowRadius: 4,
    shadowOpacity: 0.2,
    elevation: 4,
  },
  wrapper: {
    paddingTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: 18,
  },
  leftSection: {
    flex: 1,
  },
  rightSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  textInput: {
    width: 20,
    height: 20,
    textAlign: "center",
    padding: 1,
  },
  counterContainer: {
    shadowColor: "gray",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: "#f9f9f9",
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  counterContainer2: {
    shadowColor: "gray",
    shadowOpacity: 0.4,
    shadowRadius: 4,
    borderRadius: 16,
    backgroundColor: "#f9f9f9",
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 2,
    paddingBottom: 2,
  },
  counter: {
    fontWeight: 700,
    paddingLeft: 7,
    paddingRight: 5,
  },
  addToCartButton: {
    backgroundColor: "#eeb83a",
    borderRadius: 20,
  },
  addToCartText: {
    color: "#222222",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  buttonWrapper: {
    paddingTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cartIon: {
    backgroundColor: "white",
    padding: 10,
    borderColor: "gray",
    shadowRadius: 6,
    borderRadius: 50,
    shadowColor: "black",
    shadowOpacity: 0.2,
  },
});
