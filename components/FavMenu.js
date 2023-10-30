import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
  } from "react-native";
  import React, { useState } from "react";
  import { AntDesign } from "@expo/vector-icons";
  import menuData from "../api/menuData.json";
  
  const FavMenu = () => {
  
    // const [activeCardIndex, setActiveCardIndex] = useState(null)
  
  
    return (
      <View style={{ marginTop: 20, paddingLeft: 10, paddingRight: 10 }}>
        <View>
          <Text style={{ fontSize: 26, fontWeight: "bold" }}>
            Favourite{" "}
            <span style={{ fontSize: 14, fontWeight: 400 }}>dishes</span>
          </Text>
        </View>
  
        <ScrollView
          horizontal
          contentContainerStyle={styles.carouselContainer}
          showsHorizontalScrollIndicator={false}
        >
          {menuData.map((item, index) => (
              <View style={styles.cardContainer}>
                <View style={styles.cardContentOne}>
                  <Image
                    style={styles.imageX}
                    source={require(`../assets/${item.image}`)}
                  />
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
                  <Text style={{ fontWeight: 300 }}>
                    <AntDesign name="star" size={12} color="orange" />{" "}
                    {item.rating}
                  </Text>
                  <Text style={{ fontWeight: "bold" }}>$ {item.price}</Text>
                </View>
              </View>
       
          ))}
        </ScrollView>
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
      borderColor:"#ddd",
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
      fontWeight: 700,
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
  