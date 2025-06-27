import { create } from "zustand";
import { FeatureLike } from "ol/Feature";

interface aircraftFeaturesState {
    aircraftFeatures:null|any[];
    setAircraftFeatures: (features:null|any[]) => void;
}
interface airportFeaturesState {
    airportFeatures:null|any[];
    setAirportFeatures: (features:null|any[]) => void;
}
interface HoverState {
    hoveredAircraft: FeatureLike | null;
    setHoveredAircraft: (feature:FeatureLike | null) => void;
}
interface SelectState {
    selectedFeature: FeatureLike | null;
    setSelectedFeature: (selectedFeature:FeatureLike | null) => void;
    resetFeature: ()=>void;
}
export const useAircraftFeatureStore = create<aircraftFeaturesState>((set)=>({
    aircraftFeatures:null,
    setAircraftFeatures: (aircraftFeatures) => set({aircraftFeatures:aircraftFeatures}),
}));

export const useAirportFeatureStore = create<airportFeaturesState>((set)=>({
    airportFeatures:null,
    setAirportFeatures: (airportFeatures) => set({airportFeatures:airportFeatures}),
}));
export const useFeatureHoverStore = create<HoverState>((set)=>({
    hoveredAircraft: null,
    setHoveredAircraft: (feature) => set({hoveredAircraft: feature}),
}));
export const useFeatureSelectStore = create<SelectState>((set)=>({
    selectedFeature: null,
    setSelectedFeature: (feature) => set({selectedFeature:feature}),
    resetFeature : ()=>set({selectedFeature:null}),
}));