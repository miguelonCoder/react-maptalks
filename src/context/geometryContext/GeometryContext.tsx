import { createContext, useContext } from 'react'
import { Geometry } from 'maptalks'

export type GeometryContextProps = Readonly<{
  __version: number
  currentGeometry: Geometry | null
  setCurrentGeometry?: (geometry: Geometry) => void
}>

export function extendGeometryContext(source: GeometryContextProps, extra: Partial<GeometryContextProps>) {
  return Object.freeze({ ...source, ...extra })
}

export const GeometryContext = createContext<GeometryContextProps | null>(null)

export function useGeometryContext(): GeometryContextProps {
  const context = useContext(GeometryContext)
  if (context == null) {
    throw new Error(
      'No context provided: GeometryContext() can only be used in a descendant of <GeometryProvider>',
    )
  }
  return context
}