import { useControlerStore } from "@/store/controlerStore";
import { useRightMenuStore } from "@/store/rightMenuStore";
import closeImg from '@/assets/img/common/close.svg';
import closeDarkImg from '@/assets/img/common/close_dark.svg';
import WeatherMap from "./WeatherMap";
import { THEME_DARK } from "@/constants/settingConstant";
import styles from '@/assets/css/weather/Weather.module.scss';
import { WeatherLang } from "@/constants/languageContants";

const WeatherBox = () => {
    const theme = useRightMenuStore(state => state.theme);
    const lang = useRightMenuStore(state => state.language);
    const setControl = useControlerStore(state => state.setControl);
    const closeHandler = () => {
        setControl(null);
    };
    return (
        <div className={`${styles.sectionBox}`}>
            <div className={`${styles.sectionTitleBox} ${theme === THEME_DARK && styles.dark}`}>
                <div><strong>{WeatherLang[lang]}</strong></div>
                <div className={`${styles.sectionCloseBtn}`} onClick={()=>{closeHandler()}}>
                    <img src={theme === THEME_DARK ? closeDarkImg : closeImg} width={25} height={25}/>
                </div>
            </div>
            <WeatherMap theme={theme} lang={lang}/>
        </div>
    )
}

export default WeatherBox;