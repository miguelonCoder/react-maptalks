import { __assign } from "tslib";
import { createContext, useContext } from "react";
export function extendMaptalksContext(source, extra) {
    return Object.freeze(__assign(__assign({}, source), extra));
}
export var MaptalksContext = createContext(null);
export function useMapContext() {
    var context = useContext(MaptalksContext);
    if (context == null) {
        throw new Error("No context provided: useMaptalksContext() can only be used in a descendant of <MaptalksProvider>");
    }
    return context;
}
//# sourceMappingURL=MaptalksContext.js.map