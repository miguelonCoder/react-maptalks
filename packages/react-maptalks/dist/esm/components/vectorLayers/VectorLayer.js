import React, { useEffect, useState } from "react";
import { useMapContext } from "../../context/mapContext";
import { VectorLayer } from "maptalks";
import { VLayerProvider } from "../../context";
/**
 * @beta
 */
var VLayer = function (_a) {
    var idLayer = _a.idLayer, children = _a.children, getLayer = _a.getLayer;
    var map = useMapContext().map;
    var _b = useState(null), vLayer = _b[0], setLayer = _b[1];
    useEffect(function () {
        if ((map === null || map === void 0 ? void 0 : map.options) && (map === null || map === void 0 ? void 0 : map.isLoaded())) {
            var vectorLayer = new VectorLayer(idLayer);
            vectorLayer.addTo(map);
            setLayer(vectorLayer);
            getLayer && getLayer(vectorLayer);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [map]);
    return (React.createElement(React.Fragment, null, vLayer && React.createElement(VLayerProvider, { vLayer: vLayer }, children)));
};
export default VLayer;
//# sourceMappingURL=VectorLayer.js.map