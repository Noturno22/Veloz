import type { ReactNode, CSSProperties } from "react";

interface Geography {
  rsmKey: string;
  properties: Record<string, unknown>;
  geometry: Record<string, unknown>;
  type: string;
  id: string;
}

interface ComposableMapProps {
  projection?: string;
  projectionConfig?: { scale?: number; center?: [number, number] };
  style?: CSSProperties;
  children?: ReactNode;
}

interface GeographiesProps {
  geography: string;
  children: (data: { geographies: Geography[] }) => ReactNode;
}

interface GeographyProps {
  geography: Geography;
  fill?: string;
  stroke?: string;
  strokeOpacity?: number;
  strokeWidth?: number;
  style?: {
    default?: CSSProperties;
    hover?: CSSProperties;
    pressed?: CSSProperties;
  };
}

interface MarkerProps {
  coordinates: [number, number];
  children?: ReactNode;
}

interface LineProps {
  from: [number, number];
  to: [number, number];
  stroke?: string;
  strokeWidth?: number;
  strokeOpacity?: number;
  strokeLinecap?: "round" | "butt" | "square";
  strokeDasharray?: string;
}

declare module "react-simple-maps" {
  export const ComposableMap: React.FC<ComposableMapProps>;
  export const Geographies: React.FC<GeographiesProps>;
  export const Geography: React.FC<GeographyProps>;
  export const Marker: React.FC<MarkerProps>;
  export const Line: React.FC<LineProps>;
}
