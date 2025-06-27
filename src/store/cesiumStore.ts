import { create } from "zustand";

interface CesiumProps {
    isCesiumShow:boolean;
    longitude: number|null;
    latitude: number|null;
    altitude: number|null;
    setIsCesiumShow: (isCesiumShow:boolean)=>void;
    setLongitude: (longitude: number|null)=>void;
    setLatitude: (latitude: number|null)=>void;
    setAltitude: (altitude: number|null)=>void;
    resetCesium: () => void;
}

export const useCesiumStore = create<CesiumProps>((set)=>({
    isCesiumShow:false,
    longitude:null,
    latitude:null,
    altitude:null,
    setIsCesiumShow: (isCesiumShow)=>set({isCesiumShow:isCesiumShow}),
    setLongitude: (longitude)=>set({longitude:longitude}),
    setLatitude: (latitude)=>set({latitude:latitude}),
    setAltitude: (altitude)=>set({altitude:altitude}),
    resetCesium:()=>set({
        isCesiumShow: false,
        longitude: null,
        latitude: null,
        altitude: null,
    }),
}));