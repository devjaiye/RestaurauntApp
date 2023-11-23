import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react"
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const CartScreen = () => {
  const navigation = useNavigation();

  const backBtn = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <TouchableOpacity
        // style={{ marginLeft: 10, marginTop: 10 }}
        onPress={backBtn}
      >
        <AntDesign name="arrowleft" size={18} color="black" />
      </TouchableOpacity>

      <Text>Your Cart</Text>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});