import ControlerBtn from "./ControlerBtn";
import styles from "@/assets/css/controler/Controler.module.scss";
import settingImg from '@/assets/img/controler/setting.svg';
import settingDarkImg from '@/assets/img/controler/setting_dark.svg';
import filterImg from '@/assets/img/controler/filter.svg';
import filterDarkImg from '@/assets/img/controler/filter_dark.svg';
import widgetImg from '@/assets/img/controler/widget.svg';
import widgetDarkImg from '@/assets/img/controler/widget_dark.svg';
import weatherImg from '@/assets/img/controler/weather.svg';
import weatherDarkImg from '@/assets/img/controler/weather_dark.svg';
import { useControlerStore } from "@/store/controlerStore";
import { FILTER, WEATHER, SETTING, WIDGET } from "@/constants/controlerConstant";
import { THEME_DARK } from "@/constants/settingConstant";
import { useRightMenuStore } from "@/store/rightMenuStore";

const Controler = () => {
    const control = useControlerStore(state => state.control);
    const setControl = useControlerStore(state => state.setControl);
    const theme = useRightMenuStore(state => state.theme);

    const toggleControl = (selectedControl:string) => {
        if(control === selectedControl){
            setControl(null);
        }else{
            setControl(selectedControl);
        }
    }
    const list = [
        {
            title:SETTING,
            dark_img: settingDarkImg,
            img: settingImg,
        },
        {
            title:FILTER,
            dark_img: filterDarkImg,
            img: filterImg,
        },
        {
            title:WIDGET,
            dark_img: widgetDarkImg,
            img: widgetImg,
        },
        {
            title:WEATHER,
            dark_img: weatherDarkImg,
            img: weatherImg,
        },
    ]
    return (
        <div className={`${styles.controlerBox} ${theme === THEME_DARK ? styles.dark:''}`}>
            {list.map((i)=>(
                <ControlerBtn key={i.title} title={i.title} img={theme === THEME_DARK ? i.dark_img:i.img} action={()=>{toggleControl(i.title)}}/>
            ))}
        </div>
    )
}

export default Controler;