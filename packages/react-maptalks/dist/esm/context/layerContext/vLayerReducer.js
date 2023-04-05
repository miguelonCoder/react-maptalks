import { extendVLayerContext } from ".";
export var vLayerReducer = function (state, action) {
    switch (action.type) {
        case "SET_CURRENT_LAYER":
            return extendVLayerContext(state, { currentLayer: action.payload });
        default:
            return state;
    }
};
//# sourceMappingURL=vLayerReducer.js.map