declare module "react-simple-maps" {
  import { ComponentType, ReactNode } from "react";

  interface ComposableMapProps {
    projection?: string;
    projectionConfig?: Record<string, unknown>;
    style?: React.CSSProperties;
    children?: ReactNode;
  }

  interface GeographiesProps {
    geography: string;
    children: (args: { geographies: Array<{ rsmKey: string }> }) => ReactNode;
  }

  interface GeographyProps {
    geography: { rsmKey: string };
    fill?: string;
    stroke?: string;
    strokeOpacity?: number;
    strokeWidth?: number;
    style?: Record<string, React.CSSProperties>;
  }

  interface LineProps {
    from: [number, number];
    to: [number, number];
    stroke?: string;
    strokeWidth?: number;
    strokeOpacity?: number;
    strokeLinecap?: string;
    strokeDasharray?: string;
  }

  interface MarkerProps {
    coordinates: [number, number];
    children?: ReactNode;
  }

  export const ComposableMap: ComponentType<ComposableMapProps>;
  export const Geographies: ComponentType<GeographiesProps>;
  export const Geography: ComponentType<GeographyProps>;
  export const Marker: ComponentType<MarkerProps>;
  export const Line: ComponentType<LineProps>;
}
