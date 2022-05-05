import Home from "./components/screens/Home";
import Booking from "./components/screens/Booking";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootSiblingParent } from "react-native-root-siblings";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <RootSiblingParent>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "Booker",
              headerStyle: {
                backgroundColor: "darkslateblue",
                flex: 1,
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
                textAlign: "center",
              },
            }}
          />
          <Stack.Screen
            name="CreateBooking"
            component={Booking}
            options={{
              title: "Booker",
              headerStyle: {
                backgroundColor: "darkslateblue",
                flex: 1,
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
                textAlign: "center",
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </RootSiblingParent>
  );
}
