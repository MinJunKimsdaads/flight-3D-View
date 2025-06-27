import aircraftImg from '@/assets/img/map/aircraft.png';
import airportImg from '@/assets/img/map/airport.png';
import { useSettingMapVisibilityStore } from "@/store/settingStore";
//항공기 피쳐 스타일
export const setAircraftStyle = (color,hoveredColor,scale) => {
    const {aircraftIconColor,aircraftHoveredColor,aircraftIconScale} = useSettingMapVisibilityStore.getState();
    const style = {
      'icon-src': aircraftImg,
      'icon-width': 30,
      'icon-height': 30,
      'icon-color': [
        'case',
        ['==',['get', 'hover'], 1],
          hoveredColor ? hoveredColor : aircraftHoveredColor, // hover on
          color ? color : aircraftIconColor, // hover off
      ],
      'icon-scale': scale ? scale : aircraftIconScale,
      'icon-rotation': [
        'case',
        ['!=', ['get', 'true_track'], 0],
        ['*', ['get', 'true_track'], Math.PI / 180], // degree → radian
        0
      ]
    }
    return style;
}
//공항 피쳐 스타일
export const setAirportStyle = (color,hoveredColor,scale) => {
  const {airportIconColor,airportHoveredColor,airportIconScale} = useSettingMapVisibilityStore.getState();
  const style = {
    'icon-src': airportImg,
    'icon-width': 30,
    'icon-height': 30,
    'icon-color': [
      'case',
      ['==',['get', 'hover'], 1],
        hoveredColor ? hoveredColor : airportHoveredColor, // hover on
        color ? color : airportIconColor, // hover off
    ],
    'icon-scale': scale ? scale : airportIconScale,
  }
  return style;
}
//비행 금지 구역 스타일
export const setProhibitedStyle = () => {
  const style = {
    'fill-color': [
      'case',
      ['all',
        ['==', ['get', 'prh_lbl_4'], '비행금지구역'],
        ['==', ['get', 'hover'], 1]
      ],
      'rgba(255, 0, 0, 0.8)',
      ['==', ['get', 'prh_lbl_4'], '비행금지구역'],
      'rgba(255, 0, 0, 0.4)',
      ['==', ['get', 'hover'], 1],
      'rgba(112, 128, 144, 0.8)',
      'rgba(112, 128, 144, 0.4)'
    ],
    'stroke-color': 'rgba(0, 0, 0, 1)', // 외곽선 색상
    'stroke-width': 1
  }
  return style;
}
//dayNight 스타일
export const setDayNightStyle = () => {
  const style = {
    'circle-radius': 5,
    'fill-color': [0, 0, 50, 0.5]
  };
  return style;
}