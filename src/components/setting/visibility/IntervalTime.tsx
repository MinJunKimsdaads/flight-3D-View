import SelectBar from "@/components/common/SelectBar";
import { useSettingMapVisibilityStore } from "@/store/settingStore";
import styles from '@/assets/css/setting/visibility/IntervalTime.module.scss';

const IntervalTime = () => {
  const intervalTime = useSettingMapVisibilityStore(state => state.intervalTime);
  const setIntervalTime = useSettingMapVisibilityStore(state => state.setIntervalTime);
  const list = [
    {
      name: '15m',
      value: 15*60*1000,
      isSelected: intervalTime === 15*60*1000
    },
    {
      name: '30m',
      value: 30*60*1000,
      isSelected: intervalTime === 30*60*1000
    },
    {
      name: '45m',
      value: 45*60*1000,
      isSelected: intervalTime === 45*60*1000
    },
    {
      name: '60m',
      value: 60*60*1000,
      isSelected: intervalTime === 60*60*1000
    },
  ]
  return(
    <div className={`${styles.intervalTimeBox}`}>
      <SelectBar selectList={list} action={setIntervalTime} />
    </div>
  )  
};

export default IntervalTime;