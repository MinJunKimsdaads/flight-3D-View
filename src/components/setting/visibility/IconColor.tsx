import { THEME_DARK } from '@/constants/settingConstant';
import styles from '@/assets/css/setting/visibility/IconColor.module.scss';
import { useSettingMapVisibilityStore } from '@/store/settingStore';
import {SketchPicker} from 'react-color';
import { useState } from 'react';
import { airportLayer, currentAircraftLayer } from '@/sevices/maps/layer';
import { setAircraftStyle, setAirportStyle } from '@/sevices/features/styles';

const IconColor = ({theme,lang}) => {
    const aircraftIconColor = useSettingMapVisibilityStore(state => state.aircraftIconColor);
    const airportIconColor = useSettingMapVisibilityStore(state => state.airportIconColor); 
    const setAirCraftIconColor = useSettingMapVisibilityStore(state => state.setAircraftIconColor);
    const setAirportIconColor = useSettingMapVisibilityStore(state => state.setAirportIconColor);
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
            currentAircraftLayer.setStyle(setAircraftStyle(color.hex,null,null));
            source = currentAircraftLayer.getSource();
            setAirCraftIconColor(color.hex);
        }else if(icon === 'airport'){
            airportLayer.setStyle(setAirportStyle(color.hex,null,null));
            source = airportLayer.getSource();
            setAirportIconColor(color.hex);
        }
        if(source){
            source.changed();
        }
    }
    return(
        <div className={`${styles.iconColorBox} ${theme === THEME_DARK && styles.dark}`}>
            <div className={`${styles.iconColor}`}>
                <span>
                    {lang === 'EN' ? 'Aircraft' : '항공기'}
                </span>
                <div className={`${styles.colorBox}`}>
                    <div className={`${styles.colorBtn} ${theme === THEME_DARK && styles.dark}`} style={{backgroundColor:aircraftIconColor}} onClick={()=>{openHandler('aircraft')}}></div>
                    {isColorPicker.aircraft && (
                        <div className={`${styles.colorPicker}`}>
                            <SketchPicker color={aircraftIconColor} onChange={(color)=>colorHandler(color,'aircraft')}></SketchPicker>
                        </div>
                    )}
                </div>
            </div>
            <div className={`${styles.iconColor}`}>
                <span>
                    {lang === 'EN' ? 'Airport' : '공항'}
                </span>
                <div className={`${styles.colorBox}`}>
                    <div className={`${styles.colorBtn} ${theme === THEME_DARK && styles.dark}`} style={{backgroundColor:airportIconColor}} onClick={()=>{openHandler('airport')}}></div>
                    {isColorPicker.airport && (
                        <div className={`${styles.colorPicker}`}>
                            <SketchPicker color={airportIconColor} onChange={(color)=>colorHandler(color,'airport')}></SketchPicker>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
};

export default IconColor;