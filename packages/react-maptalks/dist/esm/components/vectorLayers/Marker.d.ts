import { ReactElement } from "react";
import * as maptalks from "maptalks";
import { GeometryBase } from "../../interfaces";
export interface MarkerGeometryProps extends GeometryBase, maptalks.MarkerOptions {
    coordinates: number[];
    getGeometry?: (geometry: maptalks.Geometry) => void;
    children?: ReactElement | ReactElement[];
    dragOnAxis?: string | null;
}
/**
 * @beta
 */
declare const Marker: ({ idGeometry, coordinates, getGeometry, children, visible, editable, interactive, cursor, measure, draggable, dragShadow, dragOnAxis, symbol, zIndex, }: MarkerGeometryProps) => JSX.Element;
export default Marker;
