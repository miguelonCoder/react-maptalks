import { __assign } from "tslib";
import { createContext, useContext } from "react";
export function extendVLayerContext(source, extra) {
    return Object.freeze(__assign(__assign({}, source), extra));
}
export var VLayerContext = createContext(null);
export function useVLayerContext() {
    var context = useContext(VLayerContext);
    if (context == null) {
        throw new Error("No context provided: VLayerContext() can only be used in a descendant of <VLayerProvider>");
    }
    return context;
}
//# sourceMappingURL=VLayerContext.js.map