import { getHistoryList, getMetadata } from '@/api/query';
import styles from '@/assets/css/detail/Detail.module.scss';
import closeImg from '@/assets/img/common/close.svg';
import closeDarkImg from '@/assets/img/common/close_dark.svg';
import { DetailLang } from '@/constants/languageContants';
import { THEME_DARK } from '@/constants/settingConstant';
import { resetSelectFeature } from '@/sevices/features/detail';
import { useCesiumStore } from '@/store/cesiumStore';
import { useGlobalStore } from '@/store/commonStore';
import { useRightMenuStore } from '@/store/rightMenuStore';
import { useSettingExtStore } from '@/store/settingStore';
import { getUnitForAlt, getUnitForSpeed, transformAltUnits, transformSpeedUnits } from '@/util/units';
import { formatTimestamp } from '@/util/util';
import { useEffect, useState } from 'react';
const DetailAircraft = ({feature,theme}) => {
    const setIsCesiumShow = useCesiumStore(state => state.setIsCesiumShow);
    const setLongitude = useCesiumStore(state => state.setLongitude);
    const setLatitude = useCesiumStore(state => state.setLatitude);
    const setAltitude = useCesiumStore(state => state.setAltitude);

    const setIsLoading = useGlobalStore(state => state.setIsLoading);
    const speedUnits = useSettingExtStore(state => state.speedUnits);
    const altUnits = useSettingExtStore(state => state.altUnits);
    const timeUnits = useSettingExtStore(state => state.timeUnits);
    const lang = useRightMenuStore(state => state.language);
    const [metadata, setMetadata] = useState([
      {
        title:'AIRLINECOUNTRY',
        value:'-'
      },
      {
        title:'AIRLINE',
        value:'-'
      },
    ]);
    const [history, setHistory] = useState({
      progress:0.5,
      departureAirport:'-',
      arrivalAirport:'-',
    });
    const loadMetadata = async (icao24) => {
      setIsLoading(true);
      try{
        const now = Math.floor(Date.now() / 1000);
        const oneHourBefore = now - 3600;
        const metadataList = await getMetadata(icao24);
        const historyList = await getHistoryList(icao24,oneHourBefore,now);
        setMetadata([
          {
            title:'AIRLINECOUNTRY',
            value:metadataList?.data?.response.aircraft?.registered_owner_country_iso_name ? metadataList?.data?.response.aircraft?.registered_owner_country_iso_name : '-'
          },
          {
            title:'AIRLINE',
            value:metadataList?.data?.response.aircraft?.registered_owner ? metadataList?.data?.response.aircraft?.registered_owner : '-'
          },
        ]);
        if(historyList?.data.length > 0){
          let progress;
          if(historyList?.data[0].estArrivalAirportHorizDistance && historyList?.data[0].estDepartureAirportHorizDistance){
            progress = Number(historyList?.data[0].estDepartureAirportHorizDistance) / (Number(historyList?.data[0].estArrivalAirportHorizDistance) + Number(historyList?.data[0].estDepartureAirportHorizDistance));
          }else{
            progress = 0.5;
          }
          setHistory({
            progress:progress,
            departureAirport:historyList?.data[0].estDepartureAirport ? historyList?.data[0].estDepartureAirport : '-',
            arrivalAirport:historyList?.data[0].estArrivalAirport ? historyList?.data[0].estArrivalAirport : '-',
          });
        }
      }catch(error){
        console.warn(error)
      }finally{
        setIsLoading(false);
      }
    }
    useEffect(()=>{
      loadMetadata(feature.get('icao24'));
    },[feature.get('icao24')]);
    const statusOption = [
      {
        title:'ICAO24',
        value:feature.get('icao24') ? feature.get('icao24'):'-',
      },
      {
        title:'COUNTRY',
        value:feature.get('origin_country') ? feature.get('origin_country'):'-',
      },
      {
        title:'ALTITUDE',
        value:feature.get('geo_altitude') ? `${transformAltUnits(Number(feature.get('geo_altitude')),'ME',altUnits).toFixed(2)}${getUnitForAlt(altUnits)}`:'-',
      },
      {
        title:'VELOCITY',
        value:feature.get('velocity') ? `${transformSpeedUnits(Number(feature.get('velocity')),'ME',speedUnits).toFixed(2)}${getUnitForSpeed(speedUnits)}`:'-',
      },
      {
        title:'TRUETRACK',
        value:feature.get('true_track') ? feature.get('true_track'):'-',
      },
      {
        title:'TIMEPOSITION',
        value:feature.get('time_position') ? formatTimestamp(Number(feature.get('time_position'))*1000,timeUnits):'-',
      },
      {
        title:'LATITUDE',
        value:feature.get('latitude') ? feature.get('latitude').toFixed(5):'-',
      },
      {
        title:'LOGITUDE',
        value:feature.get('longitude') ? feature.get('longitude').toFixed(5):'-',
      },
    ];
    const closeHandler = () => {
        resetSelectFeature()
    }

    const viewHandler = () => {
      setIsCesiumShow(true);
      setLongitude(Number(feature.get('longitude')));
      setLatitude(Number(feature.get('latitude')));
      setAltitude(transformAltUnits(Number(feature.get('geo_altitude')),'ME',altUnits));
    };
    return (
        <div className={`${styles.detail} ${theme === THEME_DARK && styles.dark}`}>
            <div className={`${styles.header}`}>
                <div className={`${styles.name}`}>
                    <strong>{feature.get('callsign') ? feature.get('callsign'):'-'}</strong>
                </div>
                <div className={`${styles.btn}`} onClick={()=>{closeHandler()}}>
                    <img src={theme === THEME_DARK ? closeDarkImg : closeImg} width={25} height={25}/>
                </div>
            </div>
            <div className={`${styles.contents}`}>
                <div className={`${styles.thumbnail}`}></div>
                <div className={`${styles.historyBox}`}>
                  <input type='range' min={0} max={100} value={Math.round(history.progress * 100)} readOnly/>
                  <div className={`${styles.historyDes}`}>
                    <span>{history.departureAirport}</span>
                    <span>{history.arrivalAirport}</span>
                  </div>
                </div>
                <div className={`${styles.listTitle}`}>
                  <strong>Info</strong>
                </div>
                <div className={`${styles.list}`}>
                    {metadata.map(({title,value})=>(
                        <div className={`${styles.item} ${theme === THEME_DARK && styles.dark}`} key={title}>
                            <div className={`${styles.itemTitle}`}><strong>{DetailLang['AIRCRAFT'][title][lang]}</strong></div>
                            <div className={`${styles.itemValue}`}>{value}</div>
                        </div>
                    ))}
                </div>
                <div className={`${styles.listTitle}`}>
                  <strong>Status</strong>
                </div>
                <div className={`${styles.list}`}>
                    {statusOption.map(({title,value})=>(
                        <div className={`${styles.item} ${theme === THEME_DARK && styles.dark}`} key={title}>
                            <div className={`${styles.itemTitle}`}><strong>{DetailLang['AIRCRAFT'][title][lang]}</strong></div>
                            <div className={`${styles.itemValue}`}>{value}</div>
                        </div>
                    ))}
                </div>
                <div className={`${styles.btnBox}`}>
                  <div className={`${styles.btn}`} onClick={()=>{viewHandler()}}>3D View</div>
                </div>
            </div>
        </div>
    )
}

export default DetailAircraft;