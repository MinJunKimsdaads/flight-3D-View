import { THEME_DARK } from "@/constants/settingConstant";
import styles from '@/assets/css/filters/FilterList.module.scss';
import FilterAirportCountry from "./airportFilter/FilterAirportCountry";
import { FiltersLang } from "@/constants/languageContants";

const FilterAirport = ({theme,lang}) => {
    const options = [
      {
        key:'COUNTRY',
        Component:FilterAirportCountry,
      },
    ];
    return (
        <div className={`${styles.filter} ${theme === THEME_DARK && styles.dark}`}>
            {options.map(({key,Component})=>(
                <div className={`${styles.filterMenu}`} key={key}>
                    <div><strong>{FiltersLang['AIRPORT'][key][lang]}</strong></div>
                    <Component lang={lang}/>
                </div>
            ))}
        </div>
    )
}

export default FilterAirport;