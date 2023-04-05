import { extendMaptalksContext } from "./";
export var maptalksReducer = function (state, action) {
    switch (action.type) {
        case "SET_MAP":
            return extendMaptalksContext(state, { map: action.payload });
        default:
            return state;
    }
};
//# sourceMappingURL=maptalksReducer.js.map