import { useSettingExtStore } from "@/store/settingStore";
import { formatTimestamp } from "@/util/util";
import { useEffect, useState } from "react";
import styles from '@/assets/css/topMenu/Time.module.scss';

const Time = () => {
    const timeUnits = useSettingExtStore(state => state.timeUnits);
    const [time, setTime] = useState(new Date());
    useEffect(()=>{
        const timer = setInterval(()=>{
            setTime(new Date());
        },1000);
        return ()=>clearInterval(timer);
    },[]);
    return (
        <span className={`${styles.time}`}>{formatTimestamp(time,timeUnits)} ({timeUnits})</span>
    )
}

export default Time;