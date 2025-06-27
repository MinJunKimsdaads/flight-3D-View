import { airportLayer, currentAircraftLayer } from "@/sevices/maps/layer";
import { Point } from "ol/geom";
import { setAlert } from "./util";

export const findAircraftFeature = (map, icao24) => {
  if (!map || !icao24) return;

  const features = currentAircraftLayer.getSource()?.getFeatures();
  const feature = features?.find((f) => f.get('icao24') === icao24);

  if (!feature) {
    setAlert('Warning','Can Not Find Aircraft');
    return;
  }

  const geometry = feature.getGeometry();
  if (geometry && geometry instanceof Point) {
    const coord = geometry.getCoordinates();
    map.getView().animate({
        zoom: 15,
        center: coord,
        duration: 400,
    });
  }
};

export const findAirportFeature = (map, icao) => {
  if (!map || !icao) return;
  const features = airportLayer.getSource()?.getFeatures();
  const feature = features?.find((f) => f.get('icao') === icao);

  if (!feature) {
    setAlert('Warning','Can Not Find Airport');
    return;
  }
  const geometry = feature.getGeometry();
  if (geometry && geometry instanceof Point) {
    const coord = geometry.getCoordinates();
    map.getView().animate({
        zoom: 15,
        center: coord,
        duration: 400,
    });
  }
}