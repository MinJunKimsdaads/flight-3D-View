import ToggleSwitch from "@/components/common/ToggleSwitch";
import { THEME_DARK } from "@/constants/settingConstant";
import { useWeatherStore } from "@/store/weatherStore";
import openWeatherImg from '@/assets/img/weather/openWeather.svg';
import openWeatherDarkImg from '@/assets/img/weather/openWeather_dark.svg';
import openWeatherActiveImg from '@/assets/img/weather/openWeather_active.svg';
import styles from '@/assets/css/weather/Weather.module.scss';

const OpenWeather = ({theme}) => {
    const isWeatherMap = useWeatherStore(state => state.isWeatherMap);
    const setIsWeatherMap = useWeatherStore(state => state.setIsWeatherMap);
    const isWeatherHandler = () => {
        setIsWeatherMap(!isWeatherMap);
    }
    return (
        <div className={`${styles.mapProhibitedAreaBox}`}>
            <img src={isWeatherMap ? openWeatherActiveImg : theme === THEME_DARK ? openWeatherDarkImg : openWeatherImg} width={40} height={40}/>
            <ToggleSwitch flag={isWeatherMap} action={()=>{isWeatherHandler()}}></ToggleSwitch>
        </div>
    )
}

export default OpenWeather;