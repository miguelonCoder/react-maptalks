import React, { useEffect, useState } from "react";
import * as maptalks from "maptalks";
import { GeometryProvider, useVLayerContext } from "../../context";
var DEFAULT_SYMBOL = {
    markerType: "ellipse",
    markerWidth: 20,
    markerHeight: 30,
};
/**
 * @beta
 */
var Marker = function (_a) {
    var idGeometry = _a.idGeometry, coordinates = _a.coordinates, geometrySymbolOptions = _a.geometrySymbolOptions, imageSymbolOptions = _a.imageSymbolOptions, getGeometry = _a.getGeometry, children = _a.children;
    var currentLayer = useVLayerContext().currentLayer;
    var _b = useState(null), geometry = _b[0], setGeometry = _b[1];
    useEffect(function () {
        if (!(currentLayer === null || currentLayer === void 0 ? void 0 : currentLayer.getGeometryById(idGeometry))) {
            var marker = new maptalks.Marker(coordinates, {
                id: idGeometry,
            });
            marker.setSymbol(DEFAULT_SYMBOL);
            geometrySymbolOptions && marker.updateSymbol(geometrySymbolOptions);
            imageSymbolOptions && marker.updateSymbol(imageSymbolOptions);
            currentLayer && marker.addTo(currentLayer);
            setGeometry(marker);
            getGeometry && getGeometry(marker);
        }
    }, [currentLayer]);
    return (React.createElement(React.Fragment, null, geometry && (React.createElement(GeometryProvider, { geometry: geometry }, children))));
};
export default Marker;
//# sourceMappingURL=Marker.js.map