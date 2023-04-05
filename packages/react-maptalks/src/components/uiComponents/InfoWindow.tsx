import { ReactElement, useCallback, useEffect } from "react";
import { ui } from "maptalks";
import { useGeometryContext } from "../../context";

export interface InfoWindowProps {
  children: ReactElement | ReactElement[] | string;
  options: object;
}
/**
 * @alpha
 */
export const InfoWindow = ({ children, options }: InfoWindowProps) => {
  const { currentGeometry } = useGeometryContext();

  useEffect(() => {
    bindInfoWindow();
  }, [currentGeometry, options, children]);

  const bindInfoWindow = useCallback(() => {
    const infoWindow = new ui.InfoWindow(options);
    currentGeometry && infoWindow.addTo(currentGeometry);
  }, [options]);

  return null
};
