import { create } from "zustand";

interface AircraftFilterState {
  status: {
    grounded: boolean;
    airbone: boolean;
  };
  speed: {
    low: boolean;
    middle: boolean;
    high: boolean;
  };
  altitude: {
    low: boolean;
    middle: boolean;
    high: boolean;
  };
  country: {
    korea: boolean;
    japan: boolean;
    etc: boolean;
  };
  setStatus: (status: Partial<AircraftFilterState["status"]>) => void;
  setSpeed: (speed: Partial<AircraftFilterState["speed"]>) => void;
  setAltitude: (altitude: Partial<AircraftFilterState["altitude"]>) => void;
  setCountry: (country: Partial<AircraftFilterState["country"]>) => void;
}

interface AirportFilterState {
  country: {
    korea: boolean;
    japan: boolean;
    etc: boolean;
  };
  setCountry: (country: Partial<AircraftFilterState["country"]>) => void;
}

export const useAircraftFilterStore = create<AircraftFilterState>((set) => ({
  status: {
    grounded: true,
    airbone: true,
  },
  speed: {
    low: true,
    middle: true,
    high: true,
  },
  altitude: {
    low: true,
    middle: true,
    high: true,
  },
  country: {
    korea: true,
    japan: true,
    etc: true,
  },
  setStatus: (status) => set((state) => ({ status: { ...state.status, ...status } })),
  setSpeed: (speed) => set((state) => ({ speed: { ...state.speed, ...speed } })),
  setAltitude: (altitude) => set((state) => ({ altitude: { ...state.altitude, ...altitude } })),
  setCountry: (country) => set((state) => ({ country: { ...state.country, ...country } })),
}));


export const useAirportFilterStore = create<AirportFilterState>((set)=>({
  country: {
    korea: true,
    japan: true,
    etc: true,
  },
  setCountry: (country) => set((state) => ({ country: { ...state.country, ...country } })),
}))