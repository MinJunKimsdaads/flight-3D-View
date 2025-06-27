import ToggleSwitch from "@/components/common/ToggleSwitch";
import { SETTING_OVERLAYS, THEME_DARK } from "@/constants/settingConstant";
import { useMap } from "@/contexts/MapContext";
import { createRainOverlay, removeOverlay } from "@/sevices/overlays/overlays";
import { useSettingMapLayerStore } from "@/store/settingStore";
import styles from '@/assets/css/setting/map/MapRain.module.scss';
import rainImg from '@/assets/img/setting/rain.svg';
import rainDarkImg from '@/assets/img/setting/rain_dark.svg';
import rainActiveImg from '@/assets/img/setting/rain_active.svg';

const MapRain = ({theme}) => {
    const {map} = useMap();
    const rain = useSettingMapLayerStore(state => state.rain);
    const setRain = useSettingMapLayerStore(state => state.setRain);
    const rainHandler = (flag:boolean) => {
        if(flag){
            removeOverlay(map,SETTING_OVERLAYS.RAIN);
        }else{
            const rainOverlay = createRainOverlay(1,2*Math.PI / 5,5);
            map?.addOverlay(rainOverlay);
        }
        setRain(!flag);
    };
  return(
    <div className={`${styles.mapRainBox}`}>
        <img src={rain ? rainActiveImg : theme === THEME_DARK ? rainDarkImg : rainImg} width={40} height={40}/>
        <ToggleSwitch flag={rain} action={()=>{rainHandler(rain)}}></ToggleSwitch>
    </div>
  ); 
};

export default MapRain;