import { useWeatherStore } from '@/store/weatherStore';
import ToggleSwitch from '@/components/common/ToggleSwitch';
import styles from '@/assets/css/weather/Weather.module.scss';
import { THEME_DARK } from '@/constants/settingConstant';
import { WeatherLang } from '@/constants/languageContants';

import cloudImg from '@/assets/img/weather/cloud.svg';
import cloudDarkImg from '@/assets/img/weather/cloud_dark.svg';
import cloudActiveImg from '@/assets/img/weather/cloud_active.svg';
import precipitationImg from '@/assets/img/weather/precipitation.svg';
import precipitationDarkImg from '@/assets/img/weather/precipitation_dark.svg';
import precipitationActiveImg from '@/assets/img/weather/precipitation_active.svg';
import pressureImg from '@/assets/img/weather/pressure.svg';
import pressureDarkImg from '@/assets/img/weather/pressure_dark.svg';
import pressureActiveImg from '@/assets/img/weather/pressure_active.svg';
import windImg from '@/assets/img/weather/wind.svg';
import windDarkImg from '@/assets/img/weather/wind_dark.svg';
import windActiveImg from '@/assets/img/weather/wind_active.svg';
import temperatureImg from '@/assets/img/weather/temperature.svg';
import temperatureDarkImg from '@/assets/img/weather/temperature_dark.svg';
import temperatureActiveImg from '@/assets/img/weather/temperature_active.svg';
import { useEffect } from 'react';
import { weatherLayer } from '@/sevices/maps/layer';
import { WEATHER_LAYER } from '@/constants/weatherConstant';

const WeatherLayer = ({theme,lang}) => {
    const layer = useWeatherStore(state => state.layer);
    const setLayer = useWeatherStore(state => state.setLayer);
    useEffect(()=>{
        if(layer){
            weatherLayer.setVisible(true);
            const layerInfo = WEATHER_LAYER.find((i) => i.name === layer);
            if(layerInfo){
                weatherLayer.setSource(layerInfo?.source);
            }
        }else{
            weatherLayer.setVisible(false);
        }
    },[layer]);
    const layerHandler = (selectedLayer) => {
        if(layer === selectedLayer){
            setLayer(null);
        }else{
            setLayer(selectedLayer);
        }
    }
    const options = [
        {
          name:'CLOUD',
          value:'cloud',
          img:cloudImg,
          darkImg: cloudDarkImg,
          activeImg: cloudActiveImg,
        },
        {
          name:'PRECIPITATION',
          value:'precipitaion',
          img:precipitationImg,
          darkImg: precipitationDarkImg,
          activeImg: precipitationActiveImg,
        },
        {
          name:'PRESSURE',
          value:'pressure',
          img:pressureImg,
          darkImg: pressureDarkImg,
          activeImg: pressureActiveImg,
        },
        {
          name:'WIND',
          value:'wind',
          img:windImg,
          darkImg: windDarkImg,
          activeImg: windActiveImg,
        },
        {
          name:'TEMP',
          value:'temp',
          img:temperatureImg,
          darkImg: temperatureDarkImg,
          activeImg: temperatureActiveImg,
        },
    ];
    return (
        <div>
            {options.map((i)=>{
                return (
                    <div key={i.value} className={`${styles.mapProhibitedAreaBox}`}>
                        <div className={`${styles.title}`}>
                            <strong>{WeatherLang['LAYER'][i.name][lang]}</strong>
                        </div>
                        <img src={layer === i.value ? i.activeImg : theme === THEME_DARK ? i.darkImg : i.img} width={40} height={40}/>
                        <ToggleSwitch flag={layer === i.value} action={()=>{layerHandler(i.value)}} />
                    </div> 
                )
            })}
        </div>
    )
}

export default WeatherLayer;