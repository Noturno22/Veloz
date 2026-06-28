import { ComposableMap, Geographies, Geography, Marker, Line } from "react-simple-maps";

// Public world topojson (110m)
const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

type Hub = { name: string; coords: [number, number] };
const HUBS: Hub[] = [
  { name: "New York", coords: [-74.006, 40.7128] },
  { name: "São Paulo", coords: [-46.6333, -23.5505] },
  { name: "Geneva", coords: [6.1432, 46.2044] },
  { name: "Luanda", coords: [13.2343, -8.8383] },
  { name: "Dubai", coords: [55.2708, 25.2048] },
  { name: "Singapore", coords: [103.8198, 1.3521] },
  { name: "Shanghai", coords: [121.4737, 31.2304] },
];

const ROUTES: [number, number][] = [
  [3, 1], // Luanda → São Paulo
  [3, 2], // Luanda → Geneva
  [3, 4], // Luanda → Dubai
  [4, 5], // Dubai → Singapore
  [5, 6], // Singapore → Shanghai
  [2, 0], // Geneva → NY
  [0, 1], // NY → SP
];

export function WorldMap() {
  return (
    <div className="relative w-full">
      <ComposableMap
        projection="geoEqualEarth"
        projectionConfig={{ scale: 155 }}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="var(--gold-soft)"
                stroke="var(--gold)"
                strokeOpacity={0.35}
                strokeWidth={0.4}
                style={{
                  default: { outline: "none" },
                  hover: { fill: "color-mix(in oklab, var(--gold) 35%, transparent)", outline: "none" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {ROUTES.map(([a, b]) => (
          <Line
            key={`${a}-${b}`}
            from={HUBS[a].coords}
            to={HUBS[b].coords}
            stroke="var(--gold)"
            strokeWidth={1}
            strokeOpacity={0.55}
            strokeLinecap="round"
            strokeDasharray="3 4"
          />
        ))}

        {HUBS.map((h, i) => (
          <Marker key={h.name} coordinates={h.coords}>
            <circle r={7} fill="var(--gold)" fillOpacity={0.18}>
              <animate attributeName="r" values="4;12;4" dur="2.6s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
              <animate attributeName="opacity" values="0.6;0;0.6" dur="2.6s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
            </circle>
            <circle r={3} fill="var(--gold)" stroke="#fff" strokeWidth={1} />
            <text
              y={-10}
              textAnchor="middle"
              className="fill-foreground"
              style={{ fontSize: 7, fontWeight: 600, letterSpacing: "0.05em" }}
            >
              {h.name.toUpperCase()}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
}
