import { createContext, useContext} from 'react'
import { Map, VectorLayer, Geometry} from 'maptalks'

export type MaptalksContextProps = Readonly<{
    __version: number
    map?: Map | null
    vLayers: VectorLayer[]
    currentLayer?:VectorLayer
    currentGeometry?:Geometry
    setMap?: (map: Map) => void
    addVLayer?: (vLayer: VectorLayer) => void
    setCurrentLayer?: (vLayer: Geometry) => void
    setCurrentGeometry?: (vLayer: Geometry) => void
}>

export function extendMaptalksContext( source: MaptalksContextProps, extra: Partial<MaptalksContextProps>) {
    return Object.freeze({...source, ...extra})
  }

export const MaptalksContext = createContext<MaptalksContextProps | null>(null)

export function useMapContext(): MaptalksContextProps {
  const context = useContext(MaptalksContext)
  if (context == null) {
    throw new Error(
      'No context provided: useMaptalksContext() can only be used in a descendant of <MaptalksProvider>',
    )
  }
  return context
}