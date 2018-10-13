import {
  createSelector
} from 'reselect';

/**
 * Direct selector to the country state domain
 */
const selectCountry = (state) => state.get('country');



const makeSelectCountry = () => createSelector(
  selectCountry,
  (substate) => substate.get('country')
);

const makeSelectError = () => createSelector(
  selectCountry,
  (substate) => substate.get('error')
);

const makeSelectFetching = () => createSelector(
  selectCountry,
  (substate) => substate.get('fetching')
);

export {
  selectCountry,
  makeSelectCountry,
  makeSelectError,
  makeSelectFetching,
};
