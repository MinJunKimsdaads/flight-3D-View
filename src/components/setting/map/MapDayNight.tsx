import { useSettingMapLayerStore } from '@/store/settingStore';
import styles from '@/assets/css/setting/map/MapDayNight.module.scss';
import dayNightImg from '@/assets/img/setting/dayNight.svg';
import dayNightDarkImg from '@/assets/img/setting/dayNight_dark.svg';
import dayNightActiveImg from '@/assets/img/setting/dayNight_active.svg';
import { THEME_DARK } from '@/constants/settingConstant';
import ToggleSwitch from '@/components/common/ToggleSwitch';

const MapDayNight = ({theme}) => {
  const dayNight = useSettingMapLayerStore(state => state.dayNight);
  const setDayNight = useSettingMapLayerStore(state => state.setDayNight);;
  const dayNightHandler = (flag:boolean) => {
    setDayNight(!flag)
  }
  return (
    <div className={`${styles.mapDayNightBox}`}>
        <img src={dayNight ? dayNightActiveImg : theme === THEME_DARK ? dayNightDarkImg : dayNightImg} width={40} height={40}/>
        <ToggleSwitch flag={dayNight} action={()=>{dayNightHandler(dayNight)}} />
    </div>
  )  
};

export default MapDayNight;