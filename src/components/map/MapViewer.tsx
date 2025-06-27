import { useMap } from "@/contexts/MapContext";
import Map from "ol/Map";
import View from "ol/View";
import { useEffect, useRef } from "react";
import {defaults as defaultControls} from "ol/control";
import 'ol/ol.css';
import '@/assets/css/ol/control.scss';
import { airportLayer, currentAircraftLayer, dayNightLayer, prohibiteAreaLayer, standardLayer, weatherLayer } from "@/sevices/maps/layer";
import AircraftUpdater from "./AircraftUpdater";
import { fromLonLat } from "ol/proj";
import {defaults as defaultInteractions} from 'ol/interaction/defaults.js';
import FeaturePopup from "./FeaturePopup";
import AirportUpdater from "./AirportUpdater";
import { MapBrowserEvent } from "ol";
import { useFeatureSelectStore } from "@/store/featureStore";

const MapViewer = () => {
    const mapRef = useRef<HTMLDivElement | null>(null);
    const {setMap} = useMap();

    const aircraftSource = currentAircraftLayer.getSource();
    const airportSource = airportLayer.getSource();

    useEffect(()=>{
        if(!mapRef.current) return;
        const map = new Map({
            target: mapRef.current,
            layers: [
                standardLayer,
                weatherLayer,
                dayNightLayer,
                airportLayer,
                currentAircraftLayer,
                prohibiteAreaLayer,
            ],
            view: new View({
                center: fromLonLat([127.1388684,37.4449168]),
                zoom: 7,
                minZoom: 0,
                maxZoom: 17,
            }),
            controls: defaultControls({
                attribution: false,
                zoom: false,
                rotate: false,
            }),
            interactions: defaultInteractions({
                altShiftDragRotate: false,  // Alt+Shift+드래그 회전 비활성화
                pinchRotate: false          // 터치 회전 비활성화 (두 손가락 회전)
            }),
        });
        const clickHandler = (event: MapBrowserEvent) => {
            const pixel = event.pixel;
            const features = map.getFeaturesAtPixel(pixel);
            const clickedFeature = features?.[0] ?? null;

            const { setSelectedFeature } = useFeatureSelectStore.getState();

            if (clickedFeature && clickedFeature.get('click_type')) {
                setSelectedFeature(clickedFeature);
            }
        };
        map.on('singleclick',clickHandler);
        setMap(map);
        return ()=>{
            map.setTarget(undefined);
            map.un('singleclick', clickHandler);
        };
    },[setMap]);
    
    return (
        <div ref={mapRef} style={{width:'100%', height:"100vh"}}>
            {aircraftSource && <AircraftUpdater source={aircraftSource} />}
            {airportSource && <AirportUpdater source={airportSource}/>}
            <FeaturePopup></FeaturePopup>
        </div>
    )
};

export default MapViewer;