import {
  takeLatest,
  call,
  put
} from 'redux-saga/effects';
import {
  FETCH_COUNTRY
} from 'containers/Country/constants';
import {
  countryLoaded,
  countryLoadingError,
} from 'containers/Country/actions';

import request from 'utils/request';

const API_DOMAIN = 'https://api.teleport.org/api';

export function* getCountry(params) {
  console.log(params)
  const apiEndpoint = `${API_DOMAIN}/countries/${params.id}/`; // Add filters
  try {
    const repos = yield call(request, apiEndpoint);
    yield put(countryLoaded(repos));
  } catch (err) {
    yield put(countryLoadingError());
  }
}

export default function* articlesData() {
  yield takeLatest(FETCH_COUNTRY, getCountry);
}
