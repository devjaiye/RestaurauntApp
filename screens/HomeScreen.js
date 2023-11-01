import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import Categories from "../components/Categories";
import FavMenu from "../components/FavMenu";
import OtherMenu from "../components/OtherMenu";


const HomeScreen = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* nav bar */}
      <View style={styles.navContainer}>
        <EvilIcons name="navicon" size={18} color="black" />
        <View style={styles.textInputContainer}>
          <Ionicons name="location" size={18} color="black" />
          <TextInput placeholder="Enter location" style={styles.textInput} />
        </View>
        <Ionicons name="search" size={18} color="black" />
      </View>

      {/* categories scroll */}
      <View style={{ marginTop: 30, paddingLeft: 10, paddingRight: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: 300 }}>
          What would you like{" "}
          <Text style={{ fontWeight: "bold", fontSize: 26 }}>to eat?</Text>
        </Text>
        <Categories />
      </View>

     <FavMenu/>

     <OtherMenu/>
       {/*
        <View style={{marginBottom: 40}}>
        <OtherMenu/>
        </View> */}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: "white",
    flex: 1,
  },
  //   fabContainer: {
  //     position: 'absolute',
  //     bottom: 20,
  //     right: 20,
  //     zIndex: 1
  //   },
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  textInputContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#D0D0D0",
    gap: 5,
    padding: 3,
    alignItems: "center",
  },
  textInput: {
    width: 200,
    marginVertical: 5,
    fontSize: 12,
    color: "gray",
  },
});
