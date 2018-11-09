import { fromJS } from 'immutable';
import { STORE_FORM } from './constants';

const initialState = fromJS({
  profile: null,
});

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case STORE_FORM:
      return state.set('profile', action.profile);
    default:
      return state;
  }
}
