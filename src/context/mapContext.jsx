import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { UseGeolocation } from "../helpers/UseGeolocation";

const MapClickContext = createContext();

export function MapClickProvider({ children }) {
  const { position } = UseGeolocation();
  const [clickedPosition, setClickedPosition] = useState({
    lat: 41.6028735430267,
    lng: -6.998123322114905,
  });
  console.log(position);
  useEffect(() => {
    if (position) {
      setClickedPosition(position);
    }
  }, [position]);
  return (
    <MapClickContext.Provider value={{ clickedPosition, setClickedPosition }}>
      {children}
    </MapClickContext.Provider>
  );
}

export function useMapClick() {
  const context = useContext(MapClickContext);
  if (!context) {
    throw new Error("useMapClick must be used within a MapClickProvider");
  }
  return context;
}

MapClickProvider.propTypes = {
  children: PropTypes.node,
};
