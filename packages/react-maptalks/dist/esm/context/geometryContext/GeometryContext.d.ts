/// <reference types="react" />
import { Geometry } from "maptalks";
export type GeometryContextProps = Readonly<{
    __version: number;
    currentGeometry: Geometry | null;
    setCurrentGeometry?: (geometry: Geometry) => void;
}>;
export declare function extendGeometryContext(source: GeometryContextProps, extra: Partial<GeometryContextProps>): Readonly<{
    __version: number;
    currentGeometry: Geometry | null;
    setCurrentGeometry?: ((geometry: Geometry) => void) | undefined;
}>;
export declare const GeometryContext: import("react").Context<Readonly<{
    __version: number;
    currentGeometry: Geometry | null;
    setCurrentGeometry?: ((geometry: Geometry) => void) | undefined;
}> | null>;
export declare function useGeometryContext(): GeometryContextProps;
