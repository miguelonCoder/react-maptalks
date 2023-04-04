import React, { ReactElement, useReducer } from "react";
import { Geometry } from 'maptalks'
import { GeometryContext, GeometryContextProps, geometryReducer } from ".";

const CONTEXT_VERSION = 1

export interface GeometryProviderProps {
  children?: ReactElement | ReactElement[],
  geometry: Geometry
}

export function createGeometryContext(geometry: Geometry): GeometryContextProps{
  return Object.freeze({
    __version: CONTEXT_VERSION,
    currentGeometry: geometry
  })
}

export const GeometryProvider = ({ children, geometry }: GeometryProviderProps) => {

  const initialState = createGeometryContext(geometry)

  const [state, dispatch] = useReducer(geometryReducer, initialState)

  const setCurrentGeometry = (payload: Geometry) => dispatch({ type: 'SET_CURRENT_GEOMETRY', payload })


  return (
    <GeometryContext.Provider value={{
      ...state,
      setCurrentGeometry
    }}>
      {children}
    </GeometryContext.Provider>
  )
}



