import { __assign } from "tslib";
import React, { useReducer } from "react";
import { GeometryContext, geometryReducer } from ".";
var CONTEXT_VERSION = 1;
export function createGeometryContext(geometry) {
    return Object.freeze({
        __version: CONTEXT_VERSION,
        currentGeometry: geometry,
    });
}
export var GeometryProvider = function (_a) {
    var children = _a.children, geometry = _a.geometry;
    var initialState = createGeometryContext(geometry);
    var _b = useReducer(geometryReducer, initialState), state = _b[0], dispatch = _b[1];
    var setCurrentGeometry = function (payload) {
        return dispatch({ type: "SET_CURRENT_GEOMETRY", payload: payload });
    };
    return (React.createElement(GeometryContext.Provider, { value: __assign(__assign({}, state), { setCurrentGeometry: setCurrentGeometry }) }, children));
};
//# sourceMappingURL=GeometryProvider.js.map