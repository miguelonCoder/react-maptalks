import React, { useEffect } from "react";
import * as maptalks from "maptalks";
import { useMapContext } from "../../context/mapContext/MaptalksContext";

/**
 * @alpha
 */
const LineVectorLayer = ({ lines, idLayer }: any) => {
  const { map } = useMapContext();

  useEffect(() => {
    if (map && map.id) {
      if (!map.getLayer(idLayer)) {
        console.log(map);
        const geometry = maptalks.Geometry.fromJSON(lines);
        const lineVectorLayer = new maptalks.VectorLayer(idLayer, geometry);
        map.addLayer(lineVectorLayer);
      }
    }
  }, [lines, map, idLayer]);

  return <></>;
};

export default LineVectorLayer;
