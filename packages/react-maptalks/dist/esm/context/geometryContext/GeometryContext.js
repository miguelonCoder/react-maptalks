import { __assign } from "tslib";
import { createContext, useContext } from "react";
export function extendGeometryContext(source, extra) {
    return Object.freeze(__assign(__assign({}, source), extra));
}
export var GeometryContext = createContext(null);
export function useGeometryContext() {
    var context = useContext(GeometryContext);
    if (context == null) {
        throw new Error("No context provided: GeometryContext() can only be used in a descendant of <GeometryProvider>");
    }
    return context;
}
//# sourceMappingURL=GeometryContext.js.map