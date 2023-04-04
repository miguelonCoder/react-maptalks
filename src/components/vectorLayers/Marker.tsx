import React, { ReactElement, useEffect, useState } from 'react';
import * as maptalks from 'maptalks'
import { GeometryBase, GeometrySymbolOptions, ImageSymbolOptions } from '../../interfaces/mapInterfaces';
import { GeometryProvider, useVLayerContext } from '../../context';

const DEFAULT_SYMBOL = {
  markerType: 'ellipse',
  markerWidth: 20,
  markerHeight: 30
}

export interface MarkerGeometryProps extends GeometryBase {
  coordinates: number[],
  geometrySymbolOptions?: GeometrySymbolOptions,
  imageSymbolOptions?: ImageSymbolOptions,
  getGeometry?: (geometry: maptalks.Geometry) => void,
  children?: ReactElement | ReactElement[]
}

/**
 * @beta
 */
const Marker = ({ idGeometry, coordinates, geometrySymbolOptions, imageSymbolOptions, getGeometry, children }: MarkerGeometryProps) => {

  const { currentLayer } = useVLayerContext()
  const [geometry, setGeometry] = useState<maptalks.Geometry | null>(null)

  useEffect(() => {
    if (!currentLayer?.getGeometryById(idGeometry)) {
      let marker = new maptalks.Marker(coordinates, {
        id: idGeometry
      })

      marker.setSymbol(DEFAULT_SYMBOL)
      geometrySymbolOptions && marker.updateSymbol(geometrySymbolOptions)
      imageSymbolOptions && marker.updateSymbol(imageSymbolOptions)
      currentLayer && marker.addTo(currentLayer)
      setGeometry(marker)
      getGeometry && getGeometry(marker)
    }

  }, [currentLayer])


  return (
    <>
      {
        geometry &&
        <GeometryProvider geometry={geometry}>
          { children }
        </GeometryProvider>
      }
    </>
  );
};

export default Marker
