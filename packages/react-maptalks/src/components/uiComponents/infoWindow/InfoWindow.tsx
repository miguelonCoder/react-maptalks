import React, { JSXElementConstructor, ReactElement, useCallback, useEffect, useMemo } from "react";
import { ui } from "maptalks";
import ReactDomServer from 'react-dom/server';
import { useGeometryContext } from "../../../context";
import { DefaultWindow } from "./DefaultWindow";

export interface InfoWindowProps extends ui.UIComponentOptions {
  children?: ReactElement<any, string | JSXElementConstructor<any>>;
  autoOpenOn: string,
  autoCloseOn?: string,
  custom?: boolean
}
/**
 * @alpha
 */
export const InfoWindow = ({
  children = <></>,
  eventsPropagation = false,
  eventsToStop = false,
  autoPan = true,
  autoOpenOn = 'click',
  autoCloseOn = 'click',
  autoPanDuration = false,
  dx = 0,
  dy = 0,
  single = true,
  animation = 'fade',
  animationDuration = 300,
  pitchWithMap = false,
  rotateWithMap = false,
  custom = false
}: InfoWindowProps) => {
  const { currentGeometry } = useGeometryContext();

  const options = useMemo(() => {
    const content = !custom ?
      ReactDomServer.renderToString(<DefaultWindow>{children}</DefaultWindow>) :
      ReactDomServer.renderToString(children)
    return {
      eventsPropagation,
      eventsToStop,
      content,
      autoPan,
      autoOpenOn,
      autoCloseOn,
      autoPanDuration,
      dx,
      dy,
      single,
      animation,
      animationDuration,
      pitchWithMap,
      rotateWithMap
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const bindInfoWindow = useCallback(() => {
    const infoWindow = new ui.InfoWindow(options);
    currentGeometry && infoWindow.addTo(currentGeometry);
  }, [options]);

  useEffect(() => {
    bindInfoWindow();
  }, [currentGeometry, children, bindInfoWindow]);

  return null;
};
