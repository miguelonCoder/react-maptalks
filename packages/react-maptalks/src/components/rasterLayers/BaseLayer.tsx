import React, { useEffect } from "react";
import * as maptalks from "maptalks";
import { useMapContext } from "../../context/mapContext";

export interface BaseLayerProps {
  id: string;
  options: maptalks.TileLayerOptions;
}

export const BaseLayer = ({ id, options }: BaseLayerProps) => {
  const { map } = useMapContext();

  useEffect(() => {
    if (map && map.options) {
      const tileLayer = new maptalks.TileLayer(id, options);
      map.setBaseLayer(tileLayer);
    }
  });

  return <></>;
};
