import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import OtherMenu from "./components/OtherMenu";
import FavMenu from "./components/FavMenu";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false, cardStyle: { backgroundColor: 'white' } }}
        />
        <Stack.Screen
        name="FavMenu"
          component={FavMenu}
          options={{ headerShown: false }}
        >

        </Stack.Screen>
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ headerShown: true, cardStyle: { backgroundColor: 'white' }  }}
        />
        <Stack.Screen
          name="OtherMenu"
          component={OtherMenu}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
