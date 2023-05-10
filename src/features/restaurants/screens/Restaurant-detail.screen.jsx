import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";
import RestaurantInfo from "../components/Restaurant-info.component";

const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { restaurant } = route.params;
  return (
    <>
      <RestaurantInfo restaurant={restaurant} />

      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => (
            <List.Icon
              {...props}
              icon="bread-slice"
            />
          )}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Eggs Benedict" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          left={(props) => (
            <List.Icon
              {...props}
              icon="noodles"
            />
          )}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Burger w/ fries" />
          <List.Item title="Steak Sandwich" />
        </List.Accordion>

        <List.Accordion
          title="Dinner"
          left={(props) => (
            <List.Icon
              {...props}
              icon="food-turkey"
            />
          )}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Spaghetti Bolognese" />
          <List.Item title="Steak Frites" />
        </List.Accordion>

        <List.Accordion
          title="Drinks"
          left={(props) => (
            <List.Icon
              {...props}
              icon="glass-cocktail"
            />
          )}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Coffee" />
          <List.Item title="Tea" />
        </List.Accordion>
      </ScrollView>
    </>
  );
};

export default RestaurantDetailScreen;
