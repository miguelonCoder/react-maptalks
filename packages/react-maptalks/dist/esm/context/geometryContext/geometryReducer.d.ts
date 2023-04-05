import { Geometry } from "maptalks";
import { GeometryContextProps } from ".";
type GeometryActionTypes = {
    type: "SET_CURRENT_GEOMETRY";
    payload: Geometry;
};
export declare const geometryReducer: (state: GeometryContextProps, action: GeometryActionTypes) => GeometryContextProps;
export {};
