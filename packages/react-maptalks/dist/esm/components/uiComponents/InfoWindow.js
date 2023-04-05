import { useCallback, useEffect } from "react";
import { ui } from "maptalks";
import { useGeometryContext } from "../../context";
/**
 * @alpha
 */
export var InfoWindow = function (_a) {
    var children = _a.children, options = _a.options;
    var currentGeometry = useGeometryContext().currentGeometry;
    useEffect(function () {
        bindInfoWindow();
    }, [currentGeometry, options, children]);
    var bindInfoWindow = useCallback(function () {
        var infoWindow = new ui.InfoWindow(options);
        currentGeometry && infoWindow.addTo(currentGeometry);
    }, [options]);
    return null;
};
//# sourceMappingURL=InfoWindow.js.map