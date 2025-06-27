import { useSettingExtStore } from "@/store/settingStore";
import SelectBar from "@/components/common/SelectBar";
import styles from '@/assets/css/setting/units/UnitItem.module.scss';
const TemperatureUnits = () => {
    const tempUnits = useSettingExtStore(state=>state.tempUnits);
    const setTempUnits = useSettingExtStore(state=>state.setTempUnits);
    const list = [
        {
            name:'°C',
            value: 'CE',
            isSelected: tempUnits === 'CE'
        },
                {
            name:'°F',
            value: 'FA',
            isSelected: tempUnits === 'FA'
        },
    ];
    return(
        <div className={`${styles.unitsBox}`}>
            <SelectBar selectList={list} action={setTempUnits} />
        </div>
    )
};

export default TemperatureUnits;