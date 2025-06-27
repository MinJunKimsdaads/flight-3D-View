import CesiumViewer from "./components/cesium/CesiumViewer";
import Alert from "./components/common/Alert";
import Loader from "./components/common/Loader";
import Controler from "./components/controler/Controler"
import DetailBox from "./components/detail/DetailBox";
import FiltersBox from "./components/filters/FiltersBox";
import MapViewer from "./components/map/MapViewer"
import RightMenu from "./components/RightMenu/RightMenu"
import SearchBox from "./components/RightMenu/SearchBox";
import SettingBox from "./components/setting/SettingBox";
import TopMenu from "./components/topMenu/TopMenu";
import OpenWeatherMap from "./components/weather/weather/OpenWeatherMap";
import WeatherBox from "./components/weather/WeatherBox";
import WidgetWrap from "./components/widget/WidgetWrap";
import { FILTER, SETTING, WEATHER, WIDGET } from "./constants/controlerConstant";
import { useCesiumStore } from "./store/cesiumStore";
import { useGlobalStore } from "./store/commonStore";
import { useControlerStore } from "./store/controlerStore";
import { useFeatureSelectStore } from "./store/featureStore";
import { useRightMenuStore } from "./store/rightMenuStore";
import { useWeatherStore } from "./store/weatherStore";

function App() {
  const menu = useRightMenuStore(state => state.menu);
  const isSearch = useRightMenuStore(state => state.isSearch);
  const control = useControlerStore(state => state.control);
  const isLoading = useGlobalStore(state => state.isLoading);
  const isAlert = useGlobalStore(state => state.isAlert.isShow);
  const selectedFeature = useFeatureSelectStore(state => state.selectedFeature);
  const isWeatherMap = useWeatherStore(state => state.isWeatherMap);

  const isCesiumShow = useCesiumStore(state => state.isCesiumShow)
  return (
    <>
      <MapViewer />
      {isWeatherMap && <OpenWeatherMap />}
      <TopMenu />
      <Controler />
      {
        menu && <RightMenu /> 
      }
      {
        control === WIDGET && <WidgetWrap />
      }
      {
        control === SETTING && <SettingBox />
      }
      {
        control === FILTER && <FiltersBox />
      }
      {
        control === WEATHER && <WeatherBox />
      }
      {
        selectedFeature && <DetailBox />
      }
      {
        isLoading && <Loader/>
      }
      {
        isAlert && <Alert />
      }
      {
        isSearch && <SearchBox />
      }
      {
        isCesiumShow && (
          <CesiumViewer/>    
        )
      }
    </>
  )
}

export default App;
