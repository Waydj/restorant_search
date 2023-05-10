import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";

const SearchBarContainer = styled.View`
  padding: ${(props) => props.theme.space[2]};
  position: absolute;
  z-index: 999;
  padding-top: 50px;
  width: 100%;
`;

const Search = () => {
  const { keywords, search } = useContext(LocationContext);
  const [searchKeyWord, setSearchKeyWord] = useState(keywords);

  useEffect(() => {
    setSearchKeyWord(keywords);

    return () => {};
  }, [keywords]);

  return (
    <SearchBarContainer>
      <Searchbar
        placeholder="Search for a location"
        icon="map"
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
