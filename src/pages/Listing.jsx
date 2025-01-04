import React, { useState } from "react";

const Listing = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    image: "",
    tag: "",
    amenities: "",
    basePrice: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedData = {
      ...formData,
      amenities: formData.amenities.split(",").map((item) => item.trim()),
      rating: parseFloat(formData.rating) || 0,
      basePrice: parseInt(formData.basePrice, 10) || 0,
    };

    console.log(formattedData);
  };

  return (
    <div className="bg-[#242424] h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-8 bg-black rounded-3xl w-[30rem] text-white shadow-2xl"
      >
        <h1 className="text-5xl font-semibold text-center mb-2 text-green-400">
          List Property
        </h1>
        <label className="flex flex-col">
          Property Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 rounded text-black"
            required
          />
        </label>
        <label className="flex flex-col">
          Property Address
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="border p-2 rounded text-black"
            required
          />
        </label>
        <label className="flex flex-col">
          Image URL
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="border p-2 rounded text-black"
            required
          />
        </label>
        <label className="flex flex-col">
          Tag (buy/rent/commercial)
          <input
            type="text"
            name="tag"
            value={formData.tag}
            onChange={handleChange}
            className="border p-2 rounded text-black"
            required
          />
        </label>
        <label className="flex flex-col">
          Amenities (comma-separated)
          <input
            type="text"
            name="amenities"
            value={formData.amenities}
            onChange={handleChange}
            className="border p-2 rounded text-black"
            required
          />
        </label>
        <label className="flex flex-col">
          Base Price
          <input
            type="number"
            name="basePrice"
            value={formData.basePrice}
            onChange={handleChange}
            className="border p-2 rounded text-black"
            required
          />
        </label>
        <button
          type="submit"
          className="bg-green-400 text-black py-2 rounded hover:bg-green-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Listing;
