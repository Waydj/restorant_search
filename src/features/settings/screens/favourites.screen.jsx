import React, { useContext } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import RestaurantInfo from "../../restaurants/components/Restaurant-info.component";
import { RestaurantList } from "../../restaurants/components/restaurant-list.styles";

const NoFavouritesArea = styled.View`
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.space[4]};
`;

const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return favourites.length ? (
    <RestaurantList
      data={favourites}
      renderItem={(restaurant) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("RestaurantsDetail", {
              restaurant: restaurant.item,
            })
          }
        >
          <RestaurantInfo restaurant={restaurant.item} />
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.name}
    />
  ) : (
    <NoFavouritesArea>
      <Text variant="label">No favourites yet</Text>
    </NoFavouritesArea>
  );
};

export default FavouritesScreen;
