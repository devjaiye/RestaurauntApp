import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Options = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18, fontWeight: 500 }}>Add more stuff</Text>
      <View style={styles.wrapper}>
        <Text>Cheese</Text>

        {/* <Text>Onions</Text>
        <Text>Bacon</Text>
        <Text>Chicken</Text> */}
      </View>
    </View>
  );
};

export default Options;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    marginTop: -20,
    paddingLeft: 20,
    paddingRight: 20,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    zIndex: -1,
    shadowColor: "gray", 
    shadowRadius: 4, 
    elevation: 6
  },
  wrapper: {
    paddingTop: 30,
    flexDirection: "column",
    gap: 20,
    fontSize: 18,
  },
});
