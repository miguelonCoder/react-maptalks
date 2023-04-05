import { ReactElement } from "react";
import * as maptalks from "maptalks";
import { GeometryBase, GeometrySymbolOptions, ImageSymbolOptions } from "../../interfaces/mapInterfaces";
export interface MarkerGeometryProps extends GeometryBase {
    coordinates: number[];
    geometrySymbolOptions?: GeometrySymbolOptions;
    imageSymbolOptions?: ImageSymbolOptions;
    getGeometry?: (geometry: maptalks.Geometry) => void;
    children?: ReactElement | ReactElement[];
}
/**
 * @beta
 */
declare const Marker: ({ idGeometry, coordinates, geometrySymbolOptions, imageSymbolOptions, getGeometry, children, }: MarkerGeometryProps) => JSX.Element;
export default Marker;
