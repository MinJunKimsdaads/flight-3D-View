import styles from '@/assets/css/setting/Setting.module.scss';
import { THEME_DARK } from '@/constants/settingConstant';
import TimeZoneUnits from './units/TimeZoneUnits';
import DistanceUnits from './units/DistanceUnits';
import AltitudeUnits from './units/AltitudeUnits';
import SpeedUnits from './units/SpeedUnits';
import TemperatureUnits from './units/TemperatureUnits';
import { SettingsLang } from '@/constants/languageContants';

const SettingUnits = ({theme,lang}) => {
    const options = [
        {
            key: 'TIMEZONE',
            Component: TimeZoneUnits,
        },
        {
            key: 'DISTANCE',
            Component: DistanceUnits,
        },
        {
            key: 'ALTITUDE',
            Component: AltitudeUnits,
        },
        {
            key: 'SPEED',
            Component: SpeedUnits,
        },
                {
            key: 'TEMPERATURE',
            Component: TemperatureUnits,
        },
    ]
    return (
        <div className={`${styles.setting} ${theme === THEME_DARK && styles.dark}`}>
            {options.map(({key, Component})=>(
                <div key={key} className={`${styles.settingMenu}`}>
                    <div className={`${styles.settingTitle}`}>
                        <strong>{SettingsLang['UNITS'][key][lang]}</strong>
                    </div>
                    <Component/>
                </div>
            ))}
        </div>
    );
}

export default SettingUnits;