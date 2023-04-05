import React, { useEffect, useRef, ReactElement, memo } from "react";
import * as maptalks from "maptalks";
import { useMapContext } from "../context/mapContext";

export interface MapProps {
  idMap: string;
  children: ReactElement | ReactElement[];
  mapOptions: maptalks.MapOptions | undefined;
  className?: string;
  getMap?: (map: maptalks.Map) => void;
}

/**
 * @beta
 */
const MapComponent = ({
  idMap,
  children,
  mapOptions,
  className,
  getMap,
}: MapProps) => {
  const mapContainerEl = useRef(null);
  const { map, setMap } = useMapContext();

  useEffect(() => {
    if (map && map.options) {
      mapOptions && map.setOptions(mapOptions);
    } else {
      if (mapOptions) {
        const mapInstance = new maptalks.Map(idMap, mapOptions);
        setMap && setMap(mapInstance);
        getMap && getMap(mapInstance);
      }
    }
    return () => {
      map && map.id && map.remove();
    };
  }, [mapOptions]);

  return (
    <>
      <div id={idMap} ref={mapContainerEl} className={className}></div>
      {children}
    </>
  );
};

export default memo(MapComponent);
