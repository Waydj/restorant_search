import { ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { Spacer } from "../spacer/spacer.component";
import CompactRestaurantInfo from "../restaurant/compact-restaurant-info.component";
import { Text } from "../typography/text.component";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

const FavouritesBar = ({ favourites, onDetail }) => {
  if (!favourites.length) {
    return null;
  }

  return (
    <FavouritesWrapper>
      <Spacer variant="left.large">
        <Text variant="caption">Favourites</Text>
      </Spacer>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {favourites.map((rest) => {
          const key = rest.name;
          return (
            <Spacer
              key={key}
              position="left"
              size="medium"
            >
              <TouchableOpacity
                onPress={() =>
                  onDetail("RestaurantsDetail", {
                    restaurant: rest,
                  })
                }
              >
                <CompactRestaurantInfo restaurant={rest} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};

export default FavouritesBar;
