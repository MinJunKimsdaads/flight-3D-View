import { THEME_DARK } from "@/constants/settingConstant";
import FilterGround from "./aricraftFilter/FilterGround";
import styles from '@/assets/css/filters/FilterList.module.scss';
import FilterAltitude from "./aricraftFilter/FilterAltitude";
import FilterSpeed from "./aricraftFilter/FilterSpeed";
import FilterCountry from "./aricraftFilter/FilterCountry";
import { FiltersLang } from "@/constants/languageContants";

const FilterAircraft = ({theme,lang}) => {
    const options = [
      {
        key:'STATUS',
        Component:FilterGround,
      },
      {
        key:'SPEED',
        Component:FilterSpeed,
      }, 
      {
        key:'ALTITUDE',
        Component:FilterAltitude,
      }, 
      {
        key:'COUNTRY',
        Component:FilterCountry,
      }, 
    ];
    return (
        <div className={`${styles.filter} ${theme === THEME_DARK && styles.dark}`}>
            {options.map(({key,Component})=>(
                <div className={`${styles.filterMenu}`} key={key}>
                    <div><strong>{FiltersLang['AIRCRAFT'][key][lang]}</strong></div>
                    <Component lang={lang}/>
                </div>
            ))}
        </div>
    )
}

export default FilterAircraft;