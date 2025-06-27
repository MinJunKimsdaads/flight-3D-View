import styles from '@/assets/css/RightMenu/RightMenu.module.scss';
import RightMenuBtn from './RightMenuBtn';
import { useState } from 'react';
import { toggleFullScreen, toggleLang, toggleTheme, zoomIn, zoomOut } from '@/util/rightMenu';
import { useMap } from '@/contexts/MapContext';
//img
import fullScreenOnImg from '@/assets/img/rightMenu/fullScreenOn.svg';
import fullScreenOffImg from '@/assets/img/rightMenu/fullScreenOff.svg';
import fullScreenOnDarkImg from '@/assets/img/rightMenu/fullScreenOn_dark.svg';
import fullScreenOffDarkImg from '@/assets/img/rightMenu/fullScreenOff_dark.svg';
import darkModeImg from '@/assets/img/rightMenu/darkMode.svg';
import simpleModeImg from '@/assets/img/rightMenu/simpleMode.svg';
import plusImg from '@/assets/img/rightMenu/plus.svg';
import plusDarkImg from '@/assets/img/rightMenu/plus_dark.svg';
import minusImg from '@/assets/img/rightMenu/minus.svg';
import minusDarkImg from '@/assets/img/rightMenu/minus_dark.svg';
import searchImg from '@/assets/img/rightMenu/search.svg';
import searchDarkImg from '@/assets/img/rightMenu/search_dark.svg';
import searchActiveImg from '@/assets/img/rightMenu/search_active.svg';
import koImg from '@/assets/img/rightMenu/KO.svg';
import koDarkImg from '@/assets/img/rightMenu/KO_dark.svg';
import enImg from '@/assets/img/rightMenu/EN.svg';
import enDarkImg from '@/assets/img/rightMenu/EN_dark.svg';
//img
import { THEME_DARK } from '@/constants/settingConstant';
import { useRightMenuStore } from '@/store/rightMenuStore';
import { RightMenuLang } from '@/constants/languageContants';


const RightMenu = () => {
    const {map} = useMap();
    const theme = useRightMenuStore(state => state.theme);
    const isSearch = useRightMenuStore(state => state.isSearch);
    const setSearch = useRightMenuStore(state => state.setSearch);
    const lang = useRightMenuStore(state => state.language);
    const [isFullScreen, setIsFullScreen] = useState(false);
    return(
        <div className={`${styles.rightMenuBox}`}>
            {
                isFullScreen ? <RightMenuBtn title={RightMenuLang[lang]['FullscreenOff']} action={()=>{
                    toggleFullScreen(isFullScreen);
                    setIsFullScreen(!isFullScreen);
                }} img={`${theme === THEME_DARK ? fullScreenOffDarkImg:fullScreenOffImg}`} />:
                <RightMenuBtn title={RightMenuLang[lang]['FullscreenOn']} action={()=>{
                    toggleFullScreen(isFullScreen);
                    setIsFullScreen(!isFullScreen);
                }} img={`${theme === THEME_DARK ? fullScreenOnDarkImg:fullScreenOnImg}`} />
            }
            {
                theme === THEME_DARK ? <RightMenuBtn title={RightMenuLang[lang]['NormalMode']} action={()=>{
               toggleTheme(theme); 
            }} img={simpleModeImg} />
             : <RightMenuBtn title={RightMenuLang[lang]['DarkMode']} action={()=>{
               toggleTheme(theme); 
            }} img={darkModeImg} />
            }
            <RightMenuBtn title={RightMenuLang[lang]['ZoomIn']} action={()=>{zoomIn(map)}} img={`${theme === THEME_DARK ? plusDarkImg:plusImg}`} />
            <RightMenuBtn title={RightMenuLang[lang]['ZoomOut']} action={()=>{zoomOut(map)}} img={`${theme === THEME_DARK ? minusDarkImg:minusImg}`} />
            {/* <RightMenuBtn title='Legend' action={()=>{console.log('범례')}} img={`${theme === THEME_DARK ? legendDarkImg:legendImg}`} /> */}
            <RightMenuBtn title={RightMenuLang[lang]['Search']} action={()=>{setSearch()}} img={`${isSearch ? searchActiveImg:theme === THEME_DARK ? searchDarkImg:searchImg}`} />
            {lang === 'EN' ? <RightMenuBtn title={RightMenuLang[lang]['Korean']} action={()=>{toggleLang('KO')}} img={`${theme === THEME_DARK ? koDarkImg:koImg}`}/> : <RightMenuBtn title={RightMenuLang[lang]['English']} action={()=>{toggleLang('EN')}} img={`${theme === THEME_DARK ? enDarkImg:enImg}`}/>}
        </div>
    )    
}

export default RightMenu;