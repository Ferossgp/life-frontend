import { takeLatest, call, put } from 'redux-saga/effects';

import {
  FETCH_MORTALITY,
  FETCH_EXPECTANCY,
} from 'containers/LifeExpectancy/constants';
import {
  mortalityLoaded,
  mortalityLoadingError,
  expectancyLoaded,
  expectancyLoadingError,
} from 'containers/LifeExpectancy/actions';

import request from 'utils/request';

const API_DOMAIN = 'http://api.population.io/1.0';

const getAge = user => {
  const dateNow = new Date();
  let months = dateNow.getMonth() + 1 - parseInt(user.month);
  let years = dateNow.getFullYear() - parseInt(user.year);
  years = months > 0 ? years : years - 1;
  months = months > 0 ? months : -months;
  return `${years}y${months}m`;
};

export function* getExpectancy(params) {
  const { country, sex } = params;
  const age = getAge(params);
  const dateNow = new Date();
  const date = [
    dateNow.getFullYear(),
    dateNow.getMonth() + 1,
    dateNow.getDate(),
  ].join('-');
  const apiEndpoint = `${API_DOMAIN}/life-expectancy/total/${sex}/${country}/${date}/${age}`;

  try {
    const repos = yield call(request, apiEndpoint);
    yield put(expectancyLoaded(repos));
  } catch (err) {
    yield put(expectancyLoadingError());
  }
}

export function* getMortality(params) {
  const { country, sex } = params;
  const age = getAge(params);

  const apiEndpoint = `${API_DOMAIN}/mortality-distribution/${country}/${sex}/${age}/today/`;

  try {
    const repos = yield call(request, apiEndpoint);
    yield put(mortalityLoaded(repos));
  } catch (err) {
    yield put(mortalityLoadingError());
  }
}

export default function* data() {
  yield [
    takeLatest(FETCH_EXPECTANCY, getExpectancy),
    takeLatest(FETCH_MORTALITY, getMortality),
  ];
}
