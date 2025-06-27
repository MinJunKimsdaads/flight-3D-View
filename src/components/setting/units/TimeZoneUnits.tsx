import { useSettingExtStore } from "@/store/settingStore";
import SelectBar from "@/components/common/SelectBar";
import styles from '@/assets/css/setting/units/UnitItem.module.scss';
const TimeZoneUnits = () => {
    const timeUnits = useSettingExtStore(state=>state.timeUnits);
    const setTimeUnits = useSettingExtStore(state=>state.setTimeUnits);
    const list = [
        {
            name:'KST',
            value: 'KST',
            isSelected: timeUnits === 'KST'
        },
        {
            name:'UTC',
            value: 'UTC',
            isSelected: timeUnits === 'UTC'
        },
    ];
    return (
        <div className={`${styles.unitsBox}`}>
            <SelectBar selectList={list} action={setTimeUnits} />
        </div>
    )
};

export default TimeZoneUnits;