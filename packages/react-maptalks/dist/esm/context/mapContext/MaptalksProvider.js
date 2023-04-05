import { __assign } from "tslib";
import React, { useReducer } from "react";
import { MaptalksContext, maptalksReducer } from "./";
export var CONTEXT_VERSION = 1;
export function createMaptalksContext() {
    return Object.freeze({
        __version: CONTEXT_VERSION,
        vLayers: [],
    });
}
export var MaptalksProvider = function (_a) {
    var children = _a.children;
    var initialState = createMaptalksContext();
    var _b = useReducer(maptalksReducer, initialState), state = _b[0], dispatch = _b[1];
    var setMap = function (payload) { return dispatch({ type: "SET_MAP", payload: payload }); };
    return (React.createElement(MaptalksContext.Provider, { value: __assign(__assign({}, state), { setMap: setMap }) }, children));
};
//# sourceMappingURL=MaptalksProvider.js.map