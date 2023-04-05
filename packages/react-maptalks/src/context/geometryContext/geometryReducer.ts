import { Geometry } from "maptalks";
import { extendGeometryContext, GeometryContextProps } from ".";

type GeometryActionTypes = { type: "SET_CURRENT_GEOMETRY"; payload: Geometry };

export const geometryReducer = (
  state: GeometryContextProps,
  action: GeometryActionTypes
): GeometryContextProps => {
  switch (action.type) {
    case "SET_CURRENT_GEOMETRY":
      return extendGeometryContext(state, { currentGeometry: action.payload });
    default:
      return state;
  }
};
