import { SETTING_LAYER } from "@/constants/settingConstant";
import { create } from "zustand";

interface SettingMapStyleState {
    layer: string;
    opacity: number;
    brightness: number;
    prohibitedArea:boolean;
    rain: boolean;
    cloud: boolean;
    snow: boolean;
    dayNight: boolean;
    setLayer: (layer:string) => void;
    setOpacity: (opacity:number) => void;
    setBrightness: (brightness:number) => void;
    setProhibitedArea: (prohibitedArea:boolean) => void;
    setRain: (rain:boolean) => void;
    setCloud: (cloud:boolean) => void;
    setSnow: (snow:boolean) => void;
    setDayNight: (dayNight:boolean) => void;
}

interface SettingVisibilityState {
    aircraftIconScale:number;
    aircraftIconColor:string;
    aircraftHoveredColor:string;
    airportIconScale:number;
    airportIconColor: string;
    airportHoveredColor:string;
    intervalTime:number;
    setAircraftIconScale: (aircraftIconScale:number) => void;
    setAircraftIconColor: (aircraftIconColor:string) => void;
    setAircraftHoveredColor: (aircraftHoveredColor:string) => void;
    setAirportIconScale: (airportIconScale:number) => void;
    setAirportIconColor: (airportIconColor:string) => void;
    setAirportHoveredColor: (airportHoveredColor:string) => void;
    setIntervalTime: (intervalTime:number) => void;
}

interface SettingExtState {
    timeUnits:'UTC'|'KST';
    distanceUnits:'KM'|'MI'|'ME';
    speedUnits:'KM'|'KN'|'MP'|'ME';
    tempUnits:'CE'|'FA',
    altUnits:'FE'|'ME',
    setTimeUnits: (timeUnits:'UTC'|'KST') => void;
    setDistanceUnits: (distanceUnits:'KM'|'MI'|'ME') => void;
    setSpeedUnits: (speedUnits:'KM'|'KN'|'MP'|'ME') => void;
    setTempUnits: (tempUnits:'CE'|'FA') => void;
    setAltUnits: (altUnits:'FE'|'ME') => void;
}

export const useSettingMapLayerStore = create<SettingMapStyleState>((set)=>({
    layer: SETTING_LAYER[0].layer,
    opacity: 1,
    brightness:100,
    prohibitedArea:false,
    rain: false,
    cloud: false,
    snow: false,
    dayNight:false,
    setLayer: (layer) => set({layer: layer}),
    setOpacity: (opacity) => set({opacity: opacity}),
    setBrightness: (brightness) => set({brightness: brightness}),
    setProhibitedArea: (prohibitedArea) => set({prohibitedArea: prohibitedArea}),
    setRain: (rain) => set({rain: rain}),
    setCloud: (cloud) => set({cloud: cloud}),
    setSnow: (snow) => set({snow: snow}),
    setDayNight: (dayNight) => set({dayNight: dayNight}),
}));

export const useSettingMapVisibilityStore = create<SettingVisibilityState>((set)=>({
    aircraftIconScale:0.7,
    aircraftIconColor:'#FFFF00',
    aircraftHoveredColor:'#FF0000',
    airportIconScale:0.7,
    airportIconColor: '#0d99ff',
    airportHoveredColor:'#FF0000',
    intervalTime:15*60*1000,
    setAircraftIconScale: (aircraftIconScale) => set({aircraftIconScale: aircraftIconScale}),
    setAircraftIconColor: (aircraftIconColor) => set({aircraftIconColor: aircraftIconColor}),
    setAircraftHoveredColor: (aircraftHoveredColor) => set({aircraftHoveredColor: aircraftHoveredColor}),
    setAirportIconScale: (airportIconScale) => set({airportIconScale: airportIconScale}),
    setAirportIconColor: (airportIconColor) => set({airportIconColor: airportIconColor}),
    setAirportHoveredColor: (airportHoveredColor) => set({airportHoveredColor: airportHoveredColor}),
    setIntervalTime: (intervalTime) => set({intervalTime: intervalTime}),
}));

export const useSettingExtStore = create<SettingExtState>((set)=>({
    timeUnits:'KST',
    distanceUnits:'ME',
    speedUnits:'ME',
    tempUnits:'CE',
    altUnits:'ME',
    setTimeUnits:(timeUnits)=>set({timeUnits:timeUnits}),
    setDistanceUnits:(distanceUnits)=>set({distanceUnits:distanceUnits}),
    setSpeedUnits:(speedUnits)=>set({speedUnits:speedUnits}),
    setTempUnits:(tempUnits)=>set({tempUnits:tempUnits}),
    setAltUnits:(altUnits)=>set({altUnits:altUnits}),
}));