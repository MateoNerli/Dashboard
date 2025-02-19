import React from "react";
// react plugin for creating vector maps

// Define the component props
interface CountryMapProps {
  mapColor?: string;
}

const CountryMap: React.FC<CountryMapProps> = ({ mapColor }) => {
  return (
    <div className="relative w-full h-96">
      <div className="absolute z-10 w-full h-full">
        <div className="w-full h-full">
          <div
            className="map"
            id="worldMap"
            style={{
              height: "100%",
              width: "100%",
              backgroundColor: mapColor,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CountryMap;
