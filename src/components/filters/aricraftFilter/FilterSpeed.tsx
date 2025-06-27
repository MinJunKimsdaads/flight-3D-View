import SelectBar from "@/components/common/SelectBar";
import { useAircraftFilterStore } from "@/store/filtersStore";
import styles from '@/assets/css/filters/FilterItem.module.scss';
import { FiltersLang } from "@/constants/languageContants";

const FilterSpeed = ({lang}) => {
  const isLow = useAircraftFilterStore((state) => state.speed.low); 
  const isMiddle = useAircraftFilterStore((state) => state.speed.middle);
  const isHigh = useAircraftFilterStore((state) => state.speed.high);
  const setSpeed = useAircraftFilterStore((state) => state.setSpeed);
  const options = [
    {
      name: FiltersLang['AIRCRAFT']['SPEED']['LOW'][lang],
      value: "low",
      isSelected: isLow,
    },
    {
      name: FiltersLang['AIRCRAFT']['SPEED']['MIDDLE'][lang],
      value: "middle",
      isSelected: isMiddle,
    },
    {
      name: FiltersLang['AIRCRAFT']['SPEED']['HIGH'][lang],
      value: "high",
      isSelected: isHigh,
    },
  ];
  const handleSelect = (value: string) => {
    const current = value === "low" ? isLow : value === "middle" ? isMiddle : isHigh;
    setSpeed({ [value]: !current });
  };
  return (
    <div className={`${styles.filterItem}`}>
      <SelectBar selectList={options} action={handleSelect} />
    </div>
  );
}

export default FilterSpeed;