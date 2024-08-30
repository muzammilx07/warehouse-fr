import React from "react";
import Card from "./Card";

const CardList = ({ properties }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {properties.map((property) => (
        <Card key={property.id} property={property} />
      ))}
    </div>
  );
};

export default CardList;
