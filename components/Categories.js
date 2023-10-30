import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const Categories = () => {
  return (
    <View style={{ marginTop: 20, }}>
      <ScrollView
        horizontal
        contentContainerStyle={styles.carouselContainer}
        showsHorizontalScrollIndicator={false}
      >
        <View style={{ flexDirection: "row", gap: 5 }}>
          <Text style={styles.activeText}> All foods </Text>
          <Text style={styles.notActiveText}> Pizza </Text>
          <Text style={styles.notActiveText}> Spag </Text>
          <Text style={styles.notActiveText}> Burger </Text>
          <Text style={styles.notActiveText}> Swallow</Text>
          <Text style={styles.notActiveText}> Rice </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  carouselContainer: {
    marginVertical: 40,
    alignItems: "center",
  },
  activeText: {
    backgroundColor: "#ffc46b",
    color: "#222222",
    padding: 8,
    fontSize: 16,
    fontWeight: 700,
    borderRadius: 12,
  },
  notActiveText: {
 backgroundColor: "#f9f9f9",
    color: "#a4a4a4",
    padding: 8,
    fontSize: 16,
    fontWeight: 700,
    borderRadius: 12,
  },
});
