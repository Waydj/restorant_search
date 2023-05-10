import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import { StatusBar, SafeAreaView } from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import styled from "styled-components/native";
import { FadeInView } from "../../../components/animations/fade.animation";
import FavouritesBar from "../../../components/favourites/favourites-bar.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import RestaurantInfo from "../components/Restaurant-info.component";
import { RestaurantList } from "../components/restaurant-list.styles";
import Search from "../components/search.component";

const SaveArea = styled(SafeAreaView)`
  flex: 1;
  /* ${StatusBar.currentHeight &&
  `margin-top: ${StatusBar.currentHeight}px`}; */
`;

const LoadingContainer = styled.View`
  position: absolute;
  left: 50%;
  top: 50%;
`;

const LoadingIndicator = styled(ActivityIndicator)`
  margin-left: -25%;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isFavouritesToggled, setIsFavouritesToggled] = useState(false);

  return (
    <SaveArea>
      {isLoading && (
        <LoadingContainer>
          <LoadingIndicator
            size="large"
            animating={true}
            color={MD2Colors.blue500}
          />
        </LoadingContainer>
      )}
      <Search
        isFavouritesToggled={isFavouritesToggled}
        setIsFavouritesToggled={() =>
          setIsFavouritesToggled(!isFavouritesToggled)
        }
      />
      {isFavouritesToggled && (
        <FavouritesBar
          favourites={favourites}
          onDetail={navigation.navigate}
        />
      )}
      <RestaurantList
        data={restaurants}
        renderItem={(restaurant) => (
          <FadeInView>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantsDetail", {
                  restaurant: restaurant.item,
                })
              }
            >
              <RestaurantInfo restaurant={restaurant.item} />
            </TouchableOpacity>
          </FadeInView>
        )}
        keyExtractor={(item) => item.name}
      />
    </SaveArea>
  );
};
