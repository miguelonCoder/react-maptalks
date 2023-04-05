/// <reference types="react" />
import { VectorLayer } from "maptalks";
export type VLayerContextProps = Readonly<{
    __version: number;
    currentLayer: VectorLayer | null;
    setCurrentLayer?: (vLayer: VectorLayer) => void;
}>;
export declare function extendVLayerContext(source: VLayerContextProps, extra: Partial<VLayerContextProps>): Readonly<{
    __version: number;
    currentLayer: VectorLayer | null;
    setCurrentLayer?: ((vLayer: VectorLayer) => void) | undefined;
}>;
export declare const VLayerContext: import("react").Context<Readonly<{
    __version: number;
    currentLayer: VectorLayer | null;
    setCurrentLayer?: ((vLayer: VectorLayer) => void) | undefined;
}> | null>;
export declare function useVLayerContext(): VLayerContextProps;
