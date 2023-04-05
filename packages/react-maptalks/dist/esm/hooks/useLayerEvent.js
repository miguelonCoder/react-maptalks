import { useEffect } from "react";
export var useLayerEvent = function (layer, typeEvent, handler) {
    useEffect(function () {
        var _a;
        (_a = layer === null || layer === void 0 ? void 0 : layer.getGeometries()) === null || _a === void 0 ? void 0 : _a.forEach(function (geometry) {
            geometry.on(typeEvent, handler);
        });
        return removeEventHandler;
    }, [layer]);
    var removeEventHandler = function () {
        var _a;
        return (_a = layer === null || layer === void 0 ? void 0 : layer.getGeometries()) === null || _a === void 0 ? void 0 : _a.forEach(function (geometry) {
            geometry.off(typeEvent, handler);
        });
    };
    return removeEventHandler;
};
//# sourceMappingURL=useLayerEvent.js.map