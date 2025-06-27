import SelectBar from "@/components/common/SelectBar";
import { useAircraftFilterStore } from "@/store/filtersStore";
import styles from '@/assets/css/filters/FilterItem.module.scss';
import { FiltersLang } from "@/constants/languageContants";

const FilterAltitude = ({lang}) => {
  const isLow = useAircraftFilterStore((state) => state.altitude.low); 
  const isMiddle = useAircraftFilterStore((state) => state.altitude.middle);
  const isHigh = useAircraftFilterStore((state) => state.altitude.high);
  const setAltitude = useAircraftFilterStore((state) => state.setAltitude);
  const options = [
    {
      name: FiltersLang['AIRCRAFT']['ALTITUDE']['LOW'][lang],
      value: "low",
      isSelected: isLow,
    },
    {
      name: FiltersLang['AIRCRAFT']['ALTITUDE']['MIDDLE'][lang],
      value: "middle",
      isSelected: isMiddle,
    },
    {
      name: FiltersLang['AIRCRAFT']['ALTITUDE']['HIGH'][lang],
      value: "high",
      isSelected: isHigh,
    },
  ];
  const handleSelect = (value: string) => {
    const current = value === "low" ? isLow : value === "middle" ? isMiddle : isHigh;
    setAltitude({ [value]: !current });
  };
  return (
    <div className={`${styles.filterItem}`}>
      <SelectBar selectList={options} action={handleSelect} />
    </div>
  );
}

export default FilterAltitude;