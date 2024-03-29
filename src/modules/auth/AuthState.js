import {Map, fromJS} from 'immutable';

// Initial state
const initialState = Map({
  isLoggedIn: false,
  currentUser: null,
  authenticationToken: null
});

// Actions
const USER_LOGIN_SUCCESS = 'AppState/USER_LOGIN_SUCCESS';
const USER_LOGIN_ERROR = 'AppState/USER_LOGIN_ERROR';
const USER_LOGOUT = 'AppState/USER_LOGOUT';

export function onUserLoginSuccess(profile, token) {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: {
      profile: fromJS(profile),
      token: fromJS(token)
    }
  };
}

export function onUserLoginError(error) {
  return {
    type: USER_LOGIN_ERROR,
    payload: error,
    error: true
  };
}

export function userLogout() {
  return {
    type: USER_LOGOUT
  };
}

// Reducer
export default function AuthStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return state
        .set('isLoggedIn', true)
        .set('currentUser', action.payload.profile)
        .set('authenticationToken', action.payload.token);
    case USER_LOGIN_ERROR:
      return initialState;
    case USER_LOGOUT:
      return initialState;
    default:
      return state;
  }
}
