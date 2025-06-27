import styles from '@/assets/css/topMenu/topMenu.module.scss';
import Logo from './Logo';
import menuImg from '@/assets/img/topMenu/menu.svg';
import menuDarkImg from '@/assets/img/topMenu/menu_dark.svg';
import { THEME_DARK } from '@/constants/settingConstant';
import Time from './Time';
import { useRightMenuStore } from '@/store/rightMenuStore';

const TopMenu = () => {
    const menu = useRightMenuStore(state => state.menu);
    const setMenu = useRightMenuStore(state => state.setMenu);
    const theme = useRightMenuStore(state => state.theme);
    
    return (
        <div className={`${styles.topMenuBox} ${theme === THEME_DARK ? styles.dark:''}`}>
            <div className={`${styles.tap}`}>
                <Logo></Logo>
            </div>
            <div>
                <Time></Time>
            </div>
            <div className={`${styles.menuBtn} ${menu ? styles.active:''}`} onClick={()=>{
                setMenu(!menu);
            }}>
                <img src={`${theme === THEME_DARK ? menuDarkImg:menuImg}`} width={30} height={30} alt='menuBtn'/>
            </div>
        </div>
    )
}

export default TopMenu;