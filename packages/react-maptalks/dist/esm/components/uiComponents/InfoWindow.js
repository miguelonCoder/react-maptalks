import React, { useCallback, useEffect, useMemo } from "react";
import { ui } from "maptalks";
import ReactDomServer from 'react-dom/server';
import './infoWindow.css';
import { useGeometryContext } from "../../context";
/**
 * @alpha
 */
export var InfoWindow = function (_a) {
    var _b = _a.children, children = _b === void 0 ? React.createElement(React.Fragment, null) : _b, _c = _a.eventsPropagation, eventsPropagation = _c === void 0 ? false : _c, _d = _a.eventsToStop, eventsToStop = _d === void 0 ? false : _d, _e = _a.autoPan, autoPan = _e === void 0 ? true : _e, _f = _a.autoOpenOn, autoOpenOn = _f === void 0 ? 'click' : _f, _g = _a.autoCloseOn, autoCloseOn = _g === void 0 ? 'click' : _g, _h = _a.autoPanDuration, autoPanDuration = _h === void 0 ? false : _h, _j = _a.dx, dx = _j === void 0 ? 0 : _j, _k = _a.dy, dy = _k === void 0 ? 0 : _k, _l = _a.single, single = _l === void 0 ? true : _l, _m = _a.animation, animation = _m === void 0 ? 'fade' : _m, _o = _a.animationDuration, animationDuration = _o === void 0 ? 300 : _o, _p = _a.pitchWithMap, pitchWithMap = _p === void 0 ? false : _p, _q = _a.rotateWithMap, rotateWithMap = _q === void 0 ? false : _q, _r = _a.custom, custom = _r === void 0 ? false : _r;
    var currentGeometry = useGeometryContext().currentGeometry;
    useEffect(function () {
        bindInfoWindow();
        console.log('options: ', autoOpenOn);
    }, [currentGeometry, children]);
    var options = useMemo(function () {
        var content = !custom ?
            ReactDomServer.renderToString(React.createElement(WindowContainer, null, children)) :
            ReactDomServer.renderToString(children);
        return {
            eventsPropagation: eventsPropagation,
            eventsToStop: eventsToStop,
            content: content,
            autoPan: autoPan,
            autoOpenOn: autoOpenOn,
            autoCloseOn: autoCloseOn,
            autoPanDuration: autoPanDuration,
            dx: dx,
            dy: dy,
            single: single,
            animation: animation,
            animationDuration: animationDuration,
            pitchWithMap: pitchWithMap,
            rotateWithMap: rotateWithMap
        };
    }, []);
    var bindInfoWindow = useCallback(function () {
        var infoWindow = new ui.InfoWindow(options);
        currentGeometry && infoWindow.addTo(currentGeometry);
    }, [options]);
    return null;
};
/**
 * Wrap InfoWindow content into a default style template
 */
var WindowContainer = function (_a) {
    var children = _a.children;
    return (React.createElement("div", { className: "infowindow-container" },
        React.createElement("div", { className: "infowindow-content" }, children),
        React.createElement("div", { className: "infowindow-tip-container" },
            React.createElement("div", { className: "infowindow-tooltip" }))));
};
//# sourceMappingURL=InfoWindow.js.map