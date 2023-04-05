import React, { useState } from 'react'
import * as maptalks from 'maptalks'
import { InfoWindow, Marker } from 'react-maptalks'

interface MarkerItemProps {
  coordinates: [number, number],
  id: string
}

export const MarkerItem = ({ coordinates, id }: MarkerItemProps) => {

  const [geometry, setGeometry] = useState<maptalks.Geometry | null>(null)

  const [options, setOptions] = useState({
    title: 'title',
    content: id,
    autoOpenOn : 'click',  //set to null if not to open when clicking on marker
    autoCloseOn : 'click',
    animation: 'scale',
    animationDuration: 2000
  })

  return (
    <Marker
      idGeometry={id}
      coordinates={coordinates}
      getGeometry={setGeometry}
    >
      <InfoWindow options={options}>
        Hi
      </InfoWindow>
    </Marker>
  )
}