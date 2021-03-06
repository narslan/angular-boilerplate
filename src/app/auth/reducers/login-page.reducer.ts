import { createReducer, on } from '@ngrx/store';
import { AuthApiActions, LoginActions } from 'src/app/auth/actions';

export const loginPageFeatureKey = 'loginPage';

export interface State {
  error: string ;
  pending: boolean;
}

export const initialState: State = {
  error: '',
  pending: false,
};

export const reducer = createReducer(
  initialState,
  on(LoginActions.login, (state) => ({
    ...state,
    error: '',
    pending: true,
  })),

  on(AuthApiActions.loginSuccess, (state) => ({
    ...state,
    error: '',
    pending: false,
  })),

  on(AuthApiActions.loginFailure, (state, { message }) => ({
    ...state,
    error: message,
    pending: false,
  }))
);

export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;
