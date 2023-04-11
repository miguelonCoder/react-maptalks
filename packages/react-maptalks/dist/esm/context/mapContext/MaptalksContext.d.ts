import { Map, VectorLayer, Geometry } from "maptalks";
export type MaptalksContextProps = Readonly<{
    __version: number;
    map?: Map | null;
    vLayers: VectorLayer[];
    currentLayer?: VectorLayer;
    currentGeometry?: Geometry;
    setMap?: (map: Map) => void;
    addVLayer?: (vLayer: VectorLayer) => void;
    setCurrentLayer?: (vLayer: Geometry) => void;
    setCurrentGeometry?: (vLayer: Geometry) => void;
}>;
export declare function extendMaptalksContext(source: MaptalksContextProps, extra: Partial<MaptalksContextProps>): Readonly<{
    __version: number;
    map?: Map | null | undefined;
    vLayers: VectorLayer[];
    currentLayer?: VectorLayer | undefined;
    currentGeometry?: Geometry | undefined;
    setMap?: ((map: Map) => void) | undefined;
    addVLayer?: ((vLayer: VectorLayer) => void) | undefined;
    setCurrentLayer?: ((vLayer: Geometry) => void) | undefined;
    setCurrentGeometry?: ((vLayer: Geometry) => void) | undefined;
}>;
export declare const MaptalksContext: import("react").Context<Readonly<{
    __version: number;
    map?: Map | null | undefined;
    vLayers: VectorLayer[];
    currentLayer?: VectorLayer | undefined;
    currentGeometry?: Geometry | undefined;
    setMap?: ((map: Map) => void) | undefined;
    addVLayer?: ((vLayer: VectorLayer) => void) | undefined;
    setCurrentLayer?: ((vLayer: Geometry) => void) | undefined;
    setCurrentGeometry?: ((vLayer: Geometry) => void) | undefined;
}> | null>;
export declare function useMapContext(): MaptalksContextProps;
