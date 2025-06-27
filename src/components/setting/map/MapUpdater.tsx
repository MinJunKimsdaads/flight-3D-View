import { dayNightLayer } from "@/sevices/maps/layer";
import { useSettingExtStore, useSettingMapLayerStore } from "@/store/settingStore";
import { useEffect, useRef } from "react";

const MapUpdater = () => {
    const timeUnits = useSettingExtStore(state=>state.timeUnits);
    const dayNight = useSettingMapLayerStore(state=>state.dayNight);
    const intervalRef = useRef<number | null>(null);
    useEffect(()=>{
        const source = dayNightLayer.getSource() as any;
        if (!source) return;
        const updateTime = () => {
            let now;
            if (timeUnits === 'UTC') {
                now = new Date().toISOString().substring(0, 16);
            } else {
                now = new Date(new Date().getTime() + 9 * 60 * 60 * 1000).toISOString().substring(0, 16); // KST
            }
            source.setTime?.(now);
        };
        if (dayNight) {
            dayNightLayer.setVisible(true);
            updateTime();
            intervalRef.current = setInterval(updateTime, 10 * 60 * 1000); // 10분
        } else {
            dayNightLayer.setVisible(false);
            if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            }
        }
        return () => {
            if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            }
        };
    }, [dayNight, timeUnits]);

    return null;
}

export default MapUpdater;