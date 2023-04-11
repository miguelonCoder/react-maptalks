import { Map } from "maptalks";
import { extendMaptalksContext, MaptalksContextProps } from ".";

type MaptalksActionType = { type: "SET_MAP"; payload: Map };

export const maptalksReducer = (
  state: MaptalksContextProps,
  action: MaptalksActionType
): MaptalksContextProps => {
  switch (action.type) {
    case "SET_MAP":
      return extendMaptalksContext(state, { map: action.payload });
    default:
      return state;
  }
};
