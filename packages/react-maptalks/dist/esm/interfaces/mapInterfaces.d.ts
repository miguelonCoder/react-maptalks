import * as maptalks from "maptalks";
import { Feature, FeatureCollection } from "./geojsonInterfaces";
export interface ImageSymbolOptions {
    markerFile: string;
    markerWidth: number;
    markerHeight: number;
    markerDx?: number;
    markerDy?: number;
    markerOpacity?: number;
}
export interface GeometrySymbolOptions {
    markerType: string;
    markerFill: string;
    markerFillOpacity?: number;
    markerLineColor: string;
    markerLineWidth: number;
    markerLineOpacity?: number;
    markerLineDasharray?: [];
    markerWidth: number;
    markerHeight: number;
    markerDx?: number;
    markerDy?: number;
    markerOpacity?: number;
}
type horizontalAlignement = 'left' | 'middle' | 'right';
type verticalAlignement = 'top' | 'middle' | 'bottom';
type markerPlacement = 'point' | 'vertex' | 'line' | 'vertex-first' | 'vertex-last';
type markerType = 'ellipse' | 'cross' | 'x' | 'diamond' | 'bar' | 'square' | 'triangle' | 'pin' | 'pie';
type textPlacement = 'point' | 'vertex' | 'line' | 'vertex-first' | 'vertex-last';
type textWeight = 'normal' | 'bold' | 'bolder' | 'lighter' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
type textStyle = 'normal' | 'italic' | 'bold';
type textAlign = 'left' | 'center' | 'right';
type lineJoin = 'miter' | 'miter-revert' | 'round' | 'bevel';
type lineCap = 'butt' | 'round' | 'square';
export interface SymbolOptions {
    markerOpacity?: number;
    markerWidth?: number;
    markerHeight?: number;
    markerDx?: number;
    markerDy?: number;
    markerHorizontalAlignment?: horizontalAlignement;
    markerVerticalAlignment?: verticalAlignement;
    markerPlacement?: markerPlacement;
    markerRotation?: number;
    markerFile?: string;
    markerType?: markerType;
    markerFill?: string;
    markerFillPatternFile?: string;
    markerFillOpacity?: number;
    markerLineColor?: string;
    markerLineWidth?: number;
    markerLineOpacity?: number;
    markerLineDasharray?: number[];
    markerLinePatternFile?: string;
    markerPath?: string | object | object[];
    markerPathWidth?: number;
    markerPathHeight?: number;
    textPlacement?: textPlacement;
    textFaceName?: string;
    textFont?: string;
    textWeight?: textWeight;
    textStyle?: textStyle;
    textSize?: number;
    textFill?: string;
    textOpacity?: number;
    textHaloFill?: string;
    textHaloRadius?: number;
    textHaloOpacity?: number;
    textWrapWidth?: number;
    textWrapCharacter?: string;
    textLineSpacing?: number;
    textHorizontalAlignment?: horizontalAlignement;
    textVerticalAlignment?: verticalAlignement;
    textAlign?: textAlign;
    textRotation?: number;
    textDx?: number;
    textDy?: number;
    lineColor?: string;
    lineWidth?: number;
    lineDasharray?: number[];
    lineOpacity?: number;
    lineJoin?: lineJoin;
    lineCap?: lineCap;
    linePatternFile?: string;
    lineDx?: number;
    lineDy?: number;
    polygonFill?: string;
    polygonOpacity?: string;
    polygonPatternFile?: string;
}
export interface GeometryBase {
    idGeometry: string;
    getGeometry?: (geometry: maptalks.Geometry) => void;
}
export interface PointGeometryProps extends GeometryBase {
    points: maptalks.Geometry | Feature | FeatureCollection;
    styles: GeometrySymbolOptions | ImageSymbolOptions;
}
export interface LineGeometryProps extends GeometryBase {
    lines: maptalks.Geometry | Feature | FeatureCollection;
    styles: GeometrySymbolOptions | ImageSymbolOptions;
}
export interface PolygonGeometryProps extends GeometryBase {
    polygons: maptalks.Geometry | Feature | FeatureCollection;
    styles: GeometrySymbolOptions | ImageSymbolOptions;
}
export interface IPositionProps {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
}
export interface IAttributionControlProps {
    position: IPositionProps;
    content: string;
}
export {};
