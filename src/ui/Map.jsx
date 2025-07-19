import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useUrlPosition } from "../helpers/useUrlposition";
import { UseGeolocation } from "../helpers/UseGeolocation";
import { useEffect } from "react";
import { useMapClick } from "../context/mapContext";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { getCityFromCoords } from "../Services/getCityFromCoords";
// Fix leaflet's missing marker icons (required in Vite/React)
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

export default function Map() {
  const { clickedPosition, setClickedPosition } = useMapClick();
  const [mapLat, mapLng] = useUrlPosition();
  const { position: geolocationPosition, getPosition } = UseGeolocation();

  useEffect(() => {
    if (mapLat && mapLng) {
      setClickedPosition({ lat: parseFloat(mapLat), lng: mapLng });
    }
  }, [mapLat, mapLng, setClickedPosition]);

  useEffect(() => {
    if (geolocationPosition) {
      setClickedPosition({
        lat: geolocationPosition.lat,
        lng: geolocationPosition.lng,
      });
    }
  }, [geolocationPosition, setClickedPosition]);

  const initialLat = clickedPosition?.lat ?? geolocationPosition?.lat;
  const initialLng = clickedPosition?.lng ?? geolocationPosition?.lng;

  const isPositionReady = initialLat !== undefined && initialLng !== undefined;

  if (!isPositionReady)
    return <p className="text-center mt-8">Loading map...</p>;

  return (
    <div className="w-full h-screen mt-[90px] fixed">
      <MapContainer
        center={[initialLat, initialLng]}
        zoom={13}
        style={{ height: "80%", width: "100%", justifyContent: "center" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapClickHandler onCitySelect={(city) => setClickedPosition(city)} />
        <Marker position={[initialLat, initialLng]}>
          <Popup>Hello world!</Popup>
        </Marker>
        <MapClickLogger />
      </MapContainer>
    </div>
  );
}

function MapClickLogger() {
  const { setClickedPosition } = useMapClick();
  const navigate = useNavigate();
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;

      setClickedPosition({ lat, lng });
      // You can do whatever you want here with lat/lng
      console.log(lat, lng);
      navigate("/listing");
    },
  });
  return null;
}

function MapClickHandler({ onCitySelect }) {
  useMapEvents({
    click: async (e) => {
      const { lat, lng } = e.latlng;
      const city = await getCityFromCoords(lat, lng);
      console.log("Clicked city:", city);
      onCitySelect(city);
    },
  });

  return null;
}
MapClickHandler.propTypes = {
  onCitySelect: PropTypes.func,
};
