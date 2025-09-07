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
import { useEffect, useState } from "react";
import { useMapClick } from "../context/mapContext";
import PropTypes from "prop-types";
import { getCityFromCoords } from "../Services/getCityFromCoords";
import { supabase } from "../Services/supabase";
import useUser from "../pages/Auth/useUser";

// Fix leaflet marker icon paths
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

export default function MapComponent() {
  const { clickedPosition, setClickedPosition } = useMapClick();
  const [mapLat, mapLng] = useUrlPosition();
  const { position: geolocationPosition } = UseGeolocation();
  const [listeng, setlesting] = useState([]);
  const { user } = useUser();
  // fetchLestings
  useEffect(() => {
    async function fetchlesting() {
      if (!user) return;
      if (user.user_metadata.roleuser == "landlord") {
        const { data } = await supabase
          .from("listings")
          .select("*")
          .eq("user_id", user.id);
        setlesting(data);
      } else if (user.user_metadata.roleuser == "renter") {
        const { data } = await supabase.from("listings").select("*");
        setlesting(data);
      }
    }
    fetchlesting();
  }, [user]);

  // Sync URL params with state
  useEffect(() => {
    if (mapLat && mapLng) {
      setClickedPosition({ lat: parseFloat(mapLat), lng: parseFloat(mapLng) });
    }
  }, [mapLat, mapLng, setClickedPosition]);

  // Sync geolocation with state
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
  if (!isPositionReady) {
    return <p className="text-center mt-0">Loading map...</p>;
  }

  return (
    <div className="w-full h-screen mt-[0px] ml-10">
      <MapContainer
        center={[initialLat, initialLng]}
        zoom={13}
        className="h-[80%] w-full"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapClickHandler onCitySelect={(city) => setClickedPosition(city)} />
        {listeng.map((homeposition) => (
          <Marker
            position={[homeposition.lat, homeposition.lng]}
            key={homeposition.id}
          >
            <Popup>
              <div className="flex bg-amber-50 w-[180px] gap-2">
                <img className="w-[60px]" src={homeposition.image} />
                <h2>{homeposition.price} </h2>
              </div>
            </Popup>
          </Marker>
        ))}
        <MapClickLogger />
      </MapContainer>
    </div>
  );
}
/* function Changecenter({ position }) {
  const map = useMap(); // function from react
  map.setView(position); // hadi bach l view kawli 3la l mdina wla dwla li clickina 3liha
  return null;
} */
function MapClickLogger() {
  const { setClickedPosition } = useMapClick();
  //  const navigate = useNavigate();

  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      console.log(lat, lng);
      setClickedPosition({ lat, lng });
    },
  });
  return null;
}

function MapClickHandler() {
  const { setClickedPosition } = useMapClick();

  useMapEvents({
    click: async (e) => {
      const { lat, lng } = e.latlng;

      try {
        const { city, country, Country_code } = await getCityFromCoords(
          lat,
          lng
        );
        setClickedPosition({ lat, lng, city, country, Country_code });
      } catch (err) {
        console.error("Failed to fetch city from coordinates", err);
        setClickedPosition({ lat, lng }); // still set coords
      }
    },
  });

  return null;
}

MapClickHandler.propTypes = {
  onCitySelect: PropTypes.func,
};
