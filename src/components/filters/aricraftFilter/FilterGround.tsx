import SelectBar from "@/components/common/SelectBar";
import { useAircraftFilterStore } from "@/store/filtersStore";
import styles from '@/assets/css/filters/FilterItem.module.scss';
import { FiltersLang } from "@/constants/languageContants";

const FilterGround = ({lang}) => {
  const isGrounded = useAircraftFilterStore((state) => state.status.grounded);
  const isAirbone = useAircraftFilterStore((state) => state.status.airbone);
  const setStatus = useAircraftFilterStore((state) => state.setStatus);
  const options = [
    {
      name: FiltersLang['AIRCRAFT']['STATUS']['GROUND'][lang],
      value: "grounded",
      isSelected: isGrounded,
    },
    {
      name: FiltersLang['AIRCRAFT']['STATUS']['AIRBONE'][lang],
      value: "airbone",
      isSelected: isAirbone,
    },
  ];
  const handleSelect = (value: string) => {
    setStatus({ [value]: !(value === "grounded" ? isGrounded : isAirbone) });
  };
  return (
    <div className={`${styles.filterItem}`}>
      <SelectBar selectList={options} action={handleSelect} />
    </div>
  );
};

export default FilterGround;