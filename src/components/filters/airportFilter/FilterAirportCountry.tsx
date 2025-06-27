import SelectBar from "@/components/common/SelectBar";
import { useAirportFilterStore } from "@/store/filtersStore";
import styles from '@/assets/css/filters/FilterItem.module.scss';
import { FiltersLang } from "@/constants/languageContants";

const FilterAirportCountry = ({lang}) => {
  const isKorea = useAirportFilterStore((state) => state.country.korea); 
  const isJapan = useAirportFilterStore((state) => state.country.japan);
  const isEtc = useAirportFilterStore((state) => state.country.etc);
  const setCountry = useAirportFilterStore((state) => state.setCountry);
  const options = [
    {
      name: FiltersLang['AIRPORT']['COUNTRY']['KOREA'][lang],
      value: "korea",
      isSelected: isKorea,
    },
    {
      name: FiltersLang['AIRPORT']['COUNTRY']['JAPAN'][lang],
      value: "japan",
      isSelected: isJapan,
    },
    {
      name: FiltersLang['AIRPORT']['COUNTRY']['ETC'][lang],
      value: "etc",
      isSelected: isEtc,
    },
  ];
  const handleSelect = (value: string) => {
    const current = useAirportFilterStore.getState().country;
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

export default FilterAirportCountry;