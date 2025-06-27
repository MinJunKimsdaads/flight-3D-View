import { SETTING_BASEMAP } from "@/constants/settingConstant";
import { useSettingMapLayerStore } from "@/store/settingStore";
import styles from '@/assets/css/setting/map/MapBrightness.module.scss';

const MapBrightness = () => {
    const brightness = useSettingMapLayerStore(state => state.brightness);
    const setBrightness = useSettingMapLayerStore(state => state.setBrightness);
    const brightnessHandler = (e) => {
        const value = Number(e.target.value);
        const basemap = document.querySelector(`.${SETTING_BASEMAP}`);
        if(basemap instanceof HTMLElement){
            basemap.style.filter = `brightness(${value}%)`;
        }
        setBrightness(value);
    }
    return (
        <div className={`${styles.mapBrightness}`}>
            <input type='range' step={1} min={0} max={100} value={brightness} onChange={brightnessHandler} />
        </div>
    )
};

export default MapBrightness;