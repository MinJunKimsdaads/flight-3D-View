import styles from '@/assets/css/map/AirportHoveredPopup.module.scss';
import { THEME_DARK } from '@/constants/settingConstant';
const AirportHoveredPopup = ({props,theme}) => {
    return (
        <div className={`${styles.airportHoveredPopup} ${theme === THEME_DARK && styles.dark}`}>
            <div className={`${styles.name}`}><strong>{props.name ? props.name:'-'}</strong></div>
            <div className={`${styles.country}`}>{props.country ? props.country:'-'}</div>
            <div className={`${styles.code}`}>
                <span>{props.iata ? props.iata:'-'}</span>
                <span>{props.icao ? props.icao:'-'}</span>
            </div>
        </div>
    )
}

export default AirportHoveredPopup;