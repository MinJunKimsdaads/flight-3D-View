import { create } from "zustand";

interface WeatherState {
    layer:'cloud'|'precipitaion'|'pressure'|'wind'|'temp'|null;
    isWeatherMap:boolean;
    setIsWeatherMap: (isWeatherMap:boolean) => void;
    setLayer:(layer:'cloud'|'precipitaion'|'pressure'|'wind'|'temp'|null)=>void;
}

export const useWeatherStore = create<WeatherState>((set)=>({
    layer:null,
    isWeatherMap:false,
    setIsWeatherMap:(isWeatherMap)=>set({isWeatherMap:isWeatherMap}),
    setLayer:(layer)=>set({layer:layer}),
}))

