import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, {useState} from "react";
import { AntDesign } from "@expo/vector-icons";
import Options from "../components/Options";
import { useNavigation } from "@react-navigation/native";

const DetailsScreen = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params;
  const [isScrolled, setIsScrolled] = useState(false);

  const backBtn = () => {
    navigation.goBack();
  };

  const handleScroll = (event) => {
    setIsScrolled(event.nativeEvent.contentOffset.y > 0);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.navBar, isScrolled && styles.stickyNavBar]}>
        <Pressable
          style={{ marginLeft: 10, marginTop: 10 }}
          onPress={backBtn}
        >
          <AntDesign name="arrowleft" size={18} color="black" />
        </Pressable>
      </View>
      <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.imageX} source={{ uri: item.image }} />
        </View>

        <View style={styles.textContainer}>
        
        <View style={{ flexDirection: "row", gap: 2, marginBottom: 5 }}>
        <AntDesign name="star" size={12} color="orange" />
        <Text style={styles.title}>{item.rating}</Text>
        </View>

        <View style={styles.titleContainer}>
        <Text style={{ fontSize: 26, fontWeight: "600", color: "#000" }}>{item.title}</Text>
            <Text style={{ fontSize: 20, fontWeight: "500" }}> {" "}$ {item.price}</Text>
        </View>
        </View>


        {/* <View style={styles.textContainer}>
          <View style={{ flexDirection: "row", gap: 2, marginBottom: 5 }}>
            <AntDesign name="star" size={12} color="orange" />{" "}
            <Text style={styles.title}>{item.rating}</Text>
          </View>
          <View style={styles.titleContainer}>
            <Text style={{ fontSize: 26, fontWeight: "600", color: "#000" }}>{item.title}</Text>
            <Text style={{ fontSize: 20, fontWeight: "500" }}> {" "}$ {item.price}</Text>
          </View>
        </View>  */}
        <View style={styles.valueWrapper}>
          <Pressable style={styles.value}>
            <Text>S</Text>
          </Pressable>
          <Pressable style={styles.value}>
            <Text>M</Text>
          </Pressable>
          <Pressable style={styles.value}>
            <Text>L</Text>
          </Pressable>
        </View>
        {/* Options component... */}
        <Options />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 40,
  },
  navBar: {
    position: "absolute",
    zIndex: 1,
    elevation: 2,
  },
  stickyNavBar: {
    position: "sticky",
    top: 0,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  imageX: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  textContainer: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  valueWrapper: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    gap: 14,
  },
  value: {
    borderRadius: 10,
    padding: 5,
    width: 30,
    height: 30,
    backgroundColor: "white",
    shadowColor: "gray",
    shadowOpacity: 0.4,
    shadowRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
});
