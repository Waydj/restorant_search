import React, { createContext, useEffect, useState } from "react";
import { locationRequest, locationTransfrom } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setlocation] = useState(null);
  const [keywords, setkeywords] = useState("san francisco");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeywords) => {
    setIsLoading(true);
    setkeywords(searchKeywords);
  };

  useEffect(() => {
    if (!keywords.length) {
      return;
    }
    locationRequest(keywords.toLowerCase())
      .then(locationTransfrom)
      .then((result) => {
        setIsLoading(false);
        setlocation(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });

    return () => {};
  }, [keywords]);

  return (
    <LocationContext.Provider
      value={{ isLoading, error, location, search: onSearch, keywords }}
    >
      {children}
    </LocationContext.Provider>
  );
};
