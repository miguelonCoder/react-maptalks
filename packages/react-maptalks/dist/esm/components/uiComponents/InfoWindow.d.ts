import { JSXElementConstructor, ReactElement } from "react";
import { ui } from "maptalks";
import './infoWindow.css';
export interface InfoWindowProps extends ui.UIComponentOptions {
    children?: ReactElement<any, string | JSXElementConstructor<any>>;
    autoOpenOn: string;
    autoCloseOn?: string;
    custom?: boolean;
}
/**
 * @alpha
 */
export declare const InfoWindow: ({ children, eventsPropagation, eventsToStop, autoPan, autoOpenOn, autoCloseOn, autoPanDuration, dx, dy, single, animation, animationDuration, pitchWithMap, rotateWithMap, custom }: InfoWindowProps) => null;
