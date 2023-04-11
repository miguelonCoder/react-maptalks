import * as maptalks from "maptalks";
import React, { useEffect } from "react";
import { useMapContext } from "../../context/mapContext";
import { IAttributionControlProps } from "../../interfaces/mapInterfaces";

/**
 * @alpha
 */
export const AttributionControl = ({
  position,
  content,
}: IAttributionControlProps) => {
  const { map } = useMapContext();

  useEffect(() => {
    if (map && map.options) {
      const attribution = new maptalks.control.Attribution({
        position,
        content,
      });
      attribution.addTo(map);
    }
  }, [map, content, position]);
  return <></>;
};
