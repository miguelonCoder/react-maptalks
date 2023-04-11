import React, { useState } from 'react'
import * as maptalks from 'maptalks'
import { InfoWindow, SymbolOptions, Marker } from 'react-maptalks'
import logo from '../assets/logo192.png';

interface MarkerItemProps {
  coordinates: [number, number],
  id: string
}

const DEFAULT_SYMBOL: SymbolOptions = {
  markerType: "ellipse",
  markerWidth: 30,
  markerHeight: 30,
  markerFile: logo
};

export const MarkerItem = ({ coordinates, id }: MarkerItemProps) => {

  const [geometry, setGeometry] = useState<maptalks.Geometry | null>(null)

  return (
    <Marker
      idGeometry={id}
      coordinates={coordinates}
      getGeometry={setGeometry}
      symbol={DEFAULT_SYMBOL}
    >
      <InfoWindow autoOpenOn="click"animation='scale' animationDuration={1000}>
        <WindowContent title="Hola" message="Tia Yeshica"/>
      </InfoWindow>
    </Marker>
  )
}

const WindowContent = ({title, message}: {title: string, message: string})=> {
  const handleClick = ()=> {
    alert('clicked')
  }
  return (<>
    <h4>{ title }</h4>
    <p>{ message }</p>
    <button onClick={handleClick}>click</button>
  </>)
}
