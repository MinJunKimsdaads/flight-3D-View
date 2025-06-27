// import React, { useEffect, useRef } from 'react';
// import { WindLayer } from "ol-wind";

import { WeatherLang } from "@/constants/languageContants";
import WeatherLayer from "./weather/WeatherLayer";
import styles from '@/assets/css/weather/Weather.module.scss';
import { THEME_DARK } from "@/constants/settingConstant";
import OpenWeather from "./weather/OpenWeather";

const WeatherMap = ({theme,lang}) => {
//   const windyRef = useRef(null);

//   useEffect(() => {
//     // Windy API 스크립트 동적 로드
//     const script = document.createElement('script');
//     script.src = 'https://cdn.jsdelivr.net/npm/@windy-api/windyapi@latest/windyapi.min.js';
//     script.async = true;
//     script.onload = () => {
//       // windyInit 함수가 로드되면 실행
//       // eslint-disable-next-line no-undef
//       console.log(11);
//       windyInit({
//         key: 'Ks9uCrANMrVPUP12f7ZEkwiB7rJeBZf3', // 여기에 본인의 Windy API Key 입력
//         lat: 37.5665,
//         lon: 126.9780,
//         zoom: 5,
//         container: windyRef.current,
//         overlay: 'wind', // 바람 레이어
//       }, (windyAPI) => {
//         // windyAPI 인스턴스가 준비되었을 때 실행할 코드
//         console.log('Windy API Ready', windyAPI);
//       });
//     };

//     document.body.appendChild(script);

//     return () => {
//       // 컴포넌트 언마운트 시 Windy 요소 제거
//       if (windyRef.current) {
//         windyRef.current.innerHTML = '';
//       }
//       document.body.removeChild(script);
//     };
//   }, []);

  const options = [
    {
        key: 'LAYER',
        Component: WeatherLayer,
        props: { theme,lang },
    },
        {
        key: 'OPENWEATHER',
        Component: OpenWeather,
        props: { theme,lang },
    },
    
  ]

  return (
    <div className={`${styles.setting} ${theme === THEME_DARK && styles.dark}`}>
        {options.map(({key, Component,props}) => (
            <div key={key} className={`${styles.settingMenu}`}>
                <div><strong>{WeatherLang[key][lang]}</strong></div>
                <Component {...props}/>
            </div>
        ))}
    </div>
  );
};

export default WeatherMap;