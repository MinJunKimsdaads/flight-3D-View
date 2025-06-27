import { getDepartureList } from "@/api/query";
import { useEffect, useState } from "react";
import resetIcon from '@/assets/img/widget/reset.svg';
import resetDarkIcon from '@/assets/img/widget/reset_dark.svg';
import { THEME_DARK } from "@/constants/settingConstant";
import styles from '@/assets/css/widget/WidgetItem.module.scss';
import { useGlobalStore } from "@/store/commonStore";
import { useSettingExtStore } from "@/store/settingStore";
import { formatTimestamp, setAlert } from "@/util/util";
import { useDepartureStore } from "@/store/widgetStore";
import { findAircraftFeature, findAirportFeature } from "@/util/feature";
import { useMap } from "@/contexts/MapContext";

interface FlightData {
  icao24: string;
  firstSeen: number;
  estDepartureAirport: string | null;
  lastSeen: number;
  estArrivalAirport: string | null;
  callsign: string | null;
  estDepartureAirportHorizDistance: number;
  estDepartureAirportVertDistance: number;
  estArrivalAirportHorizDistance: number;
  estArrivalAirportVertDistance: number;
  departureAirportCandidatesCount: number;
  arrivalAirportCandidatesCount: number;
}

const Departure = ({theme}) => {
    const {map} = useMap();
    const departure = useDepartureStore(state => state.departure);
    const timeUnits = useSettingExtStore(state => state.timeUnits);
    const setIsLoading = useGlobalStore(state => state.setIsLoading);
    const [departureList, setDepartureList] = useState<FlightData[]>([]);
    const loadDepartureList = async (airport) => {
        setIsLoading(true);
        try{
            const now = Math.floor(Date.now() / 1000);
            const oneHourBefore = now - 3600;
            const list = await getDepartureList(airport,oneHourBefore,now);
            if(list){
                setDepartureList(list?.data);
            }
        }catch(error){
            setAlert('Departure','No Departure Data');
        }finally{
            setIsLoading(false);
        }
    };
    useEffect(()=>{
        loadDepartureList(departure);
    },[]);
    const resetHandler = () => {
        loadDepartureList(departure);
    }
    return (
        <div className={`${styles.widgetItem} ${theme === THEME_DARK ? styles.dark:''}`}>
            <div className={`${styles.header} ${theme === THEME_DARK ? styles.dark:''}`}>
                <span onClick={()=>{findAirportFeature(map,departure)}} className={`${styles.airport}`}>
                    Airport: <strong>{departure}</strong>
                </span>
                <div className={`${styles.resetBtn}`} onClick={()=>{resetHandler()}}>
                    <img src={theme === THEME_DARK ? resetDarkIcon : resetIcon} width={20} height={20} />
                </div>
            </div>
            <div>
                {departureList.length < 1 && <div className={`${styles.noData} ${theme === THEME_DARK ? styles.dark:''}`}>No Data</div>}
                {departureList.map((i,idx)=>(
                    <div key={idx} className={`${styles.item}`} onClick={()=>{findAircraftFeature(map,i.icao24)}}>
                        <div className={`${styles.callsign}`}>{i.callsign ? i.callsign:'-'}</div>
                        <div className={`${styles.airport}`}>Arrival Airport: {i.estArrivalAirport ? i.estArrivalAirport:''}</div>
                        <div className={`${styles.time}`}>{formatTimestamp(i.firstSeen*1000,timeUnits)}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Departure;