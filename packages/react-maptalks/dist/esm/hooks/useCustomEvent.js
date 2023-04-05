import { useEffect } from "react";
export var useCustomEvent = function (layer, nameEvent, handler) {
    useEffect(function () {
        if (layer) {
            var geometries = layer.getGeometries();
            geometries.forEach(function (geometry) {
                geometry.addEventListener(nameEvent, handler);
            });
        }
        return removeHandler;
    }, [layer]);
    var removeHandler = function () { return layer === null || layer === void 0 ? void 0 : layer.off(nameEvent, handler); };
    return removeHandler;
};
//# sourceMappingURL=useCustomEvent.js.map