import { createContext, useContext } from "react";
import { VectorLayer } from "maptalks";

export type VLayerContextProps = Readonly<{
  __version: number;
  currentLayer: VectorLayer | null;
  setCurrentLayer?: (vLayer: VectorLayer) => void;
}>;

export function extendVLayerContext(
  source: VLayerContextProps,
  extra: Partial<VLayerContextProps>
) {
  return Object.freeze({ ...source, ...extra });
}

export const VLayerContext = createContext<VLayerContextProps | null>(null);

export function useVLayerContext(): VLayerContextProps {
  const context = useContext(VLayerContext);
  if (context == null) {
    throw new Error(
      "No context provided: VLayerContext() can only be used in a descendant of <VLayerProvider>"
    );
  }
  return context;
}
