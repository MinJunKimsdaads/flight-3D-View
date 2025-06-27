import { XYZ } from "ol/source";

export const WEATHER_LAYER = [
  {
    name:'cloud',
    layer:'cloudMaps',
    preview: 'https://tile.openweathermap.org/map/clouds_new/7/109/49.png?appid=489ed0b7bc478aa6bbe249e12b428b9a',
    source: new XYZ({
      url: 'https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=489ed0b7bc478aa6bbe249e12b428b9a',
    }),
  },
  {
    name:'precipitaion',
    layer:'precipitaionMaps',
    preview: 'https://tile.openweathermap.org/map/precipitation_new/7/109/49.png?appid=489ed0b7bc478aa6bbe249e12b428b9a',
    source: new XYZ({
      url: 'https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=489ed0b7bc478aa6bbe249e12b428b9a',
    }),
  },
  {
    name:'pressure',
    layer:'pressureMaps',
    preview: 'https://tile.openweathermap.org/map/pressure_new/7/109/49.png?appid=489ed0b7bc478aa6bbe249e12b428b9a',
    source: new XYZ({
      url: 'https://tile.openweathermap.org/map/pressure_new/{z}/{x}/{y}.png?appid=489ed0b7bc478aa6bbe249e12b428b9a',
    }),
  },
  {
    name:'wind',
    layer:'windMaps',
    preview: 'https://tile.openweathermap.org/map/wind_new/7/109/49.png?appid=489ed0b7bc478aa6bbe249e12b428b9a',
    source: new XYZ({
      url: 'https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=489ed0b7bc478aa6bbe249e12b428b9a',
    }),
  },
  {
    name:'temp',
    layer:'tempMaps',
    preview: 'https://tile.openweathermap.org/map/temp_new/7/109/49.png?appid=489ed0b7bc478aa6bbe249e12b428b9a',
    source: new XYZ({
      url: 'https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=489ed0b7bc478aa6bbe249e12b428b9a',
    }),
  },
]