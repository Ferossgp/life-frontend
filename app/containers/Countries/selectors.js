import { createSelector } from 'reselect';

/**
 * Direct selector to the countries state domain
 */
const selectCountries = state => state.get('countries');

const makeSelectCountry = () =>
  createSelector(selectCountries, substate => substate.get('selectedCountry'));

const makeSelectCountries = () =>
  createSelector(selectCountries, substate => substate.get('countries'));

const makeSelectError = () =>
  createSelector(selectCountries, substate => substate.get('error'));

const makeSelectFetching = () =>
  createSelector(selectCountries, substate => substate.get('fetching'));

const makeSelectTotalCount = () =>
  createSelector(selectCountries, substate => substate.get('totalCount'));

export {
  makeSelectCountry,
  selectCountries,
  makeSelectCountries,
  makeSelectError,
  makeSelectFetching,
  makeSelectTotalCount,
};
