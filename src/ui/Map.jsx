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

  useEffect(
    function () {
      if (mapLat && mapLng)
        setClickedPosition({ lat: parseFloat(mapLat), lng: mapLng }); // katwli l value dyal mapossition b l9ima dyal mapLat wmapLng
    },
    [mapLat, mapLng, setClickedPosition] // w9tma tbdlo katbdl m3ahom
  );
  useEffect(
    function () {
      if (geolocationPosition)
        setClickedPosition({
          lat: geolocationPosition.lat,
          lng: geolocationPosition.lng,
        });
    },
    [geolocationPosition, setClickedPosition]
  );
  return (
    <div className="w-full h-screen mt-[90px] fixed">
      <MapContainer
        center={
          clickedPosition
            ? [clickedPosition.lat, clickedPosition.lng]
            : [31.6541715, -7.9919966]
        }
        zoom={13}
        style={{ height: "80%", width: "100%", justifyContent: "center" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[31.6541715, -7.9919966]}>
          <Popup>Hello world!</Popup>
        </Marker>
        <MapClickLogger />
      </MapContainer>
    </div>
  );
}
function MapClickLogger() {
  const { setClickedPosition } = useMapClick();

  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setClickedPosition({ lat, lng });
      // You can do whatever you want here with lat/lng
      console.log(lat, lng);
    },
  });
  return null;
}
