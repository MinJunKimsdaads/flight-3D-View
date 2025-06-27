import { useSettingExtStore } from "@/store/settingStore";
import SelectBar from "@/components/common/SelectBar";
import styles from '@/assets/css/setting/units/UnitItem.module.scss';
const DistanceUnits = () => {
    const distanceUnits = useSettingExtStore(state => state.distanceUnits);
    const setDistanceUnits = useSettingExtStore(state => state.setDistanceUnits);
    const list = [
        {
            name:'Meters',
            value: 'ME',
            isSelected: distanceUnits === 'ME'
        },
        // {
        //     name:'Km',
        //     value: 'KM',
        //     isSelected: distanceUnits === 'KM'
        // },
        {
            name:'Miles',
            value: 'MI',
            isSelected: distanceUnits === 'MI'
        },
    ];
    return(
        <div className={`${styles.unitsBox}`}>
            <SelectBar selectList={list} action={setDistanceUnits} />
        </div>
    );
};

export default DistanceUnits;