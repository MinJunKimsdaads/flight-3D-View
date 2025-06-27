import { THEME_DARK } from '@/constants/settingConstant';
import styles from '@/assets/css/setting/visibility/IconColor.module.scss';
import { useSettingMapVisibilityStore } from '@/store/settingStore';
import {SketchPicker} from 'react-color';
import { useState } from 'react';
import { airportLayer, currentAircraftLayer } from '@/sevices/maps/layer';
import { setAircraftStyle, setAirportStyle } from '@/sevices/features/styles';

const HoveredColor = ({theme,lang}) => {
    const aircraftHoveredColor = useSettingMapVisibilityStore(state => state.aircraftHoveredColor);
    const airportHoveredColor = useSettingMapVisibilityStore(state => state.airportHoveredColor); 
    const setAircraftHoveredColor = useSettingMapVisibilityStore(state => state.setAircraftHoveredColor);
    const setAirportHoveredColor = useSettingMapVisibilityStore(state => state.setAirportHoveredColor);
    const [isColorPicker, setIsColorPicker] = useState({
        aircraft:false,
        airport:false,
    });
    const openHandler = (target) => {
        setIsColorPicker((prev)=>({
        ...prev,
        [target]: !prev[target],
      }))  
    };
    const colorHandler = (color,icon) => {
        let source;
        if(icon === 'aircraft'){
            currentAircraftLayer.setStyle(setAircraftStyle(null,color.hex,null));
            source = currentAircraftLayer.getSource();
            setAircraftHoveredColor(color.hex);
        }else if(icon === 'airport'){
            airportLayer.setStyle(setAirportStyle(null,color.hex,null));
            source = airportLayer.getSource();
            setAirportHoveredColor(color.hex);
        }
        if(source){
            source.changed();
        }
    }
    return (
        <div className={`${styles.iconColorBox} ${theme === THEME_DARK && styles.dark}`}>
            <div className={`${styles.iconColor}`}>
                <span>
                    {lang === 'EN' ? 'Aircraft' : '항공기'}
                </span>
                <div className={`${styles.colorBox}`}>
                    <div className={`${styles.colorBtn} ${theme === THEME_DARK && styles.dark}`} style={{backgroundColor:aircraftHoveredColor}} onClick={()=>{openHandler('aircraft')}}></div>
                    {isColorPicker.aircraft && (
                        <div className={`${styles.colorPicker}`}>
                            <SketchPicker color={aircraftHoveredColor} onChange={(color)=>colorHandler(color,'aircraft')}></SketchPicker>
                        </div>
                    )}
                </div>
            </div>
            <div className={`${styles.iconColor}`}>
                <span>
                    {lang === 'EN' ? 'Airport' : '공항'}
                </span>
                <div className={`${styles.colorBox}`}>
                    <div className={`${styles.colorBtn} ${theme === THEME_DARK && styles.dark}`} style={{backgroundColor:airportHoveredColor}} onClick={()=>{openHandler('airport')}}></div>
                    {isColorPicker.airport && (
                        <div className={`${styles.colorPicker}`}>
                            <SketchPicker color={airportHoveredColor} onChange={(color)=>colorHandler(color,'airport')}></SketchPicker>
                        </div>
                    )}
                </div>
            </div>
        </div>  
    )
};

export default HoveredColor