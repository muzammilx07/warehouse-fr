import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (destination) => {
    if (destination === "home") {
      navigate("/");
    } else if (destination === "favorites") {
      navigate("/favorites");
    }
  };

  return (
    <div className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between">
        <button
          onClick={() => handleNavigation("home")}
          className="text-white text-lg font-bold"
        >
          WAREHOUSE
        </button>
        <button
          onClick={() => handleNavigation("favorites")}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Favorite
        </button>
      </div>
    </div>
  );
};

export default Navbar;
