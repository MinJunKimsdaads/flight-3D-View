import prohibitedImg from '@/assets/img/setting/prohibit.svg';
import prohibitedDarkImg from '@/assets/img/setting/prohibit_dark.svg';
import prohibitedActiveImg from '@/assets/img/setting/prohibit_active.svg';
import { THEME_DARK } from '@/constants/settingConstant';
import { useSettingMapLayerStore } from '@/store/settingStore';
import ToggleSwitch from '@/components/common/ToggleSwitch';
import { prohibiteAreaLayer } from '@/sevices/maps/layer';
import styles from '@/assets/css/setting/map/MapProhibitedArea.module.scss';

const MapProhibitedArea = ({theme}) => {
    const prohibitedArea = useSettingMapLayerStore(state => state.prohibitedArea);
    const setProhibitedArea = useSettingMapLayerStore(state => state.setProhibitedArea);
    const prohibitHandler = (flag:boolean) => {
        prohibiteAreaLayer.setVisible(!flag)
        setProhibitedArea(!flag)
    };
    return (
        <div className={`${styles.mapProhibitedAreaBox}`}>
            <img src={prohibitedArea ? prohibitedActiveImg : theme === THEME_DARK ? prohibitedDarkImg : prohibitedImg} width={40} height={40}/>
            <ToggleSwitch flag={prohibitedArea} action={()=>{prohibitHandler(prohibitedArea)}}></ToggleSwitch>
        </div>
    );    
}

export default MapProhibitedArea;

