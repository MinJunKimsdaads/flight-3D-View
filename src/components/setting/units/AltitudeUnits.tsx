import { useSettingExtStore } from "@/store/settingStore";
import SelectBar from "@/components/common/SelectBar";
import styles from '@/assets/css/setting/units/UnitItem.module.scss';
const AltitudeUnits = () => {
    const altUnits = useSettingExtStore(state=>state.altUnits);
    const setAltUnits = useSettingExtStore(state=>state.setAltUnits);
    const list = [
        {
            name:'Meters',
            value: 'ME',
            isSelected: altUnits === 'ME'
        },
        {
            name:'Feet',
            value: 'FE',
            isSelected: altUnits === 'FE'
        },
    ];
    return(
        <div className={`${styles.unitsBox}`}>
            <SelectBar selectList={list} action={setAltUnits} />
        </div>
    )
};

export default AltitudeUnits;