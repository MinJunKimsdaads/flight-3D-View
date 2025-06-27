import { useEffect, useRef } from "react";
import VectorSource from "ol/source/Vector";
import { getAllAircraftList } from "@/api/query";
import { TYPE_AIRCRAFT } from "@/constants/featureConstants";
import { useAircraftFeatureStore } from "@/store/featureStore";
import { useSettingMapVisibilityStore } from "@/store/settingStore";
import { filteredAircraftFeatures } from "@/sevices/features/filters";
import { useGlobalStore } from "@/store/commonStore";
import { Feature } from "ol";
import { Point } from "ol/geom";
import { fromLonLat } from "ol/proj";

interface AircraftUpdaterProps {
  source: VectorSource<any>;
}

export default function AircraftUpdater({ source }: AircraftUpdaterProps) {
  const setIsLoading = useGlobalStore(state => state.setIsLoading);
  const setAircraftFeatures = useAircraftFeatureStore(state => state.setAircraftFeatures);
  const intervalTime = useSettingMapVisibilityStore(state => state.intervalTime);
  const intervalRef = useRef<null|number>(null);
  const loadAircraftFeatures = async () => {
    setIsLoading(true);
    try {
      const res = await getAllAircraftList();
      const featuresData = res?.data.states || [];
      const features = featuresData
        .filter((f: any) => f[5] != null && f[6] != null) // 유효한 경도/위도
        .map((f: any) => {
          const lon = f[5];
          const lat = f[6];
          const feature = new Feature({
            geometry: new Point(fromLonLat([lon, lat])),
            icao24: f[0] ?? null,
            callsign: f[1] ?? null,
            origin_country: f[2] ?? null,
            time_position: f[3] ?? null,
            last_contact: f[4] ?? null,
            longitude: lon,
            latitude: lat,
            baro_altitude: f[7] ?? null,
            on_ground: f[8] ?? null,
            velocity: f[9] ?? null,
            true_track: f[10] ?? 0,
            vertical_rate: f[11] ?? null,
            sensors: f[12] ?? null,
            geo_altitude: f[13] ?? null,
            squawk: f[14] ?? null,
            spi: f[15] ?? null,
            position_source: f[16] ?? null,
            category: f[17] ?? null,
            type: TYPE_AIRCRAFT,
            click_type: TYPE_AIRCRAFT
          });
          return feature
        })
      source.clear();
      setAircraftFeatures(features);
      source.addFeatures(filteredAircraftFeatures(features));
    }catch (error) {
      console.error("항공기 데이터를 불러오는 데 실패했습니다.", error);
    }finally{
        setIsLoading(false);
    }
  };
  useEffect(() => {
    loadAircraftFeatures();

    if(intervalRef.current){
      clearInterval(intervalRef.current)
    }

    intervalRef.current = setInterval(loadAircraftFeatures, intervalTime);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [source,intervalTime]);

  return null;
}