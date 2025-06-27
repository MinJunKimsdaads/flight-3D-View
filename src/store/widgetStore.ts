import { create } from "zustand";

interface DepartureState {
    departure: string;
    setDeparture: (departure: string) => void;
};

interface ArrivalState {
    arrival: string;
    setArrival: (arrival: string) => void;
}

export const useDepartureStore = create<DepartureState>((set)=>({
    departure:'RKSI',
    setDeparture: (departure) => set({departure: departure}),
}));

export const useArrivalStore = create<ArrivalState>((set)=>({
    arrival:'RKSI',
    setArrival: (arrival) => set({arrival: arrival}),
}));