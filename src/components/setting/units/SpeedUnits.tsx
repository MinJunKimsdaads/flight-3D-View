import { useSettingExtStore } from "@/store/settingStore";
import SelectBar from "@/components/common/SelectBar";
import styles from '@/assets/css/setting/units/UnitItem.module.scss';
const SpeedUnits = () => {
    const speedUnits = useSettingExtStore(state=>state.speedUnits);
    const setSpeedUnits = useSettingExtStore(state=>state.setSpeedUnits);
    const list = [
        {
            name:'M/s',
            value: 'ME',
            isSelected: speedUnits === 'ME'
        },
        {
            name:'Km/h',
            value: 'KM',
            isSelected: speedUnits === 'KM'
        },
        // {
        //     name:'Knots',
        //     value: 'KN',
        //     isSelected: speedUnits === 'KN'
        // },
        // {
        //     name:'Mph',
        //     value: 'MP',
        //     isSelected: speedUnits === 'MP'
        // },
    ];
    return (
        <div className={`${styles.unitsBox}`}>
            <SelectBar selectList={list} action={setSpeedUnits} />
        </div>
    )
}

export default SpeedUnits;