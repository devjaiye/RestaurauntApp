import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CartInfo from "../components/CartInfo";

const CartScreen = () => {
  const navigation = useNavigation();

  const backBtn = () => {
    navigation.goBack();
  };

  return (
    <ScrollView>
      <SafeAreaView
        style={{ flex: 1, marginLeft: 12, marginRight: 12, paddingTop: 10 }}
      >
        <TouchableOpacity
          style={{
            marginTop: 10,
            justifyContent: "flex-end",
            flexDirection: "row",
          }}
          onPress={backBtn}
        >
          <MaterialCommunityIcons name="window-close" size={18} color="black" />
        </TouchableOpacity>

        <View style={styles.textContainer}>
          <Text style={{ color: "gray" }}>Your</Text>
          <Text style={{ fontSize: 26, fontWeight: 500 }}>Cart</Text>
        </View>

        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <View>
            <Image
              style={styles.imageStyle}
              source={{ uri: "https://i.ibb.co/BKJdCpZ/pizza1.png" }}
            />
          </View>

          <View style={{ flex: 1, marginLeft: 10, justifyContent: "center" }}>
            <Text style={{ fontWeight: 600 }}>Pepperoni with garlic</Text>
            <Text style={{ color: "gray", marginTop: 4, fontSize: 12 }}>
              x2 cheese
            </Text>
            <Text style={{ color: "gray", fontSize: 12 }}>x1 olives</Text>
          </View>
          <View style={{ justifyContent: "flex-end", marginBottom: 5 }}>
            <Text style={{ fontWeight: 600 }}>$ 8.00</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <View>
            <Image
              style={styles.imageStyle}
              source={{uri: "https://i.ibb.co/wcVXhhL/food1.png"}}
            />
          </View>

          <View style={{ flex: 1, marginLeft: 10, justifyContent: "center" }}>
            <Text style={{ fontWeight: 600 }}>Salad Rice and Chicken</Text>
            <Text style={{ color: "gray", fontSize: 12, marginTop: 4 }}>
              x1 juice
            </Text>
          </View>
          <View style={{ justifyContent: "flex-end", marginBottom: 5 }}>
            <Text style={{ fontWeight: 600 }}>$ 8.00</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <View>
            <Image
              style={styles.imageStyle}
              source={{uri: "https://i.ibb.co/hdCvBt7/burger1.png"}}
            />
          </View>

          <View style={{ flex: 1, marginLeft: 10, justifyContent: "center" }}>
            <Text style={{ fontWeight: 600 }}>Cream Burger</Text>
            <Text style={{ color: "gray", fontSize: 12, marginTop: 4 }}>
              x2 cheese
            </Text>
          </View>
          <View style={{ justifyContent: "flex-end", marginBottom: 5 }}>
            <Text style={{ fontWeight: 600 }}>$ 4.00</Text>
          </View>
        </View>
        {/* cart info component... */}
        <CartInfo />
      </SafeAreaView>
    </ScrollView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  textContainer: {
    marginTop: -16,
    marginBottom: 10,
    zIndex: -1,
  },
  imageContainer: {},
  imageStyle: {
    justifyContent: "flex-start",
    resizeMode: "contain",
    width: 60,
    height: 60,
    marginLeft: -10,
  },
});
