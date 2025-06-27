import { setAircraftStyle, setAirportStyle } from "@/sevices/features/styles";
import { airportLayer, currentAircraftLayer } from "@/sevices/maps/layer";
import { useSettingMapVisibilityStore } from "@/store/settingStore";
import styles from '@/assets/css/setting/visibility/IconScale.module.scss';

const IconScale = ({lang}) => {
    const aircraftIconScale = useSettingMapVisibilityStore(state => state.aircraftIconScale);
    const airportIconScale = useSettingMapVisibilityStore(state => state.airportIconScale);
    const setAircraftIconScale = useSettingMapVisibilityStore(state => state.setAircraftIconScale);
    const setAirportIconScale  = useSettingMapVisibilityStore(state => state.setAirportIconScale);

    const scaleHandler = (e) => {
        const value = Number(e.target.value);
        const name = e.target.name;
        let source;
        if(name === 'aircraft'){
            currentAircraftLayer.setStyle(setAircraftStyle(null,null,value));
            source = currentAircraftLayer.getSource();
            setAircraftIconScale(value);
        }else if(name === 'airport'){
            airportLayer.setStyle(setAirportStyle(null,null,value));
            source = airportLayer.getSource();
            setAirportIconScale(value);
        }
        if(source){
            source.changed();
        }
    };
    const scaleArr = [
      {
        name:'aircraft',
        title:lang === 'EN' ? 'Aircraft' : '항공기',
        value: aircraftIconScale
      },
      {
        name:'airport',
        title:lang === 'EN' ? 'Airport' : '공항',
        value: airportIconScale
      },
    ];
    return (
        <div>
            {scaleArr.map((i)=>(
                <div key={i.name} className={`${styles.iconScaleBox}`}>
                    <div>{i.title}</div>
                    <div className={`${styles.iconScale}`}>
                        <input type='range' name={i.name} step={0.1} min={0.5} max={2} value={i.value} onChange={scaleHandler} />
                    </div>
                </div>
            ))}
        </div>
    )
};

export default IconScale;