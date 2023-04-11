import React, { useEffect, useRef, memo } from "react";
import * as maptalks from "maptalks";
import { useMapContext } from "../context/mapContext";
/**
 * @beta
 */
var MapComponent = function (_a) {
    var idMap = _a.idMap, children = _a.children, mapOptions = _a.mapOptions, className = _a.className, getMap = _a.getMap;
    var mapContainerEl = useRef(null);
    var _b = useMapContext(), map = _b.map, setMap = _b.setMap;
    useEffect(function () {
        if (map && map.options) {
            mapOptions && map.setOptions(mapOptions);
        }
        else {
            if (mapOptions) {
                var mapInstance = new maptalks.Map(idMap, mapOptions);
                setMap && setMap(mapInstance);
                getMap && getMap(mapInstance);
            }
        }
        return function () {
            map && map.id && map.remove();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mapOptions]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { id: idMap, ref: mapContainerEl, className: className }),
        children));
};
export default memo(MapComponent);
//# sourceMappingURL=MapComponent.js.map