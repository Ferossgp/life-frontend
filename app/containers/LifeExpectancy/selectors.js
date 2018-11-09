import { createSelector } from 'reselect';

/**
 * Direct selector to the profileGraphs state domain
 */
const selectCountries = state => state.get('profileGraphs');

export const makeSelectMortality = () =>
  createSelector(selectCountries, substate =>
    substate.get('mortalityDistribution'),
  );

export const makeSelectExpectancy = () =>
  createSelector(selectCountries, substate => substate.get('lifeExpectancy'));

export const makeSelectError = () =>
  createSelector(
    selectCountries,
    substate =>
      substate.get('mortalityError') || substate.get('expectancyError'),
  );

export const makeSelectFetching = () =>
  createSelector(
    selectCountries,
    substate =>
      substate.get('fetchingMortality') || substate.get('fetchingExpectancy'),
  );
