import React, {useEffect} from 'react';
import * as maptalks from "maptalks";
import {useMapContext} from "../../context/mapContext/MaptalksContext";

/**
 * @alpha
 */
const LineVectorLayer = ({lines, idLayer} : any) => {

    const {map} = useMapContext()

    useEffect(()=> {
        if(map && map.id){
            if(!map.getLayer(idLayer)){
                console.log(map)
                let geometry = maptalks.Geometry.fromJSON((lines))
                let lineVectorLayer = new maptalks.VectorLayer(idLayer, geometry)
                map.addLayer(lineVectorLayer)
            }
        }
    }, [lines, map])

    return (
        <></>
    )
}

export default LineVectorLayer
