import React from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../Contexts/DataContext"; // Adjust the path as necessary

const Card = ({ property }) => {
  const navigate = useNavigate();
  const { toggleFavorite, favorites } = useData();
  const isFavorite = favorites.some((fav) => fav.id === property.id);

  const handleClick = () => {
    navigate(`/details/${property.id}`); // Redirect to details page with the property ID
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation(); // Prevent triggering the card click
    toggleFavorite(property);
  };

  return (
    <div
      className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
      onClick={handleClick}
    >
      <div className="p-6 flex flex-col">
        <h2 className="text-lg font-semibold mb-2 text-gray-800">
          {property.city}
        </h2>
        <p className="text-sm text-gray-500 mb-2">
          <span className="font-medium text-gray-700">Cluster:</span>{" "}
          {property.cluster}
        </p>
        <p className="text-sm text-gray-500 mb-2">
          <span className="font-medium text-gray-700">Space Available:</span>{" "}
          {property.space_available} sq ft
        </p>
        <div className="flex items-center space-x-2 mt-auto">
          <span
            className={`h-3 w-3 rounded-full ${
              property.is_live ? "bg-green-500" : "bg-red-500"
            }`}
          ></span>
          <span className="text-sm text-gray-500">
            {property.is_live ? "Live" : "Not Live"}
          </span>
          <button
            onClick={handleFavoriteClick}
            className={`ml-auto text-xl ${
              isFavorite ? "text-red-500" : "text-gray-400"
            }`}
          >
            ♥
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
