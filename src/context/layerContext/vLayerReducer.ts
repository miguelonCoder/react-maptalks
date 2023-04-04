import {VectorLayer} from 'maptalks'
import { extendVLayerContext, VLayerContextProps } from "."

type VLayerActionTypes =
  | { type: 'SET_CURRENT_LAYER', payload: VectorLayer }



export const vLayerReducer = (state: VLayerContextProps, action: VLayerActionTypes): VLayerContextProps => {
  switch (action.type) {
    case 'SET_CURRENT_LAYER':
      return extendVLayerContext(state, {currentLayer: action.payload})
    default: return state
  }
}