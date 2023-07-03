import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
/* Home Screens */
import HomeScreen from "./screens/homeOptions/HomeScreen";
import MapScreen from "./screens/homeOptions/MapScreen";
import EatsScreen from "./screens/homeOptions/EatsScreen";
import ITScreen from "./screens/homeOptions/ITScreen";

function App() {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MapScreen"
              component={MapScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="EatsScreen"
              component={EatsScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ITScreen"
              component={ITScreen}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center", // the alignment of each item inside the line
    justifyContent: "center", // the alignment of the whole line
  },
});

export default App;
