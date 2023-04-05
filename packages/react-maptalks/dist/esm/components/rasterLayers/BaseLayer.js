import React, { useEffect } from "react";
import * as maptalks from "maptalks";
import { useMapContext } from "../../context/mapContext";
export var BaseLayer = function (_a) {
    var id = _a.id, options = _a.options;
    var map = useMapContext().map;
    useEffect(function () {
        if (map && map.options) {
            var tileLayer = new maptalks.TileLayer(id, options);
            map.setBaseLayer(tileLayer);
        }
    });
    return React.createElement(React.Fragment, null);
};
//# sourceMappingURL=BaseLayer.js.map