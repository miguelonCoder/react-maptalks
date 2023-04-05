import { ReactElement } from "react";
import { MaptalksContextProps } from "./";
export declare const CONTEXT_VERSION = 1;
export interface MaptalksProviderProps {
    children: ReactElement | ReactElement[];
}
export declare function createMaptalksContext(): MaptalksContextProps;
export declare const MaptalksProvider: ({ children }: MaptalksProviderProps) => JSX.Element;
