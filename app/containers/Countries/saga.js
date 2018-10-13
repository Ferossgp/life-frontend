import {
  takeLatest,
  call,
  put
} from 'redux-saga/effects';
import {
  FETCH_COUNTRIES
} from 'containers/Countries/constants';
import {
  countriesLoaded,
  countriesLoadingError,
} from 'containers/Countries/actions';

import request from 'utils/request';

const API_DOMAIN = 'https://api.teleport.org/api';

export function* getCountries(params) {
  let apiEndpoint = `${API_DOMAIN}/countries`; // Add filters

  try {
    const repos = yield call(request, apiEndpoint);
    yield put(countriesLoaded(repos));
  } catch (err) {
    yield put(countriesLoadingError());
  }
}

export default function* articlesData() {
  yield takeLatest(FETCH_COUNTRIES, getCountries);
}
