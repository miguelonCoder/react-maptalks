import React, { ReactElement, useReducer} from "react";
import { VectorLayer } from 'maptalks'
import { VLayerContext, VLayerContextProps, vLayerReducer } from ".";

const CONTEXT_VERSION = 1

export interface VLayerProviderProps {
  children?: ReactElement | ReactElement[],
  vLayer: VectorLayer
}

export function createVLayerContext(vLayer: VectorLayer): VLayerContextProps{
  return Object.freeze({
    __version: CONTEXT_VERSION,
    currentLayer: vLayer
  })
}

export const VLayerProvider = ({ children, vLayer }: VLayerProviderProps) => {

  const initialState = createVLayerContext(vLayer)

  const [state, dispatch] = useReducer(vLayerReducer, initialState)

  const setCurrentLayer = (payload: VectorLayer) => dispatch({ type: 'SET_CURRENT_LAYER', payload })


  return (
    <VLayerContext.Provider value={{
      ...state,
      setCurrentLayer
    }}>
      {children}
    </VLayerContext.Provider>
  )
}



