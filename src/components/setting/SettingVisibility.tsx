import { THEME_DARK } from '@/constants/settingConstant';
import styles from '@/assets/css/setting/Setting.module.scss';
import IconColor from './visibility/IconColor';
import HoveredColor from './visibility/HoveredColor';
import IconScale from './visibility/IconScale';
import IntervalTime from './visibility/IntervalTime';
import { SettingsLang } from '@/constants/languageContants';

const SettingVisibility = ({theme,lang}) => {
    const options = [
        {
            key: 'ICONCOLOR',
            Component: IconColor,
        },
        {
            key: 'HOVEREDCOLOR',
            Component: HoveredColor,
        },
        {
            key: 'ICONSCALE',
            Component: IconScale,
        },
        {
            key: 'INTERVALTIME',
            Component: IntervalTime,
        },
    ];
    return (
        <div className={`${styles.setting} ${theme === THEME_DARK && styles.dark}`}>
            {options.map(({ key, Component }) => (
                <div key={key} className={`${styles.settingMenu}`}>
                    <div className={styles.settingTitle}>
                        <strong>{SettingsLang['VISIBILITY'][key][lang]}</strong>
                    </div>
                    <Component theme={theme} lang={lang} />
                </div>
            ))}
        </div>
    );
}

export default SettingVisibility;