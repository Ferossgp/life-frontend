import { STORE_FORM } from './constants';

export function submitForm(payload) {
  return {
    type: STORE_FORM,
    profile: payload,
  };
}
