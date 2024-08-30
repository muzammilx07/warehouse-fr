import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import { useLocation } from "react-router-dom";
import CardList from "../Components/CardList";
import { useData } from "../Contexts/DataContext";

const Main = () => {
  const { data, favorites } = useData();
  const location = useLocation();
  const currentPath = location.pathname;

  const [dataToDisplay, setDataToDisplay] = React.useState([]);

  useEffect(() => {
    switch (currentPath) {
      case "/":
        setDataToDisplay(data);
        break;
      case "/favorites":
        setDataToDisplay(favorites);
        break;
      default:
        setDataToDisplay(data);
        break;
    }
  }, [currentPath, data, favorites]);

  return (
    <div className="w-screen h-screen m-0 p-0 box-border flex flex-col overflow-x-hidden bg-background2">
      <div className="flex-none">
        <Navbar />
      </div>
      <div className="dataContainer flex-grow lg:px-52 lg:py-10 md:p-2 flex flex-col">
        <CardList properties={dataToDisplay} />
      </div>
      <footer className="m-8 flex justify-center">
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/muzammilx07"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://simpleicons.org/icons/github.svg"
              alt="GitHub"
              className="w-6 h-6"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/muzammil/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://simpleicons.org/icons/linkedin.svg"
              alt="LinkedIn"
              className="w-6 h-6"
            />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Main;
