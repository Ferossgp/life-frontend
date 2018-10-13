
import { fromJS } from 'immutable';
import {
  COUNTRIES_LOADED,
  LOAD_COUNTRIES_ERROR,
} from './constants';

const initialState = fromJS({
  fetching: true,
  error: false,
  countries: [],
  pageCount: 0,
});

function countriesReducer(state = initialState, action) {
  switch (action.type) {
    case COUNTRIES_LOADED:
      return state
        .set('fetching', false)
        .set('totalCount', action.totalCount)
        .set('countries', action.countries);
    case LOAD_COUNTRIES_ERROR:
      return state
        .set('fetching', false)
        .set('error', true);
    default:
      return state;
  }
}

export default countriesReducer;
