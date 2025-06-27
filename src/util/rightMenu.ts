import { THEME_DARK } from "@/constants/settingConstant";
import { useRightMenuStore } from "@/store/rightMenuStore";

// 전체화면 토글
export const toggleFullScreen = (flag:boolean) => {
    const elem = document.documentElement;
    if(!flag){
        if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if ((elem as any).webkitRequestFullscreen) {
        (elem as any).webkitRequestFullscreen(); // Safari
      } else if ((elem as any).msRequestFullscreen) {
        (elem as any).msRequestFullscreen(); // IE/Edge
      }
    }else{
        if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if ((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen(); // Safari
      } else if ((document as any).msExitFullscreen) {
        (document as any).msExitFullscreen(); // IE/Edge
      }
    }
}

//테마 설정
export const toggleTheme = (theme:string|null) => {
  const {setTheme} = useRightMenuStore.getState();
  if(theme === THEME_DARK){
    setTheme(null);
  }else{
    setTheme(THEME_DARK);
  }
};

//지도 확대
export const zoomIn = (map) => {
  const view = map.getView();
  const zoom = view.getZoom();
  view.animate({
    zoom: zoom + 1,
    duration: 250,
  });
};

//지도 축소
export const zoomOut = (map) => {
  const view = map.getView();
  const zoom = view.getZoom();
  view.animate({
    zoom: zoom - 1,
    duration: 250,
  });
};

//언어 토글
export const toggleLang = (lang) => {
  const {setLanguage} = useRightMenuStore.getState();
  setLanguage(lang);
}