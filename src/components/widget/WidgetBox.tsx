import styles from '@/assets/css/widget/WidgetBox.module.scss';
import { useState } from 'react';
import upImg from '@/assets/img/widget/up.svg';
import upDarkImg from '@/assets/img/widget/up_dark.svg';
import downImg from '@/assets/img/widget/down.svg';
import downDarkImg from '@/assets/img/widget/down_dark.svg';
import { THEME_DARK } from '@/constants/settingConstant';
import { useRightMenuStore } from '@/store/rightMenuStore';

const WidgetBox = ({title,children}) => {
    const theme = useRightMenuStore(state => state.theme);
    const [isOpen, setIsOpen] = useState(true);
    const toggleOpen = () => {
      setIsOpen(!isOpen);  
    };
    return (
        <div className={`${styles.widgetBox}`}>
            <div className={`${styles.header} ${theme === THEME_DARK ? styles.dark:''}`}>
                <strong>{title}</strong>
                <div className={`${styles.btn}`} onClick={toggleOpen}>
                    {isOpen ? <img width={20} height={20} src={theme === THEME_DARK ? upDarkImg : upImg}/>:<img width={20} height={20} src={theme === THEME_DARK ? downDarkImg : downImg}/>}
                </div>
            </div>
            <div className={`${styles.contentBox} ${isOpen ? styles.open : styles.close} ${theme === THEME_DARK ? styles.dark:''}`}>
                {children}
            </div>
        </div>
    )
}

export default WidgetBox;