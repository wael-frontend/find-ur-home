import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function GeoTrafficMap() {
  return (
    <div className="  text-white p-6 shadow-lg w-full h-[200px]">
      <h2 className="text-xl font-semibold mb-4 text-black">
        Geography Based Traffic
      </h2>
      <ComposableMap
        projectionConfig={{ scale: 120 }}
        style={{ width: "100%", height: "100%" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#374151" // default gray
                stroke="#111827"
                style={{
                  default: { outline: "none" },
                  hover: { fill: "#34d399", outline: "none" },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}
