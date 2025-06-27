import TileLayer from "ol/layer/Tile"
import WebGLVectorLayer from 'ol/layer/WebGLVector.js';
import VectorSource from "ol/source/Vector";
import prohibitedAreaJson from '@/assets/data/prohibitedArea.json';
import { SETTING_BASEMAP, SETTING_LAYER } from "@/constants/settingConstant";
import { setAircraftStyle, setAirportStyle, setDayNightStyle, setProhibitedStyle } from "../features/styles";
import { TYPE_PROHIBITED_AREA } from "@/constants/featureConstants";
import GeoJSON from "ol/format/GeoJSON";
import DayNight from 'ol-ext/source/DayNight';

//기본 맵
export const standardLayer = new TileLayer({
    source: SETTING_LAYER[0].source,
    className: SETTING_BASEMAP
})

//날씨 맵
export const weatherLayer = new TileLayer({
  visible:false,
})

//실시간 항공기 맵
export const currentAircraftLayer = new WebGLVectorLayer({
    source: new VectorSource(),
    style: setAircraftStyle(null,null,null),
});

//공항 맵
export const airportLayer = new WebGLVectorLayer({
  source: new VectorSource(),
  style: setAirportStyle(null,null,null),
});

export const prohibiteAreaLayer = new WebGLVectorLayer({
  source: new VectorSource({
    features: new GeoJSON().readFeatures(prohibitedAreaJson).map((feature) => {
      feature.set('type', TYPE_PROHIBITED_AREA);
      return feature;
    })
  }),
  visible:false,
  style: setProhibitedStyle(),
});

export const dayNightLayer = new WebGLVectorLayer({
  source:new DayNight(),
  style: setDayNightStyle(),
  visible:false,
});