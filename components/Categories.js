import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const categories = ["All foods", "Pizza", "Spag", "Burger", "Swallow", "Agbado", "Bread", "Fruit salad",  "Beans"];

const Categories = () => {
  const [activeItem, setActiveItem] = useState(categories[0]);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const isActive = (item) => {
    return item === activeItem ? styles.activeText : styles.notActiveText;
  };

  return (
    <View style={{ marginTop: 20 }}>
      <ScrollView
        horizontal
        contentContainerStyle={styles.carouselContainer}
        showsHorizontalScrollIndicator={false}
      >
        <View style={{ flexDirection: "row", gap: 5 }}>
        {categories.map(item => (
            <Text
              key={item}
              style={[styles.text, isActive(item)]}
              onPress={() => handleItemClick(item)}
            >
              {item}
            </Text>
          ))}

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
  text: {
    color: "#222222",
    padding: 8,
    fontSize: 16,
    fontWeight: "700",
    borderRadius: 12,
  },
  activeText: {
    backgroundColor: "#ffc46b",
  },
  notActiveText: {
    backgroundColor: "#f9f9f9",
    color: "#a4a4a4",
  },
});
