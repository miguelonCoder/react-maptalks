import React, { ReactElement, useEffect, useState } from 'react';
import { useMapContext } from "../../context/mapContext";
import {VectorLayer } from 'maptalks'
import { VLayerProvider } from '../../context';

interface VLayerProps {
  idLayer: string,
  children: ReactElement | ReactElement[] | never[],
  getLayer?: (vectorLayer: VectorLayer) => void
}

/**
 * @beta
 */
const VLayer = ({ idLayer, children, getLayer }: VLayerProps) => {

  const { map } = useMapContext()
  const [vLayer, setLayer] = useState<VectorLayer | null>(null)

  useEffect(() => {
    if (map?.options && map?.isLoaded()) {
      const vectorLayer = new VectorLayer(idLayer)
      vectorLayer.addTo(map)
      setLayer(vectorLayer)
      getLayer && getLayer(vectorLayer)
    }
  }, [map])


  return (
    <>
      {vLayer &&
        <VLayerProvider vLayer={vLayer}>
          {children}
        </VLayerProvider>
      }
    </>

  );
};

export default VLayer
