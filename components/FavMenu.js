import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";

const FavMenu = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(null);
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(
          "https://api.npoint.io/a636059902ab1683e649"
        );
        setMenuData(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  const handleCardPressIn = (index) => {
    setActiveCardIndex(index);
  };

  const handleCardPressOut = () => {
    setActiveCardIndex(null);
  };

  return (
    <View style={{ marginTop: 20, paddingLeft: 10, paddingRight: 10 }}>
      <View>
        <Text style={{ fontSize: 26, fontWeight: "bold" }}>
          Favourite{" "}
          <Text style={{ fontSize: 14, fontWeight: "400" }}>dishes</Text>
        </Text>
      </View>

      {menuData.length > 0 ? (
        <ScrollView
          horizontal
          contentContainerStyle={styles.carouselContainer}
          showsHorizontalScrollIndicator={false}
        >
          {menuData.map((item, index) => (
            <TouchableWithoutFeedback
              key={index}
              onPressIn={() => handleCardPressIn(index)}
              onPressOut={handleCardPressOut}
            >
              <View
                style={[
                  styles.cardContainer,
                  index === activeCardIndex && styles.activeCard,
                ]}
              >
                <View style={styles.cardContentOne}>
                  <Image style={styles.imageX} source={{ uri: item.image }} />
                  <View style={{ marginTop: 15, marginRight: 10 }}>
                    <AntDesign name="heart" size={14} color="gray" />
                  </View>
                </View>
                <View
                  style={{
                    marginLeft: 10,
                    marginRight: 10,
                  }}
                >
                  <Text style={styles.textTitle}>{item.title}</Text>
                  <Text style={styles.textSmall}>{item.category}</Text>
                </View>

                <View style={styles.cardContentTwo}>
                  <Text style={{ fontWeight: "300" }}>
                    <AntDesign name="star" size={12} color="orange" />{" "}
                    {item.rating}
                  </Text>
                  <Text style={{ fontWeight: "bold" }}>$ {item.price}</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </ScrollView>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default FavMenu;

const styles = StyleSheet.create({
  carouselContainer: {
    marginVertical: 20,
    alignItems: "center",
  },
  cardContainer: {
    flex: 1,
    paddingBottom: 10,
    marginLeft: 6,
    marginRight: 6,
    backgroundColor: "white",
    borderRadius: 16,
    shadowColor: "gray",
    borderColor: "#ddd",
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 10,
    overflow: "hidden",
  },
  cardContentOne: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: -10,
    paddingLeft: 5,
  },
  imageX: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  textTitle: {
    fontSize: 14,
    fontWeight: "700",
  },
  textSmall: {
    marginTop: 2,
    fontSize: 12,
    color: "gray",
  },
  cardContentTwo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 6,
    marginLeft: 10,
    marginRight: 10,
  },
  activeCard: {
    transform: [{ scale: 1.1 }],
  },
});
