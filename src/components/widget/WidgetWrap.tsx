import { useRightMenuStore } from "@/store/rightMenuStore";
import Departure from "./Departure";
import WidgetBox from "./WidgetBox";
import styles from "@/assets/css/widget/WidgetWrap.module.scss";
import Arrival from "./Arrival";

const WidgetWrap = () => {
    const theme = useRightMenuStore(state => state.theme);
    return(
        <div className={styles.widgetWrap}>
            <WidgetBox title='Departure'>
                <Departure theme={theme}/>
            </WidgetBox>
            <WidgetBox title='Arrival'>
                <Arrival theme={theme}/>
            </WidgetBox>
        </div>
    )
};

export default WidgetWrap;