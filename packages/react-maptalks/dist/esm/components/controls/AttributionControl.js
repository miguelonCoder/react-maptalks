import * as maptalks from "maptalks";
import React, { useEffect } from "react";
import { useMapContext } from "../../context/mapContext";
/**
 * @alpha
 */
export var AttributionControl = function (_a) {
    var position = _a.position, content = _a.content;
    var map = useMapContext().map;
    useEffect(function () {
        if (map && map.options) {
            var attribution = new maptalks.control.Attribution({
                position: position,
                content: content,
            });
            attribution.addTo(map);
        }
    }, [map, content, position]);
    return React.createElement(React.Fragment, null);
};
//# sourceMappingURL=AttributionControl.js.map