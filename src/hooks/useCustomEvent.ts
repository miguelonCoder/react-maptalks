import { useEffect } from 'react';
import * as maptalks from 'maptalks'

export const useCustomEvent = (layer: maptalks.VectorLayer, nameEvent: string, handler: () => void) => {
  useEffect(() => {
    if (layer) {
      const geometries = layer.getGeometries()
      geometries.forEach((geometry: maptalks.Geometry) => {
        geometry.addEventListener(nameEvent, handler)
      })
    }
    return removeHandler 
  }, [layer])

  const removeHandler : () => void = () => layer?.off(nameEvent, handler)

  return removeHandler
}