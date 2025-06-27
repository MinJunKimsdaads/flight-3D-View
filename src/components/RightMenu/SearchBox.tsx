import { useEffect, useState } from "react";
import styles from '@/assets/css/RightMenu/SearchBox.module.scss';
import SelectBar from "../common/SelectBar";
import { airportLayer, currentAircraftLayer } from "@/sevices/maps/layer";
import { useSettingExtStore } from "@/store/settingStore";
import { formatTimestamp } from "@/util/util";
import { useRightMenuStore } from "@/store/rightMenuStore";
import { THEME_DARK } from "@/constants/settingConstant";
import { findAircraftFeature, findAirportFeature } from "@/util/feature";
import { useMap } from "@/contexts/MapContext";

const SearchBox = () => {
  const {map} = useMap();
  const theme = useRightMenuStore(state => state.theme);
  const timeUnits = useSettingExtStore(state => state.timeUnits);
  const [target, setTarget] = useState<'aircraft' | 'airport'>('aircraft');
  const [keyword, setKeyword] = useState('');
  const [resultList, setResultList] = useState<any[]>([]);

  useEffect(() => {
    if (keyword.trim() === '') {
      setResultList([]);
      return;
    }

    const source =
      target === 'aircraft'
        ? currentAircraftLayer.getSource()
        : airportLayer.getSource();

    const features = source?.getFeatures() || [];

    const results = features.filter((feature) => {
      const props = feature.getProperties();

      if (target === 'aircraft') {
        return (
          props?.icao24?.toLowerCase().includes(keyword.toLowerCase()) ||
          props?.callsign?.toLowerCase().includes(keyword.toLowerCase())
        );
      } else {
        return (
          props?.name?.toLowerCase().includes(keyword.toLowerCase()) ||
          props?.icao?.toLowerCase().includes(keyword.toLowerCase())
        );
      }
    });

    setResultList(results);
  }, [keyword,target]);

  const keywordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const moveHandler = (target,id) => {
    if(target === 'aircraft'){
        findAircraftFeature(map,id);
    }else{
        findAirportFeature(map,id);
    }
  }

  const option = [
    {
      name: 'Aircraft',
      value: 'aircraft',
      isSelected: target === 'aircraft',
    },
    {
      name: 'Airport',
      value: 'airport',
      isSelected: target === 'airport',
    },
  ];

  return (
    <div className={`${styles.searchBox} ${theme === THEME_DARK && styles.dark}`}>
      <div className={`${styles.header}`}>
        <input type="text" onChange={keywordHandler} value={keyword} />
        <div className={styles.targetBtn}>
          <SelectBar selectList={option} action={setTarget} />
        </div>
      </div>
      <div className={styles.contents}>
        {resultList.length < 1 ? (
          <div className={`${styles.noData} ${theme === THEME_DARK && styles.dark}`}>
            <strong>No Result</strong>
          </div>
        ) : (
          resultList.map((feature) => {
            const props = feature.getProperties();
            return (
              <div key={props.icao24 || props.icao} className={`${styles.item} ${theme === THEME_DARK && styles.dark}`} onClick={()=>{moveHandler(target,props.icao24 || props.icao)}}>
                {target === 'aircraft' ? (
                    <>
                        <div className={`${styles.callsign}`}><strong>{props ? props.callsign:'-'}</strong></div>
                        <div className={`${styles.country}`}>{props.origin_country}</div>
                        <div className={`${styles.contact}`}>{props.last_contact && formatTimestamp(props.last_contact*1000,timeUnits)}</div>
                    </>
                ):(
                    <>
                        <div className={`${styles.name}`}><strong>{props.name ? props.name:'-'}</strong></div>
                        <div className={`${styles.country}`}>{props.country ? props.country:'-'}</div>
                        <div className={`${styles.code}`}>
                            <span>{props.iata ? props.iata:'-'}</span>
                            <span>{props.icao ? props.icao:'-'}</span>
                        </div>
                    </>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default SearchBox;