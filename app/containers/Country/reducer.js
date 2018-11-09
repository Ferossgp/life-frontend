import { fromJS } from 'immutable';
import { COUNTRY_LOADED, LOAD_COUNTRY_ERROR } from './constants';

const initialState = fromJS({
  fetching: true,
  error: false,
  country: {},
});

function countryReducer(state = initialState, action) {
  switch (action.type) {
    case COUNTRY_LOADED:
      return state.set('fetching', false).set('country', action.country);
    case LOAD_COUNTRY_ERROR:
      return state.set('fetching', false).set('error', true);
    default:
      return state;
  }
}

export default countryReducer;
