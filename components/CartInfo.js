import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

const CartInfo = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          borderRadius: 18,
          backgroundColor: "white",
          shadowRadius: 7,
          shadowColor: "gray",
          shadowOpacity: 0.5,
        }}
      >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          margin: 10,
        }}
      >
        <View
          style={{
            flex: 2,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={{ paddingRight: 4 }}>
            <Ionicons name="md-location-outline" size={18} color="gray" />
          </View>
          <Text>140 Roadway Ave.</Text>
        </View>
        <TouchableOpacity>
          <Octicons name="pencil" size={18} color="gray" />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          margin: 10,
        }}
      >
        <View
          style={{
            flex: 2,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={{ paddingRight: 4 }}>
            <Ionicons name="time-outline" size={18} color="gray" />
          </View>
          <Text>25-30 min (ASAP)</Text>
        </View>
        <TouchableOpacity>
          <Octicons name="pencil" size={18} color="gray" />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          margin: 10,
        }}
      >
        <View
          style={{
            flex: 2,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={{ paddingRight: 4 }}>
            <AntDesign name="wallet" size={18} color="gray" />
          </View>
          <Text>Cash</Text>
        </View>
        <TouchableOpacity>
          <Octicons name="pencil" size={18} color="gray" />
        </TouchableOpacity>
      </View>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          marginTop: 30,
          justifyContent: 'space-between', 
          
        }}
      >
      <Text style={{color: 'gray'}}>Subtotal</Text>
        <Text style={{color: 'gray'}}>$ 18.00</Text>
      </View>


      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          marginTop: 10,
          justifyContent: 'space-between', 
          
        }}
      >
      <Text style={{color: 'gray'}}>Delivery fee</Text>
        <Text style={{color: 'gray'}}>$ 2.50</Text>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
          justifyContent: 'space-between', 
          
        }}
      >
      <Text style={{ fontSize: 18, fontWeight: 500}}>Total</Text>
      <Text style={{ fontSize: 18, fontWeight: 500}}>$ 20.50</Text>
      </View>


      <View style={{ flex: 3, marginRight: 20 }}>
          <TouchableOpacity style={styles.addToCartButton}>
            <Text style={styles.addToCartText}>Place Order</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

export default CartInfo;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  addToCartButton: {
    marginTop: 100,
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
  }
});
