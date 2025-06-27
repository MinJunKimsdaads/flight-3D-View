import styles from '@/assets/css/map/ProhibitedHoveredPopup.module.scss';
import { THEME_DARK } from '@/constants/settingConstant';
const ProhibitedHoveredPopup = ({props,theme}) => {
    return(
        <div className={`${styles.prohibitedAreaHoveredPopup} ${theme === THEME_DARK && styles.dark}`}>
            <div className={`${styles.lbl1}`}><strong>{props.prh_lbl_1 ? props.prh_lbl_1:'-'}</strong></div>
            <div className={`${styles.lbl4}`}>{props.prh_lbl_4 ? props.prh_lbl_4:'-'}</div>
        </div>
    );
};

export default ProhibitedHoveredPopup;