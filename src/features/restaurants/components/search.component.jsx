import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";

const SearchBarContainer = styled.View`
  padding: ${(props) => props.theme.space[2]};
`;

const Search = ({ isFavouritesToggled, setIsFavouritesToggled }) => {
  const { keywords, search } = useContext(LocationContext);
  const [searchKeyWord, setSearchKeyWord] = useState(keywords);

  useEffect(() => {
    setSearchKeyWord(keywords);

    return () => {};
  }, [keywords]);

  return (
    <SearchBarContainer>
      <Searchbar
        icon={isFavouritesToggled ? "heart" : "heart-outline"}
        onIconPress={setIsFavouritesToggled}
        placeholder="Search for a location"
        value={searchKeyWord}
        onSubmitEditing={() => {
          search(searchKeyWord);
        }}
        onChangeText={(text) => {
          setSearchKeyWord(text);
        }}
      />
    </SearchBarContainer>
  );
};

export default Search;
