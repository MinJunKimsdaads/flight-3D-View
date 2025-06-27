import SelectBar from "@/components/common/SelectBar";
import { useAircraftFilterStore } from "@/store/filtersStore";
import styles from '@/assets/css/filters/FilterItem.module.scss';
import { FiltersLang } from "@/constants/languageContants";

const FilterCountry = ({lang}) => {
  const isKorea = useAircraftFilterStore((state) => state.country.korea); 
  const isJapan = useAircraftFilterStore((state) => state.country.japan);
  const isEtc = useAircraftFilterStore((state) => state.country.etc);
  const setCountry = useAircraftFilterStore((state) => state.setCountry);
  const options = [
    {
      name: FiltersLang['AIRCRAFT']['COUNTRY']['KOREA'][lang],
      value: "korea",
      isSelected: isKorea,
    },
    {
      name: FiltersLang['AIRCRAFT']['COUNTRY']['JAPAN'][lang],
      value: "japan",
      isSelected: isJapan,
    },
    {
      name: FiltersLang['AIRCRAFT']['COUNTRY']['ETC'][lang],
      value: "etc",
      isSelected: isEtc,
    },
  ];
  const handleSelect = (value: string) => {
    const current = useAircraftFilterStore.getState().country;
    setCountry({
      [value]: !current[value as keyof typeof current],
    });
  };
  return (
    <div className={`${styles.filterItem}`}>
      <SelectBar selectList={options} action={handleSelect} />
    </div>
  );
}

export default FilterCountry;