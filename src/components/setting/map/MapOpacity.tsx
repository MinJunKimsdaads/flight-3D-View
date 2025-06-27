import { standardLayer } from "@/sevices/maps/layer";
import { useSettingMapLayerStore } from "@/store/settingStore";
import styles from '@/assets/css/setting/map/MapOpacity.module.scss';

const MapOpacity = () => {
    const opacity = useSettingMapLayerStore(state => state.opacity);
    const setOpacity = useSettingMapLayerStore(state => state.setOpacity);
    const opacityHandler = (e) => {
        const value = Number(e.target.value);
        standardLayer.setOpacity(value);
        setOpacity(value);
    }
    return(
        <div className={`${styles.mapOpacity}`}>
            <input type='range' step={0.1} min={0} max={1} value={opacity} onChange={opacityHandler} />
        </div>
    );
}

export default MapOpacity;