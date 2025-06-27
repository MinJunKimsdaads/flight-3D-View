import styles from '@/assets/css/detail/Detail.module.scss';
import closeImg from '@/assets/img/common/close.svg';
import closeDarkImg from '@/assets/img/common/close_dark.svg';
import { DetailLang } from '@/constants/languageContants';
import { THEME_DARK } from '@/constants/settingConstant';
import { resetSelectFeature } from '@/sevices/features/detail';
import { useRightMenuStore } from '@/store/rightMenuStore';
import { toLonLat } from 'ol/proj';

const DetailAirport = ({feature,theme}) => {
    const lang = useRightMenuStore(state => state.language);
    const coord = toLonLat(feature.getGeometry().getCoordinates());
    const option = [
      {
        title:'COUNTRY',
        value:feature.get('country') ? feature.get('country'):'-',
      },
      {
        title:'CITY',
        value:feature.get('city') ? feature.get('city'):'-',
      },
      {
        title:'IATA',
        value:feature.get('iata') ? feature.get('iata'):'-',
      },
      {
        title:'ICAO',
        value:feature.get('icao') ? feature.get('icao'):'-',
      },
      {
        title:'LATITUDE',
        value:coord[0].toFixed(5),
      },
      {
        title:'LOGITUDE',
        value:coord[1].toFixed(5),
      },
    ];
    const closeHandler = () => {
        resetSelectFeature();
    };
    return(
        <div className={`${styles.detail} ${theme === THEME_DARK && styles.dark}`}>
            <div className={`${styles.header}`}>
                <div className={`${styles.name}`}>
                    <strong>{feature.get('name')}</strong>
                </div>
                <div className={`${styles.btn}`} onClick={()=>{closeHandler()}}>
                    <img src={theme === THEME_DARK ? closeDarkImg : closeImg} width={25} height={25}/>
                </div>
            </div>
            <div className={`${styles.contents}`}>
                <div className={`${styles.thumbnail}`}></div>
                <div className={`${styles.list}`}>
                    {option.map(({title,value})=>(
                        <div className={`${styles.item} ${theme === THEME_DARK && styles.dark}`} key={title}>
                            <div className={`${styles.itemTitle}`}><strong>{DetailLang['AIRPORT'][title][lang]}</strong></div>
                            <div className={`${styles.itemValue}`}>{value}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DetailAirport;