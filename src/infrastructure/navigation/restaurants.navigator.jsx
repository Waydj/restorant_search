import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TransitionPresets } from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/Restaurants.screen";
import { Text } from "react-native-paper";
import RestaurantDetail from "../../features/restaurants/screens/Restaurant-detail.screen";

const RestaurantStack = createNativeStackNavigator();

const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
        ...TransitionPresets.ScaleFromCenterAndroid,
        // animation: "flip",
        // presentation: "fullScreenModal",
      }}
    >
      <RestaurantStack.Screen
        name="RestaurantsScreen"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantsDetail"
        component={RestaurantDetail}
      />
    </RestaurantStack.Navigator>
  );
};

export default RestaurantsNavigator;
