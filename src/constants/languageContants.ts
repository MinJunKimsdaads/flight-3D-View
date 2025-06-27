import { SETTING } from "./controlerConstant"
import { SETTING_MAP, SETTING_UNITS, SETTING_VISIBILITY } from "./settingConstant"

export const ControlLang = {
    EN:{
        Widget: 'Widget',
        Settings: 'Settings',
        Filters: 'Filters',
        Weather: 'Weather',
    },
    KO:{
        Widget: '위젯',
        Settings: '셋팅',
        Filters: '필터',
        Weather: '날씨',
    }
}

export const RightMenuLang = {
    EN: {
        FullscreenOff:'Fullscreen Off',
        FullscreenOn:'Fullscreen On',
        NormalMode:'Normal Mode',
        DarkMode:'Dark Mode',
        ZoomIn:'Zoom In',
        ZoomOut:'Zoom Out',
        Search:'Search',
        Korean:'Korean',
        English:'English'
    },
    KO: {
        FullscreenOff:'전체화면 해제',
        FullscreenOn:'전체화면',
        NormalMode:'일반 모드',
        DarkMode:'다크 모드',
        ZoomIn:'확대',
        ZoomOut:'축소',
        Search:'검색',
        Korean:'한국어',
        English:'영어'
    }
}

export const SettingsLang = {
    [SETTING]:{
        EN:'Settings',
        KO:'셋팅',
    },
    [SETTING_MAP]:{
        EN:'Map',
        KO:'지도',
    },
    [SETTING_VISIBILITY]:{
        EN:'Visibility',
        KO:'가시성',
    },
    [SETTING_UNITS]:{
        EN:'Units',
        KO:'단위',
    },
    MAP:{
        STYLE:{
            EN:'Map Style',
            KO:'지도 스타일',
        },
        OPACITY:{
            EN:'Opacity',
            KO:'투명도',
        },
        BRIGHTNESS:{
            EN:'Brightness',
            KO:'밝기',
        },
        PROHIBITEDAREA:{
            EN:'Prohibited Area',
            KO:'비행 금지 구역',
        },
        DAYNIGHT:{
            EN:'Day Night',
            KO:'주야 경계선',
        },
        RAIN:{
            EN:'Rain',
            KO:'비',
        },
        CLOUD:{
            EN:'Cloud',
            KO:'구름',
        },
        SNOW:{
            EN:'Snow',
            KO:'눈',
        },
    },
    VISIBILITY:{
        ICONCOLOR:{
            EN:'Icon Color',
            KO:'아이콘 컬러'
        },
        HOVEREDCOLOR:{
            EN:'Hovered Color',
            KO:'호버 색상'
        },
        ICONSCALE:{
            EN:'Icon Scale',
            KO:'아이콘 스케일'
        },
        INTERVALTIME:{
            EN:'Interval Time',
            KO:'실시간 신호 주기'
        }
    },
    UNITS:{
        TIMEZONE:{
            EN:'Time Zone',
            KO:'시간대'
        },
        DISTANCE:{
            EN:'Distance',
            KO:'거리'
        },
        ALTITUDE:{
            EN:'Altitude',
            KO:'고도'
        },
        SPEED:{
            EN:'Speed',
            KO:'속도'
        },
        TEMPERATURE:{
            EN:'Temperature',
            KO:'온도'
        },
    }
}

export const DetailLang = {
    AIRCRAFT:{
        ICAO24:{
            EN:'ICAO24',
            KO:'ICAO24'
        },
        COUNTRY:{
            EN:'Country',
            KO:'국가'
        },
        ALTITUDE:{
            EN:'Altitude',
            KO:'고도'          
        },
        VELOCITY:{
            EN:'Speed',
            KO:'속도'    
        },
        TRUETRACK:{
            EN:'Heading',
            KO:'진행 방향' 
        },
        TIMEPOSITION:{
            EN:'Response Time',
            KO:'수신 시간' 
        },
        LATITUDE:{
            EN:'Latitude',
            KO:'위도' 
        },
        LOGITUDE:{
            EN:'Logitude',
            KO:'경도' 
        },
        AIRLINECOUNTRY:{
            EN:'Airline Country',
            KO:'항공사 국적' 
        },
        AIRLINE:{
            EN:'Airline',
            KO:'항공사' 
        },
    },
    AIRPORT:{
        COUNTRY:{
            EN:'Country',
            KO:'국가' 
        },
        CITY:{
            EN:'City',
            KO:'도시' 
        },
        IATA:{
            EN:'iata',
            KO:'iata' 
        },
        ICAO:{
            EN:'icao',
            KO:'icao' 
        },
        LATITUDE:{
            EN:'Latitude',
            KO:'위도' 
        },
        LOGITUDE:{
            EN:'Logitude',
            KO:'경도' 
        },
    }
}

export const FiltersLang = {
    EN:'Filters',
    KO:'필터',
    AIRCRAFT:{
        EN:'AIRCRAFT',
        KO:'항공기',
        STATUS:{
            GROUND:{
                EN:'Ground',
                KO:'지상' 
            },
            AIRBONE:{
                EN:'Logitude',
                KO:'비행 중' 
            },
            EN:'STATUS',
            KO:'상태',
        },
        SPEED:{
            LOW:{
                EN:'Low',
                KO:'저속' 
            },
            MIDDLE:{
                EN:'Middle',
                KO:'중속' 
            },
            HIGH:{
                EN:'High',
                KO:'고속' 
            },
            EN:'Speed',
            KO:'속도',
        },
        ALTITUDE:{
            LOW:{
                EN:'Low',
                KO:'저고도' 
            },
            MIDDLE:{
                EN:'Middle',
                KO:'중고도' 
            },
            HIGH:{
                EN:'High',
                KO:'고고도' 
            },
            EN:'Altitude',
            KO:'고도',
        },
        COUNTRY:{
            KOREA:{
                EN:'Korea',
                KO:'대한민국' 
            },
            JAPAN:{
                EN:'Japan',
                KO:'일본' 
            },
            ETC:{
                EN:'ETC',
                KO:'기타' 
            },
            EN:'Country',
            KO:'국가',
        },
    },
    AIRPORT:{
        EN:'Airport',
        KO:'공항',
        COUNTRY:{
            KOREA:{
                EN:'Korea',
                KO:'대한민국' 
            },
            JAPAN:{
                EN:'Japan',
                KO:'일본' 
            },
            ETC:{
                EN:'ETC',
                KO:'기타' 
            },
            EN:'Country',
            KO:'국가',
        },
    }
}

export const WeatherLang = {
    EN:'Weather',
    KO:'날씨',
    LAYER:{
        EN:'Layer',
        KO:'레이어',
        CLOUD:{
            EN:'Cloud',
            KO:'구름',
        },
        PRECIPITATION:{
            EN:'Precipitation',
            KO:'강수량',
        },
        PRESSURE:{
            EN:'Pressure',
            KO:'기압',
        },
        WIND:{
            EN:'Wind',
            KO:'바람',
        },
        TEMP:{
            EN:'Temperature',
            KO:'온도',
        },
    },
    OPENWEATHER:{
        EN:'OpenWeather',
        KO:'오픈웨더',
    }
}

