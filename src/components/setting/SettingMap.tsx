import { THEME_DARK } from '@/constants/settingConstant';
import MapStyle from './map/MapStyle';
import styles from '@/assets/css/setting/Setting.module.scss';
import MapOpacity from './map/MapOpacity';
import MapBrightness from './map/MapBrightness';
import MapSnow from './map/MapSnow';
import MapRain from './map/MapRain';
import MapCloud from './map/MapCloud';
import MapProhibitedArea from './map/MapProhibitedArea';
import MapDayNight from './map/MapDayNight';
import { SettingsLang } from '@/constants/languageContants';
const SettingMap = ({theme,lang}) => {
    const options = [
        {
            key: 'STYLE',
            Component: MapStyle,
            props: { theme },
        },
        {
            key: 'OPACITY',
            Component: MapOpacity,
            props: { theme },
        },
        {
            key: 'BRIGHTNESS',
            Component: MapBrightness,
            props: { theme },
        },
        {
            key: 'PROHIBITEDAREA',
            Component: MapProhibitedArea,
            props: { theme },
        },
        {
            key: 'DAYNIGHT',
            Component: MapDayNight,
            props: { theme },
        },
        {
            key: 'RAIN',
            Component: MapRain,
            props: { theme },
        },
        {
            key: 'CLOUD',
            Component: MapCloud,
            props: { theme },
        },
        {
            key: 'SNOW',
            Component: MapSnow,
            props: { theme },
        },
    ]
    return (
        <div className={`${styles.setting} ${theme === THEME_DARK && styles.dark}`}>
            {options.map(({key, Component,props}) => (
                <div key={key} className={`${styles.settingMenu}`}>
                    <div><strong>{SettingsLang['MAP'][key][lang]}</strong></div>
                    <Component {...props}/>
                </div>
            ))}
        </div>
    );
    
}

export default SettingMap;