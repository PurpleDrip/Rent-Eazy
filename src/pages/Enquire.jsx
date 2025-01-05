import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Enquire = () => {
  const location = useLocation();
  const [property, setProperty] = useState({
    name: "",
    image: "",
    address: "",
    amenities: [],
    basePrice: 0,
    rating: 0,
  });

  useEffect(() => {
    if (location.state) setProperty(location.state);
  }, [location.state]);

  return (
    <div className="h-screen bg-[#242424] flex flex-col items-center justify-center gap-20">
      <h1 className="text-white text-5xl font-semibold">
        {property.name || "Property Name Not Available"}
      </h1>
      <div className="flex items-center justify-between w-full px-20">
        <div>
          <img
            src={property.image || "default-image.jpg"} // Fallback image
            alt={`${property.name || "Property"} property`}
            className="h-[50vh] rounded-3xl"
          />
        </div>
        <div className="flex flex-col gap-8">
          <p className="text-3xl text-gray-400">
            @{property.address || "Address Not Available"}
          </p>
          <ol className="text-3xl text-yellow-400">
            Amenities -
            {property.amenities?.length > 0 ? (
              property.amenities.map((amenity, index) => (
                <li key={index} className="pl-8 text-white">
                  {amenity}
                </li>
              ))
            ) : (
              <li className="pl-8 text-white">No amenities listed</li>
            )}
          </ol>
          <h1 className="text-2xl text-white text-center">
            ${property.basePrice || "Price Not Available"} per month.
          </h1>
          <h1 className="text-3xl text-gray-400">
            This property is rated a{" "}
            <span className="text-yellow-300">
              {property.rating || "N/A"} out of 5
            </span>
          </h1>
          <button className="bg-pink-300 rounded px-8 py-2 mx-auto hover:bg-pink-400">
            Contact Owner
          </button>
        </div>
      </div>
    </div>
  );
};

export default Enquire;
