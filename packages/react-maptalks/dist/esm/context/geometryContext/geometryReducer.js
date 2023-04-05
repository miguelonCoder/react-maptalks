import { extendGeometryContext } from ".";
export var geometryReducer = function (state, action) {
    switch (action.type) {
        case "SET_CURRENT_GEOMETRY":
            return extendGeometryContext(state, { currentGeometry: action.payload });
        default:
            return state;
    }
};
//# sourceMappingURL=geometryReducer.js.map