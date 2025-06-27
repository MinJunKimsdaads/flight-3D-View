import { SETTING_UNITS, SETTING_MAP, SETTING_VISIBILITY, THEME_DARK } from "@/constants/settingConstant";
import { useState } from "react";
import SettingMap from "./SettingMap";
import SettingVisibility from "./SettingVisibility";
import SettingUnits from "./SettingUnits";
import styles from '@/assets/css/setting/SettingBox.module.scss';
import { SETTING } from "@/constants/controlerConstant";
import closeImg from '@/assets/img/common/close.svg';
import closeDarkImg from '@/assets/img/common/close_dark.svg';
import { useControlerStore } from "@/store/controlerStore";
import MapUpdater from "./map/MapUpdater";
import { useRightMenuStore } from "@/store/rightMenuStore";
import { SettingsLang } from "@/constants/languageContants";

const SettingBox = () => {
    const theme = useRightMenuStore(state => state.theme);
    const lang = useRightMenuStore(state => state.language);
    const setControl = useControlerStore(state => state.setControl);
    const [section, setSection] = useState<string>(SETTING_MAP);
    const toggleSection = (section:string) => {
        setSection(section);
    };
    const closeHandler = () => {
        setControl(null);
    };
    return (
        <div className={`${styles.sectionBox}`}>
            <div className={`${styles.sectionTitleBox} ${theme === THEME_DARK && styles.dark}`}>
                <div><strong>{SettingsLang[SETTING][lang]}</strong></div>
                <div className={`${styles.sectionCloseBtn}`} onClick={()=>{closeHandler()}}>
                    <img src={theme === THEME_DARK ? closeDarkImg : closeImg} width={25} height={25}/>
                </div>
            </div>
            <div className={`${styles.sectionBtnBox} ${theme === THEME_DARK && styles.dark}`}>
                <div className={`${styles.sectionBtn} ${theme === THEME_DARK && styles.dark} ${section === SETTING_MAP && styles.active}`} onClick={()=>{toggleSection(SETTING_MAP)}}>{SettingsLang[SETTING_MAP][lang]}</div>
                <div className={`${styles.sectionBtn} ${theme === THEME_DARK && styles.dark} ${section === SETTING_VISIBILITY && styles.active}`} onClick={()=>{toggleSection(SETTING_VISIBILITY)}}>{SettingsLang[SETTING_VISIBILITY][lang]}</div>
                <div className={`${styles.sectionBtn} ${theme === THEME_DARK && styles.dark} ${section === SETTING_UNITS && styles.active}`} onClick={()=>{toggleSection(SETTING_UNITS)}}>{SettingsLang[SETTING_UNITS][lang]}</div>
            </div>
            {section === SETTING_MAP && <SettingMap theme={theme} lang={lang}></SettingMap>}
            {section === SETTING_VISIBILITY && <SettingVisibility theme={theme} lang={lang}></SettingVisibility>}
            {section === SETTING_UNITS && <SettingUnits theme={theme} lang={lang}></SettingUnits>}
            <MapUpdater />
        </div>
    )
}

export default SettingBox;