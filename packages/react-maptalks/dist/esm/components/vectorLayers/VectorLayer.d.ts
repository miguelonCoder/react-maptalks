import { ReactElement } from "react";
import { VectorLayer } from "maptalks";
interface VLayerProps {
    idLayer: string;
    children: ReactElement | ReactElement[] | never[];
    getLayer?: (vectorLayer: VectorLayer) => void;
}
/**
 * @beta
 */
declare const VLayer: ({ idLayer, children, getLayer }: VLayerProps) => JSX.Element;
export default VLayer;
