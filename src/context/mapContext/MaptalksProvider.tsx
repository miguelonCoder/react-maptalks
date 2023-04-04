import React, { ReactElement, useReducer} from "react";
import { Map} from 'maptalks'
import { MaptalksContext, MaptalksContextProps, maptalksReducer } from "./";

export const CONTEXT_VERSION = 1

export interface MaptalksProviderProps {
  children: ReactElement | ReactElement[],
}

export function createMaptalksContext(): MaptalksContextProps{
  return Object.freeze({
    __version: CONTEXT_VERSION,
    vLayers: []
  })
}

export const MaptalksProvider = ({ children }: MaptalksProviderProps) => {

  const initialState = createMaptalksContext()

  const [state, dispatch] = useReducer(maptalksReducer, initialState)

  const setMap = (payload: Map) => dispatch({ type: 'SET_MAP', payload })

  return (
    <MaptalksContext.Provider value={{
      ...state,
      setMap
    }}>
      {children}
    </MaptalksContext.Provider>
  )
}



