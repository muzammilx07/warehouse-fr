import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import Details from "./Components/Details";
import { DataProvider } from "./Contexts/DataContext";

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/favorites" element={<Main />} />{" "}
        {/* Adjust route if necessary */}
      </Routes>
    </DataProvider>
  );
}

export default App;
