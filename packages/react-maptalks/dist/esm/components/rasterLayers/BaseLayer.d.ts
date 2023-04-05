/// <reference types="react" />
import * as maptalks from "maptalks";
export interface BaseLayerProps {
    id: string;
    options: maptalks.TileLayerOptions;
}
export declare const BaseLayer: ({ id, options }: BaseLayerProps) => JSX.Element;
