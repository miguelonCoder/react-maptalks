export interface FeatureCollection {
    type: string;
    features: Feature[];
    id?: string | number;
    title?: string;
    bbox?: number[] | string[];
}
export interface Feature {
    type: string;
    geometry: Geometry;
    properties: any;
    id?: string | number;
    title?: string;
    bbox?: number[] | string[];
}
export interface Geometry {
    type: string;
    coordinates: [number, number] | [number, number][] | [number, number][][];
    id?: string | number;
    title?: string;
    bbox?: number[] | string[];
}
export declare enum typeGeometry {
    Point = "Point",
    LineString = "LineString",
    Polygon = "Polygon",
    MultiPoint = "MultiPoint",
    MultiLineString = "MultiLineString",
    MultiPolygon = "MultiPolygon"
}
