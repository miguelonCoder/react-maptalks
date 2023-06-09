import { useEffect } from "react";
import * as maptalks from "maptalks";

export const useLayerEvent = (
  layer: maptalks.VectorLayer | undefined,
  typeEvent: string,
  handler: () => void
) => {
  useEffect(() => {
    layer?.getGeometries()?.forEach((geometry: maptalks.Geometry) => {
      geometry.on(typeEvent, handler);
    });
    return removeEventHandler;
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [layer]);

  const removeEventHandler = () =>
    layer?.getGeometries()?.forEach((geometry: maptalks.Geometry) => {
      geometry.off(typeEvent, handler);
    });

  return removeEventHandler;
};
