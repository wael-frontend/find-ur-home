import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const MapClickContext = createContext();

export function MapClickProvider({ children }) {
  const [clickedPosition, setClickedPosition] = useState({
    lat: 31.60287835430267,
    lng: -7.9987021222114905,
  });

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
