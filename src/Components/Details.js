import React, { useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useData } from "../Contexts/DataContext";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, updateProperty } = useData();
  const property = data.find((prop) => prop.id === parseInt(id));
  const [formData, setFormData] = useState({
    name: property.name,
    cluster: property.cluster,
    city: property.city,
    space_available: property.space_available,
    is_live: property.is_live,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProperty({ ...property, ...formData });
    navigate("/");
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6">Warehouse Details</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Warehouse Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Cluster
          </label>
          <input
            type="text"
            name="cluster"
            value={formData.cluster}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            City
          </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Space Available
          </label>
          <input
            type="number"
            name="space_available"
            value={formData.space_available}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Is Live
          </label>
          <input
            type="checkbox"
            name="is_live"
            checked={formData.is_live}
            onChange={handleChange}
            className="mt-1"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Details;
