import { ReactElement } from "react";
import { VectorLayer } from "maptalks";
import { VLayerContextProps } from ".";
export interface VLayerProviderProps {
    children?: ReactElement | ReactElement[];
    vLayer: VectorLayer;
}
export declare function createVLayerContext(vLayer: VectorLayer): VLayerContextProps;
export declare const VLayerProvider: ({ children, vLayer }: VLayerProviderProps) => JSX.Element;
