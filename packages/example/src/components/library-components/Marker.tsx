import React, { ReactElement, useEffect, useState, useMemo } from "react";
import * as maptalks from "maptalks";


import {
  GeometryBase,
  GeometryProvider, SymbolOptions, useVLayerContext 
} from "react-maptalks";

const DEFAULT_SYMBOL: SymbolOptions = {
  markerType: "ellipse",
  markerOpacity: 0.5,
  markerWidth: 10,
  markerHeight: 10,
  markerFill: '#f4f4f4'
};

export interface MarkerGeometryProps extends GeometryBase, maptalks.MarkerOptions {
  coordinates: number[];
  getGeometry?: (geometry: maptalks.Geometry) => void;
  children?: ReactElement | ReactElement[];
  dragOnAxis?: string | null
}

/**
 * @beta
 */
const Marker = ({
  idGeometry,
  coordinates,
  getGeometry,
  children,
  visible = true,
  editable = true,
  interactive = true,
  cursor = null,
  measure = 'EPSG:4326',
  draggable = false,
  dragShadow = true,
  dragOnAxis = null,
  symbol = DEFAULT_SYMBOL,
  zIndex,
}: MarkerGeometryProps) => {
  const { currentLayer } = useVLayerContext();
  const [geometry, setGeometry] = useState<maptalks.Geometry | null>(null);

  useEffect(() => {
    if (!currentLayer?.getGeometryById(idGeometry)) {
      const marker = new maptalks.Marker(coordinates, options);
      currentLayer && marker.addTo(currentLayer);
      setGeometry(marker);
      getGeometry && getGeometry(marker);
    }
  }, [currentLayer]);

  const options = useMemo(()=> {
    console.log(symbol)
    return {
      id: idGeometry,
      visible,
      editable,
      interactive,
      cursor,
      measure,
      draggable,
      dragShadow,
      dragOnAxis,
      symbol,
      zIndex,
    }
  }, [])

  return (
    <>
      {geometry && (
        <GeometryProvider geometry={geometry}>{children}</GeometryProvider>
      )}
    </>
  );
};

export default Marker;

