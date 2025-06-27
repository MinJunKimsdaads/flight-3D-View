import logo from '@/assets/img/topMenu/logo.png';
import logo_dark from '@/assets/img/topMenu/logo_dark.png';
import { THEME_DARK } from '@/constants/settingConstant';
import { useRightMenuStore } from '@/store/rightMenuStore';

const Logo = () => {
    const theme = useRightMenuStore(state => state.theme);
    return (
        <img src={theme === THEME_DARK ? logo_dark : logo} height={40}/>
    );
}

export default Logo;