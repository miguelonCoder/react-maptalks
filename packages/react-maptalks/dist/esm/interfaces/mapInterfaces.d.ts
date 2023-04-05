import * as maptalks from "maptalks";
import { Feature, FeatureCollection } from "./geojsonInterfaces";
export interface ImageSymbolOptions {
    markerFile: string;
    markerWidth: number;
    markerHeight: number;
    markerDx?: number;
    markerDy?: number;
    markerOpacity?: number;
}
export interface GeometrySymbolOptions {
    markerType: string;
    markerFill: string;
    markerFillOpacity?: number;
    markerLineColor: string;
    markerLineWidth: number;
    markerLineOpacity?: number;
    markerLineDasharray?: [];
    markerWidth: number;
    markerHeight: number;
    markerDx?: number;
    markerDy?: number;
    markerOpacity?: number;
}
export interface GeometryBase {
    idGeometry: string;
    getGeometry?: (geometry: maptalks.Geometry) => void;
}
export interface PointGeometryProps extends GeometryBase {
    points: maptalks.Geometry | Feature | FeatureCollection;
    styles: GeometrySymbolOptions | ImageSymbolOptions;
}
export interface LineGeometryProps extends GeometryBase {
    lines: maptalks.Geometry | Feature | FeatureCollection;
    styles: GeometrySymbolOptions | ImageSymbolOptions;
}
export interface PolygonGeometryProps extends GeometryBase {
    polygons: maptalks.Geometry | Feature | FeatureCollection;
    styles: GeometrySymbolOptions | ImageSymbolOptions;
}
export interface IPositionProps {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
}
export interface IAttributionControlProps {
    position: IPositionProps;
    content: string;
}
