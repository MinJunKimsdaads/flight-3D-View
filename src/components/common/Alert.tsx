import { useGlobalStore } from "@/store/commonStore";
import { useRightMenuStore } from "@/store/rightMenuStore";
import styles from '@/assets/css/common/Alert.module.scss';
import { THEME_DARK } from "@/constants/settingConstant";
import closeImg from '@/assets/img/common/close.svg';
import closeDarkImg from '@/assets/img/common/close_dark.svg';

const Alert = () => {
    const theme = useRightMenuStore(state => state.theme);
    const alert = useGlobalStore(state => state.isAlert);
    const resetAlert = useGlobalStore(state => state.resetAlert);
    const resetHandler = () => {
        resetAlert();
    };
    return (
        <div className={`${styles.alertWrap} ${theme === THEME_DARK && styles.dark}`}>
            <div className={`${styles.alertBox} ${theme === THEME_DARK && styles.dark}`}>
                <div className={`${styles.header}`}>
                    <div>
                        <strong>{alert.title}</strong>
                    </div>
                    <div onClick={()=>{resetHandler()}} className={`${styles.closeBtn}`}>
                        <img src={theme === THEME_DARK ? closeDarkImg : closeImg} width={25} height={25}/>
                    </div>
                </div>
                <div className={`${styles.contents}`}>
                    <div>{alert.contents}</div>
                </div>
                <div className={`${styles.bottom}`}>
                    <div onClick={()=>{resetHandler()}} className={`${styles.btn}`}>
                        <strong>Confirm</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Alert;