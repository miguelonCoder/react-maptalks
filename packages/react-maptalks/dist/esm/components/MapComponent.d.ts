import React, { ReactElement } from "react";
import * as maptalks from "maptalks";
export interface MapProps {
    idMap: string;
    children: ReactElement | ReactElement[];
    mapOptions: maptalks.MapOptions | undefined;
    className?: string;
    getMap?: (map: maptalks.Map) => void;
}
declare const _default: React.MemoExoticComponent<({ idMap, children, mapOptions, className, getMap, }: MapProps) => JSX.Element>;
export default _default;
