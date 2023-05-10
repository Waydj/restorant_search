import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import RestaurantsNavigator from "./restaurants.navigator";
import MapScreen from "../../features/map/screens/map.screen";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import SettingsNavigator from "./settings.navigator";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "restaurant-sharp",
  Map: "ios-map-sharp",
  Settings: "ios-list",
};

const screenOptions = ({ route }) => ({
  headerTitleAlign: "center",
  tabBarIcon: ({ color, size }) => {
    const iconName = TAB_ICON[route.name];
    return (
      <Ionicons
        name={iconName}
        size={size}
        color={color}
      />
    );
  },
  tabBarActiveTintColor: "blue",
  tabBarInactiveTintColor: "gray",
});

export const AppNavigator = () => (
  <FavouritesContextProvider>
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen
            name="Restaurants"
            component={RestaurantsNavigator}
          />
          <Tab.Screen
            options={{ headerShown: false }}
            name="Map"
            component={MapScreen}
          />
          <Tab.Screen
            options={{ headerShown: false }}
            name="Settings"
            component={SettingsNavigator}
          />
        </Tab.Navigator>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavouritesContextProvider>
);
