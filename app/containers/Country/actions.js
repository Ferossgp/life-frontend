import {
  FETCH_COUNTRY,
  COUNTRY_LOADED,
  LOAD_COUNTRY_ERROR,
} from 'containers/Country/constants';

export function fetchCountry(id) {
  return {
    type: FETCH_COUNTRY,
    id
  };
}

export function countryLoaded(payload) {
  const {
    currency_code,
    geoname_id,
    iso_alpha2,
    iso_alpha3,
    name,
    population,
  } = payload;
  return {
    type: COUNTRY_LOADED,
    country: {
      currency_code,
      geoname_id,
      iso_alpha2,
      iso_alpha3,
      name,
      population,
    },
  };
}

export function countryLoadingError() {
  return {
    type: LOAD_COUNTRY_ERROR,
  };
}
