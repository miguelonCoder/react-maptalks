import { ReactElement } from "react";
export interface InfoWindowProps {
    children: ReactElement | ReactElement[] | string;
    options: object;
}
/**
 * @alpha
 */
export declare const InfoWindow: ({ children, options }: InfoWindowProps) => null;
