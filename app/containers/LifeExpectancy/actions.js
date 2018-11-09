import {
  FETCH_MORTALITY,
  MORTALITY_LOADED,
  LOAD_MORTALITY_ERROR,
  FETCH_EXPECTANCY,
  EXPECTANCY_LOADED,
  LOAD_EXPECTANCY_ERROR,
} from 'containers/LifeExpectancy/constants';

export function fetchMortality(params) {
  return {
    type: FETCH_MORTALITY,
    ...params,
  };
}

export function fetchExpectancy(params) {
  return {
    type: FETCH_EXPECTANCY,
    ...params,
  };
}

export function mortalityLoaded(payload) {
  const { mortality_distribution } = payload;
  return {
    type: MORTALITY_LOADED,
    mortality_distribution,
  };
}

export function expectancyLoaded(payload) {
  return {
    type: EXPECTANCY_LOADED,
    expectancy: payload,
  };
}

export function mortalityLoadingError() {
  return {
    type: LOAD_MORTALITY_ERROR,
  };
}

export function expectancyLoadingError() {
  return {
    type: LOAD_EXPECTANCY_ERROR,
  };
}
