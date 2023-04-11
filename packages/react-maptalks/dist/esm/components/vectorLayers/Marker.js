import React, { useEffect, useState, useMemo } from "react";
import * as maptalks from "maptalks";
import { GeometryProvider, useVLayerContext } from "../../context";
var DEFAULT_SYMBOL = {
    markerType: "ellipse",
    markerOpacity: 0.5,
    markerWidth: 10,
    markerHeight: 10,
    markerFill: '#f4f4f4'
};
/**
 * @beta
 */
var Marker = function (_a) {
    var idGeometry = _a.idGeometry, coordinates = _a.coordinates, getGeometry = _a.getGeometry, children = _a.children, _b = _a.visible, visible = _b === void 0 ? true : _b, _c = _a.editable, editable = _c === void 0 ? true : _c, _d = _a.interactive, interactive = _d === void 0 ? true : _d, _e = _a.cursor, cursor = _e === void 0 ? null : _e, _f = _a.measure, measure = _f === void 0 ? 'EPSG:4326' : _f, _g = _a.draggable, draggable = _g === void 0 ? false : _g, _h = _a.dragShadow, dragShadow = _h === void 0 ? true : _h, _j = _a.dragOnAxis, dragOnAxis = _j === void 0 ? null : _j, _k = _a.symbol, symbol = _k === void 0 ? DEFAULT_SYMBOL : _k, zIndex = _a.zIndex;
    var currentLayer = useVLayerContext().currentLayer;
    var _l = useState(null), geometry = _l[0], setGeometry = _l[1];
    useEffect(function () {
        if (!(currentLayer === null || currentLayer === void 0 ? void 0 : currentLayer.getGeometryById(idGeometry))) {
            var marker = new maptalks.Marker(coordinates, options);
            currentLayer && marker.addTo(currentLayer);
            setGeometry(marker);
            getGeometry && getGeometry(marker);
        }
    }, [currentLayer]);
    var options = useMemo(function () {
        console.log(symbol);
        return {
            id: idGeometry,
            visible: visible,
            editable: editable,
            interactive: interactive,
            cursor: cursor,
            measure: measure,
            draggable: draggable,
            dragShadow: dragShadow,
            dragOnAxis: dragOnAxis,
            symbol: symbol,
            zIndex: zIndex,
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (React.createElement(React.Fragment, null, geometry && (React.createElement(GeometryProvider, { geometry: geometry }, children))));
};
export default Marker;
//# sourceMappingURL=Marker.js.map