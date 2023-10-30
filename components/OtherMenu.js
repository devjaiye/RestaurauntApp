import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import menuData from "../api/menuData.json";
import { useNavigation } from "@react-navigation/native";

const OtherMenu = () => {
    const navigation = useNavigation()

    const goToDetailsScreen = (item) => {
    
        navigation.navigate('Details', { item });
      };

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Business lunch</Text>

      {menuData.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => goToDetailsScreen(item)}>
        <View style={styles.cardContainer}>
          <View style={styles.containerOne}>
            <Text style={{ fontSize: 18, fontWeight: 400 }}>{item.title}</Text>
            <Text style={{ color: "gray", marginTop: 2 }}>{item.category}</Text>
            <Text style={{ paddingTop: 10, color: "orange", fontWeight: 500 }}>
              $ {item.subPrice}
            </Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              $ {item.price}
            </Text>
          </View>
          <View style={styles.containerTwo}>
            <View style={styles.imageWrapper}>
              <Image
                style={styles.image}
                source={require(`../assets/${item.image}`)}
              />
            </View>
          </View>
        </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default OtherMenu;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  headingText: {
    fontWeight: "bold",
    fontSize: 26,
  },
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    overflow: "hidden",
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 16,
    shadowColor: "gray",
    borderColor:"#ddd",
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 10,
    overflow: "hidden",
  },
  containerOne: {
    flex: 1,
    marginLeft: 10,
    marginTop: 10,
    paddingTop: 5,
    flexDirection: "column",
  },
  containerTwo: {
    flex: 1,
    flexDirection: "row",
    marginRight: -10,
  },
  //   imageWrapper: {
  //     shadowColor: "#000",
  //     shadowOffset: { width: 2, height: 2 },
  //     shadowOpacity: 0.4,
  //     shadowRadius: 3,
  //   },
  image: {
    width: 300,
    height: 120,
    resizeMode: "cover",
  },
});
