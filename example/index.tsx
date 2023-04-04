import * as maptalks from 'maptalks'
import { useState, useEffect } from 'react'
import React = require('react')
import { MaptalksProvider, MapComponent, AttributionControl, BaseLayer, VLayer } from '../src'

import styles from './map.module.css'

import { MarkerItem } from './MarkerItem'

export default function Map() {

    //Use state to manage the map options and save the map instance.
    const [mapOptions, setMapOptions] = useState<maptalks.MapOptions>()
    const [map, getMap] = useState<maptalks.Map>()

    //set options to the new map instance for this component
    useEffect(() => {
        setMapOptions({
            center: [-76.4, 3.4],
            zoom: 17,
        })
    }, [])

    return (
        <MaptalksProvider>
            <div className={styles.mapContainer} >
                <MapComponent
                    idMap="myMap"
                    mapOptions={mapOptions}
                    className={styles.map}
                    getMap={getMap}
                >
                    <AttributionControl
                        position={{ bottom: '5px', left: '5px' }}
                        content={'<strong>This is my custom attribution</strong>'}
                    />
                    <BaseLayer
                        id="1345"
                        options={{
                            urlTemplate: 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
                            subdomains: ["a", "b", "c", "d"]
                        }}
                    />

                    <VLayer idLayer='example'>
                        <MarkerItem
                            id='myFirstId'
                            coordinates={[-76.4, 3.4]}
                        />
                        <MarkerItem
                            id='mySecondId'
                            coordinates={[-76.43, 3.4]}
                        />
                        <MarkerItem
                            id='myThirdId'
                            coordinates={[-76.43, 3.4]}
                        />
                    </VLayer>
                </MapComponent>
            </div>
        </MaptalksProvider>
    );
}