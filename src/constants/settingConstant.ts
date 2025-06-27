import { OSM, XYZ } from "ol/source";

export const THEME_DARK = 'dark';

export const SETTING_BASEMAP = 'basemap';

export const SETTING_MAP = 'Map';
export const SETTING_VISIBILITY = 'Visibility';
export const SETTING_UNITS = 'Units';
export const SETTING_LAYER = [
  {
    name:'BASEMAP',
    layer:'basemaps',
    preview: 'https://tile.openstreetmap.org/7/109/49.png',
    source: new OSM(),
  },
  {
    name:'DarkMap(Label)',
    layer:'darkLabelCartoBasemaps',
    preview: 'https://b.basemaps.cartocdn.com/dark_all/7/109/49%7Br%7D.png',
    source: new XYZ({
      url: 'https://{a-d}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
      attributions: '© OpenStreetMap contributors, © CARTO',
    }),
  },
  {
    name:'DarkMap',
    layer:'darkCartoBasemaps',
    preview: 'https://a.basemaps.cartocdn.com/dark_nolabels/7/109/49%7Br%7D.png',
    source: new XYZ({
      url: 'https://{a-d}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png',
      attributions: '© OpenStreetMap contributors, © CARTO',
    }),
  },
  {
    name:'LightMap(Label)',
    layer:'lightLabelCartoBasemaps',
    preview: 'https://a.basemaps.cartocdn.com/light_all/7/109/49%7Br%7D.png',
    source: new XYZ({
      url: 'https://{a-d}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
      attributions: '© OpenStreetMap contributors, © CARTO',
    }),
  },
  {
    name:'LightMap',
    layer:'lightCartoBasemaps',
    preview: 'https://a.basemaps.cartocdn.com/light_nolabels/7/109/49%7Br%7D.png',
    source: new XYZ({
      url: 'https://{a-d}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png',
      attributions: '© OpenStreetMap contributors, © CARTO',
    }),
  },
  {
    name:'VoyagerMap(Label)',
    layer:'voyagerLabelCartoBasemaps',
    preview: 'https://d.basemaps.cartocdn.com/rastertiles/voyager/7/109/49%7Br%7D.png',
    source: new XYZ({
      url: 'https://{a-d}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
      attributions: '© OpenStreetMap contributors, © CARTO',
    }),
  },
  {
    name:'VoyagerMap',
    layer:'voyagerCartoBasemaps',
    preview: 'https://d.basemaps.cartocdn.com/rastertiles/voyager_nolabels/7/109/49%7Br%7D.png',
    source: new XYZ({
      url: 'https://{a-d}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png',
      attributions: '© OpenStreetMap contributors, © CARTO',
    }),
  },
];

export const SETTING_OVERLAYS = {
  RAIN:'rain_animation_overlay',
  CLOUD:'cloud_animation_overlay',
  SNOW:'snow_animation_overlay',
}

export const PROHIBITED_AREA = 'prohibited_area';
