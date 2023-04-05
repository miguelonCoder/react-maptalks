import { __assign } from "tslib";
import React, { useReducer } from "react";
import { VLayerContext, vLayerReducer } from ".";
var CONTEXT_VERSION = 1;
export function createVLayerContext(vLayer) {
    return Object.freeze({
        __version: CONTEXT_VERSION,
        currentLayer: vLayer,
    });
}
export var VLayerProvider = function (_a) {
    var children = _a.children, vLayer = _a.vLayer;
    var initialState = createVLayerContext(vLayer);
    var _b = useReducer(vLayerReducer, initialState), state = _b[0], dispatch = _b[1];
    var setCurrentLayer = function (payload) {
        return dispatch({ type: "SET_CURRENT_LAYER", payload: payload });
    };
    return (React.createElement(VLayerContext.Provider, { value: __assign(__assign({}, state), { setCurrentLayer: setCurrentLayer }) }, children));
};
//# sourceMappingURL=VLayerProvider.js.map