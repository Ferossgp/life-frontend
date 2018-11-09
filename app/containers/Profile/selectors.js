import { createSelector } from 'reselect';

/**
 * Direct selector to the userProfile state domain
 */
const selectProfile = state => state.get('userProfile');

export const makeSelectUserProfile = () =>
  createSelector(selectProfile, substate => substate.get('profile'));
