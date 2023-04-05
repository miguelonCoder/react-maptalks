import React, { useEffect } from "react";
import * as maptalks from "maptalks";
import { useMapContext } from "../../context/mapContext/MaptalksContext";
/**
 * @alpha
 */
var LineVectorLayer = function (_a) {
    var lines = _a.lines, idLayer = _a.idLayer;
    var map = useMapContext().map;
    useEffect(function () {
        if (map && map.id) {
            if (!map.getLayer(idLayer)) {
                console.log(map);
                var geometry = maptalks.Geometry.fromJSON(lines);
                var lineVectorLayer = new maptalks.VectorLayer(idLayer, geometry);
                map.addLayer(lineVectorLayer);
            }
        }
    }, [lines, map]);
    return React.createElement(React.Fragment, null);
};
export default LineVectorLayer;
//# sourceMappingURL=LineVectorLayer.js.map