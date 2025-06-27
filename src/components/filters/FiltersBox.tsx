import { THEME_DARK } from "@/constants/settingConstant";
import { useControlerStore } from "@/store/controlerStore";
import styles from "@/assets/css/filters/FiltersBox.module.scss";
import closeImg from '@/assets/img/common/close.svg';
import closeDarkImg from '@/assets/img/common/close_dark.svg';
import { useState } from "react";
import { FILTERS_AIRCRAFT, FILTERS_AIRPORT } from "@/constants/filtersConstant";
import FilterAircraft from "./FilterAircraft";
import { useRightMenuStore } from "@/store/rightMenuStore";
import FilterUpdater from "./FilterUpdater";
import FilterAirport from "./FilterAirport";
import { FiltersLang } from "@/constants/languageContants";

const FiltersBox = () => {
    const lang = useRightMenuStore(state => state.language);
    const theme = useRightMenuStore(state => state.theme);
    const setControl = useControlerStore(state => state.setControl);
    const [section, setSection] = useState<string>(FILTERS_AIRCRAFT);
    const toggleSection = (section:string) => {
        setSection(section);
    };
    const closeHandler = () => {
        setControl(null);
    };
    return (
        <div className={`${styles.sectionBox}`}>
            <div className={`${styles.sectionTitleBox} ${theme === THEME_DARK && styles.dark}`}>
                <div><strong>{FiltersLang[lang]}</strong></div>
                <div className={`${styles.sectionCloseBtn}`} onClick={()=>{closeHandler()}}>
                    <img src={theme === THEME_DARK ? closeDarkImg : closeImg} width={25} height={25}/>
                </div>
            </div>
            <div className={`${styles.sectionBtnBox} ${theme === THEME_DARK && styles.dark}`}>
                <div className={`${styles.sectionBtn} ${theme === THEME_DARK && styles.dark} ${section === FILTERS_AIRCRAFT && styles.active}`} onClick={()=>{toggleSection(FILTERS_AIRCRAFT)}}>{FiltersLang['AIRCRAFT'][lang]}</div>
                <div className={`${styles.sectionBtn} ${theme === THEME_DARK && styles.dark} ${section === FILTERS_AIRPORT && styles.active}`} onClick={()=>{toggleSection(FILTERS_AIRPORT)}}>{FiltersLang['AIRPORT'][lang]}</div>
            </div>
            {section === FILTERS_AIRCRAFT && <FilterAircraft theme={theme} lang={lang}/>}
            {section === FILTERS_AIRPORT && <FilterAirport theme={theme} lang={lang}/>}
            <FilterUpdater />
        </div>
    )
};

export default FiltersBox;