import { SETTING_LAYER,THEME_DARK } from "@/constants/settingConstant";
import styles from '@/assets/css/setting/map/MapStyle.module.scss';
import { useSettingMapLayerStore } from "@/store/settingStore";
import { standardLayer } from "@/sevices/maps/layer";

const MapStyle = ({theme}) => {
    const layer = useSettingMapLayerStore(state => state.layer);
    const setLayer = useSettingMapLayerStore(state => state.setLayer);
    const changeToStandardMapLayer = (layer: string) => {
        const source = SETTING_LAYER.find((i)=>layer === i.layer)?.source;
        if(source){
            standardLayer.setSource(source);
            setLayer(layer);
        }
    };
    return (
        <div className={`${styles.mapStyle}`}>
            {SETTING_LAYER.map((i)=>{
                return (
                    <div className={`${styles.mapStyleItem} ${theme === THEME_DARK && styles.dark} ${i.layer === layer && styles.active}`} key={i.layer} onClick={()=>{changeToStandardMapLayer(i.layer);}}>
                        <img src={i.preview}/>
                    </div>
                )
            })}
        </div>
    )
}

export default MapStyle;