import { Feature } from "ol";
import { useAircraftFilterStore, useAirportFilterStore } from "@/store/filtersStore";
import { HIGH_ALTITUDE, HIGH_SPEED, JA_AIRCRAFT, JA_AIRPORT, KO_AIRCRAFT, KO_AIRPORT, LOW_ALTITUDE, LOW_SPEED } from "@/constants/filtersConstant";

export const filteredAircraftFeatures = (features: Feature[]) => {
  const { status, speed, altitude, country } = useAircraftFilterStore.getState();

  const filtered = features.filter((feature) => {
    const props = feature.getProperties();

    const onGround = props.on_ground;
    const velocity = props.velocity ?? 0;
    const alt = props.geo_altitude ?? 0;
    const originCountry = props.origin_country ?? '';

    const statusMatch =
      (onGround && status.grounded) || (!onGround && status.airbone);

    const speedMatch =
      (velocity < LOW_SPEED && speed.low) ||
      (velocity >= LOW_SPEED && velocity < HIGH_SPEED && speed.middle) ||
      (velocity >= HIGH_SPEED && speed.high);

    const altMatch =
      (alt < LOW_ALTITUDE && altitude.low) ||
      (alt >= LOW_ALTITUDE && alt < HIGH_ALTITUDE && altitude.middle) ||
      (alt >= HIGH_ALTITUDE && altitude.high);

    const countryMatch =
      (originCountry === KO_AIRCRAFT && country.korea) ||
      (originCountry === JA_AIRCRAFT && country.japan) ||
      (originCountry !== KO_AIRCRAFT &&
        originCountry !== JA_AIRCRAFT &&
        country.etc);

    return statusMatch && speedMatch && altMatch && countryMatch;
  });

  return filtered;
};

export const filteredAirportFeatures = (features: Feature[]) => {
  const {country} = useAirportFilterStore.getState();

  const filtered = features.filter((feature) => {
    const props = feature.getProperties();

    const originCountry = props.country ?? '';

    const countryMatch =
      (originCountry === KO_AIRPORT && country.korea) ||
      (originCountry === JA_AIRPORT && country.japan) ||
      (originCountry !== KO_AIRPORT &&
        originCountry !== JA_AIRPORT &&
        country.etc);

    return countryMatch;
  });

  return filtered;
}