import { ReactElement } from "react";
import { Geometry } from "maptalks";
import { GeometryContextProps } from ".";
export interface GeometryProviderProps {
    children?: ReactElement | ReactElement[];
    geometry: Geometry;
}
export declare function createGeometryContext(geometry: Geometry): GeometryContextProps;
export declare const GeometryProvider: ({ children, geometry, }: GeometryProviderProps) => JSX.Element;
