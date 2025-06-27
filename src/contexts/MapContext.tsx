import { createContext, useContext, useState } from "react";
import { Map } from "ol";

type MapContextType = {
    map: Map | null;
    setMap: (map: Map) => void;
}

const MapContext = createContext<MapContextType | undefined>(undefined);

export const MapProvider = ({children}:{children: React.ReactNode}) => {
    const [map, setMap] = useState<Map | null>(null);

    return (
        <MapContext.Provider value={{map, setMap}}>
            {children}
        </MapContext.Provider>
    );
};

export const useMap = () => {
    const ctx = useContext(MapContext);
    if(!ctx) throw new Error("useMap must be used within a MapProvide");
    return ctx;
};