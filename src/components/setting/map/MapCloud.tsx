import ToggleSwitch from "@/components/common/ToggleSwitch";
import { SETTING_OVERLAYS, THEME_DARK } from "@/constants/settingConstant";
import { useMap } from "@/contexts/MapContext";
import { createCloudOverlay, removeOverlay } from "@/sevices/overlays/overlays";
import { useSettingMapLayerStore } from "@/store/settingStore";
import styles from '@/assets/css/setting/map/MapCloud.module.scss';
import cloudImg from '@/assets/img/setting/cloud.svg';
import cloudDarkImg from '@/assets/img/setting/cloud_dark.svg';
import cloudActiveImg from '@/assets/img/setting/cloud_active.svg';

const MapCloud = ({theme}) => {
  const {map} = useMap();
    const cloud = useSettingMapLayerStore(state => state.cloud);
    const setCloud = useSettingMapLayerStore(state => state.setCloud);
    const cloudHandler = (flag:boolean) => {
        if(flag){
            removeOverlay(map,SETTING_OVERLAYS.CLOUD);
        }else{
            const cloudOverlay = createCloudOverlay(2,Math.PI / 3,2);
            map?.addOverlay(cloudOverlay);
        }
        setCloud(!flag);
    };
  return(
    <div className={`${styles.mapCloudBox}`}>
        <img src={cloud ? cloudActiveImg : theme === THEME_DARK ? cloudDarkImg : cloudImg} width={40} height={40}/>
        <ToggleSwitch flag={cloud} action={()=>{cloudHandler(cloud)}}></ToggleSwitch>
    </div>
  ); 
}

export default MapCloud;