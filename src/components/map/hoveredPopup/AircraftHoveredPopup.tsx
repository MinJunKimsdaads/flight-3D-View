import styles from '@/assets/css/map/AircraftHoveredPopup.module.scss';
import { formatTimestamp } from "@/util/util";
import { THEME_DARK } from '@/constants/settingConstant';
import { useSettingExtStore } from '@/store/settingStore';
const AircraftHoveredPopup = ({props,theme}) => {
    const timeUnits = useSettingExtStore(state => state.timeUnits);
    return (
        <div className={`${styles.aircraftHoveredPopup} ${theme === THEME_DARK && styles.dark}`}>
            <div className={`${styles.callsign}`}><strong>{props ? props.callsign:'-'}</strong></div>
            <div className={`${styles.country}`}>{props.origin_country}</div>
            <div className={`${styles.contact}`}>{formatTimestamp(props.last_contact*1000,timeUnits)}</div>
        </div>
    )
}

export default AircraftHoveredPopup;