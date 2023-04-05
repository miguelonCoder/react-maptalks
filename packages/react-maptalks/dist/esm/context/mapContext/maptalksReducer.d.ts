import { Map } from "maptalks";
import { MaptalksContextProps } from "./";
type MaptalksActionType = {
    type: "SET_MAP";
    payload: Map;
};
export declare const maptalksReducer: (state: MaptalksContextProps, action: MaptalksActionType) => MaptalksContextProps;
export {};
