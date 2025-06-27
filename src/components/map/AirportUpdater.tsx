import { getAllAirportList } from "@/api/query";
import VectorSource from "ol/source/Vector";
import { useEffect } from "react";
import { Feature } from "ol";
import { Point } from "ol/geom";
import { fromLonLat } from "ol/proj";
import { FeatureLike } from "ol/Feature";
import { TYPE_AIRPORT } from "@/constants/featureConstants";
import { useAirportFeatureStore } from "@/store/featureStore";

interface  AirportUpdaterProps {
    source: VectorSource<any>;  
}

const AirportUpdater = ({ source }: AirportUpdaterProps) => {
    const setAirportFeatures = useAirportFeatureStore(state => state.setAirportFeatures);
    const loadAirportFeatures = async () => {
        try{
            const featuresData = await getAllAirportList();
            if(featuresData){
                const features = featuresData.map((item) => {
                    const lat = parseFloat(String(item[6]));
                    const lon = parseFloat(String(item[7]));
                    if (isNaN(lat) || isNaN(lon)) return null;
                    return new Feature({
                        geometry: new Point(fromLonLat([lon, lat])),
                        id: item[0],
                        name: item[1],
                        city: item[2],
                        country: item[3],
                        iata: item[4],
                        icao: item[5],
                        type: TYPE_AIRPORT,
                        click_type: TYPE_AIRPORT
                    });
                }).filter(Boolean) as FeatureLike[]
                source.clear();
                setAirportFeatures(features);
                source.addFeatures(features);
            }
        }catch(err){
            console.error(err);
        }finally{
            
        }
    }
    useEffect(()=>{
        loadAirportFeatures();
    },[source]);
    return null;
}

export default AirportUpdater;