import "leaflet-control-geocoder";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import PropTypes from "prop-types";
PropTypes;
function SearchControl({ setClickedPosition }) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const geocoder = L.Control.geocoder({
      defaultMarkGeocode: false,
    })
      .on("markgeocode", function (e) {
        const { center } = e.geocode;
        map.setView(center, 13);

        setClickedPosition({
          lat: center.lat,
          lng: center.lng,
          city: e.geocode.name,
        });

        L.marker(center).addTo(map).bindPopup(e.geocode.name).openPopup();
      })
      .addTo(map);

    return () => map.removeControl(geocoder);
  }, [map, setClickedPosition]);

  return null;
}
SearchControl.propTypes = {
  setClickedPosition: PropTypes.func.isRequired,
};
export default SearchControl;
