import {
  FETCH_COUNTRIES,
  COUNTRIES_LOADED,
  LOAD_COUNTRIES_ERROR,
} from 'containers/Countries/constants';
import { Object } from 'core-js';

export function fetchCountries() {
  return {
    type: FETCH_COUNTRIES,
  };
}

function parseCountryId(link){
  const idLength = 13;
  const tail = 1;
  return link && link.substring(link.length - tail - idLength,link.length - tail);
}

export function countriesLoaded(payload) {
  const {
    _links: {
      "country:items": rawCountries
    },
    count,
  } = payload;
  const countries = rawCountries.map(c => Object.assign({}, c, {id: parseCountryId(c.href)}));
  return {
    type: COUNTRIES_LOADED,
    totalCount: count,
    countries,
  };
}

export function countriesLoadingError() {
  return {
    type: LOAD_COUNTRIES_ERROR,
  };
}
