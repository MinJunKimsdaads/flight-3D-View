import ToggleSwitch from "@/components/common/ToggleSwitch";
import { SETTING_OVERLAYS, THEME_DARK } from "@/constants/settingConstant";
import { useMap } from "@/contexts/MapContext";
import { createSnowOverlay, removeOverlay } from "@/sevices/overlays/overlays";
import { useSettingMapLayerStore } from "@/store/settingStore";
import styles from '@/assets/css/setting/map/MapSnow.module.scss';
import snowImg from '@/assets/img/setting/snow.svg';
import snowDarkImg from '@/assets/img/setting/snow_dark.svg';
import snowActiveImg from '@/assets/img/setting/snow_active.svg';

const MapSnow = ({theme}) => {
    const {map} = useMap();
    const snow = useSettingMapLayerStore(state => state.snow);
    const setSnow = useSettingMapLayerStore(state => state.setSnow);
    const snowHandler = (flag:boolean) => {
        if(flag){
            removeOverlay(map,SETTING_OVERLAYS.SNOW);
        }else{
            const snowOverlay = createSnowOverlay(1,Math.PI / 2,0.5);
            map?.addOverlay(snowOverlay);
        }
        setSnow(!flag)
    };
    return (
        <div className={`${styles.mapSnowBox}`}>
            <img src={snow ? snowActiveImg : theme === THEME_DARK ? snowDarkImg : snowImg} width={40} height={40}/>
            <ToggleSwitch flag={snow} action={()=>{snowHandler(snow)}} />
        </div>
    )
}

export default MapSnow; 