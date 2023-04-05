import { VectorLayer } from "maptalks";
import { VLayerContextProps } from ".";
type VLayerActionTypes = {
    type: "SET_CURRENT_LAYER";
    payload: VectorLayer;
};
export declare const vLayerReducer: (state: VLayerContextProps, action: VLayerActionTypes) => VLayerContextProps;
export {};
