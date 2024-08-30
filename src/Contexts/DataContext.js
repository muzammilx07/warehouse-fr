import React, { createContext, useState, useEffect, useContext } from "react";
import propertyData from "../Data/property"; // Ensure correct path to your property data

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(propertyData);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Load favorites from sessionStorage
    const storedFavorites =
      JSON.parse(sessionStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  useEffect(() => {
    // Save favorites to sessionStorage
    sessionStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const updateProperty = (updatedProperty) => {
    setData((prevData) =>
      prevData.map((property) =>
        property.id === updatedProperty.id ? updatedProperty : property
      )
    );
  };

  const toggleFavorite = (property) => {
    setFavorites((prevFavorites) =>
      prevFavorites.some((fav) => fav.id === property.id)
        ? prevFavorites.filter((fav) => fav.id !== property.id)
        : [...prevFavorites, property]
    );
  };

  return (
    <DataContext.Provider
      value={{ data, favorites, updateProperty, toggleFavorite }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
