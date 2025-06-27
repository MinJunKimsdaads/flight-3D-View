import { filteredAircraftFeatures, filteredAirportFeatures } from "@/sevices/features/filters";
import { airportLayer, currentAircraftLayer } from "@/sevices/maps/layer";
import { useAircraftFeatureStore, useAirportFeatureStore } from "@/store/featureStore";
import { useAircraftFilterStore, useAirportFilterStore } from "@/store/filtersStore";
import { useEffect } from "react";

const FilterUpdater = () => {
    const status = useAircraftFilterStore((state) => state.status);
    const speed = useAircraftFilterStore((state) => state.speed);
    const altitude = useAircraftFilterStore((state) => state.altitude);
    const country = useAircraftFilterStore((state) => state.country);
    const features = useAircraftFeatureStore((state) => state.aircraftFeatures);

    const airportFeatures = useAirportFeatureStore((state) => state.airportFeatures);
    const airportCountry = useAirportFilterStore((state)=>state.country);

    useEffect(()=>{
        const source = currentAircraftLayer.getSource();
        if(source){
            source.clear();
            if(features){
                const filteredFeatures = filteredAircraftFeatures(features);
                source.addFeatures(filteredFeatures);
            }
        }
    },[status,speed,altitude,country]);

    useEffect(()=>{
        const source = airportLayer.getSource();
        if(source){
            source.clear();
            if(airportFeatures){
                const filteredFeatures = filteredAirportFeatures(airportFeatures);
                source.addFeatures(filteredFeatures);
            }
        }
    },[airportCountry])

    return null;
};

export default FilterUpdater;