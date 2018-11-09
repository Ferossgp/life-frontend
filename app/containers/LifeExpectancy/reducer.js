import { fromJS } from 'immutable';
import {
  EXPECTANCY_LOADED,
  LOAD_EXPECTANCY_ERROR,
  MORTALITY_LOADED,
  LOAD_MORTALITY_ERROR,
} from './constants';

const initialState = fromJS({
  fetchingExpectancy: true,
  fetchingMortality: true,
  mortalityError: false,
  expectancyError: false,
  mortalityDistribution: [],
  lifeExpectancy: null,
});

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case EXPECTANCY_LOADED:
      return state
        .set('fetchingExpectancy', false)
        .set('lifeExpectancy', action.expectancy);
    case LOAD_EXPECTANCY_ERROR:
      return state
        .set('fetchingExpectancy', false)
        .set('expectancyError', true);
    case MORTALITY_LOADED:
      return state
        .set('fetchingMortality', false)
        .set('mortalityDistribution', action.mortality_distribution);
    case LOAD_MORTALITY_ERROR:
      return state.set('fetchingMortality', false).set('mortalityError', true);
    default:
      return state;
  }
}
