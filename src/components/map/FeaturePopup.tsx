import { TYPE_AIRCRAFT, TYPE_AIRPORT, TYPE_PROHIBITED_AREA } from "@/constants/featureConstants";
import AircraftHoveredPopup from "./hoveredPopup/AircraftHoveredPopup";
import AirportHoveredPopup from "./hoveredPopup/AirportHoveredPopup";
import styles from '@/assets/css/map/featureHoveredPopup.module.scss';
import { THEME_DARK } from "@/constants/settingConstant";
import { useMap } from "@/contexts/MapContext";
import { useEffect, useState } from "react";
import ProhibitedHoveredPopup from "./hoveredPopup/ProhibitedHoveredPopup";
import { Feature, MapBrowserEvent } from "ol";
import { currentAircraftLayer } from "@/sevices/maps/layer";
import { useRightMenuStore } from "@/store/rightMenuStore";
import { useFeatureHoverStore } from "@/store/featureStore";

const FeaturePopup = () => {
    const {map} = useMap();
    const hoveredAircraft = useFeatureHoverStore(state => state.hoveredAircraft);
    const theme = useRightMenuStore(state=>state.theme);
    const [pixel,setPixel] = useState({
        x:0,
        y:0,
    });

    useEffect(() => {
        if (!map) return;
        const handler = (event: MapBrowserEvent) => {
            const pixel = event.pixel;
            const features = map.getFeaturesAtPixel(pixel);
            const hovered = features?.[0] || null;
            const type = hovered?.get('type');
            const isValidHover = !!type;

            map.getTargetElement().style.cursor = isValidHover ? 'pointer' : '';
            
            const { hoveredAircraft, setHoveredAircraft } = useFeatureHoverStore.getState();

            if (!isValidHover) {
                if (hoveredAircraft) {
                    (hoveredAircraft as Feature)?.set('hover', false);
                    setHoveredAircraft(null);
                    const source = currentAircraftLayer.getSource();
                    if (source) source.changed();
                }
                setPixel({ x: 0, y: 0 });
                return;
            }
            setPixel({
                x:pixel[0],
                y:pixel[1],
            })
            if (hovered !== hoveredAircraft) {
                if (hoveredAircraft) {
                    (hoveredAircraft as Feature)?.set('hover', false);
                }
                if (hovered) {
                    (hovered as Feature)?.set('hover', true);
                }
                setHoveredAircraft(hovered);
                const source = currentAircraftLayer.getSource();
                if (source) source.changed();
            }
        };
            map.on('pointermove', handler);

        return () => {
            map.un('pointermove', handler);
        };
    }, [map]);
    if(hoveredAircraft){
        return (
            <div className={`${styles.hoverPopupBox} ${theme === THEME_DARK && styles.dark}`} style={{left:`${pixel.x}px`,top:`${pixel.y}px`}}>
                {hoveredAircraft?.getProperties().type === TYPE_AIRCRAFT && <AircraftHoveredPopup props={hoveredAircraft.getProperties()} theme={theme}></AircraftHoveredPopup>}
                {hoveredAircraft?.getProperties().type === TYPE_AIRPORT && <AirportHoveredPopup props={hoveredAircraft.getProperties()} theme={theme}></AirportHoveredPopup>}
                {hoveredAircraft?.getProperties().type === TYPE_PROHIBITED_AREA && <ProhibitedHoveredPopup props={hoveredAircraft.getProperties()} theme={theme}></ProhibitedHoveredPopup>}
            </div>
        )
    }else{
        return null;    
    }
}

export default FeaturePopup;
