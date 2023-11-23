import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";

import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const OtherMenu = () => {
  const navigation = useNavigation();
  const [menuData, setMenuData] = useState([]);
  const [error, setError] = useState(null);

  const goToDetailsScreen = (item) => {
    navigation.navigate("Details", { item });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.npoint.io/a636059902ab1683e649"
        );
        setMenuData(response.data);
      } catch (error) {
        setError("Error fetching data: " + error.message);
      }
    };
    fetchData()
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headingText}>Business lunch</Text>
      </View>
      {menuData.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => goToDetailsScreen(item)}>
          <View style={styles.cardContainer}>
            <View style={styles.containerOne}>
              <Text style={styles.titleStyle}>{item.title}</Text>
              <Text style={styles.categoryStyle}>{item.category}</Text>
              <Text style={styles.subPriceStyle}>$ {item.subPrice}</Text>
              <Text style={styles.priceStyle}>$ {item.price}</Text>
            </View>
            <View style={styles.containerTwo}>
              <View style={styles.imageWrapper}>
                <Image style={styles.image} source={{ uri: item.image }} />
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
    backgroundColor: "white",
    borderRadius: 16,
    shadowColor: "gray",
    borderColor: "#ddd",
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
  titleStyle: { fontSize: 18, fontWeight: "400" },
  categoryStyle: { color: "gray", marginTop: 2 },
  subPriceStyle: { paddingTop: 10, color: "orange", fontWeight: "500" },
  priceStyle: { fontSize: 20, fontWeight: "bold" },

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
