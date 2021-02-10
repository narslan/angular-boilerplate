import { createReducer, on } from '@ngrx/store';
import { AuthApiActions, RegisterActions } from 'src/app/auth/actions';

export const registerPageFeatureKey = 'registerPage';

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
  on(RegisterActions.register, (state) => ({
    ...state,
    error: '',
    pending: true,
  })),

  on(AuthApiActions.registerSuccess, (state) => ({
    ...state,
    error: '',
    pending: false,
  })),

  on(AuthApiActions.registerFailure, (state, { message }) => ({
    ...state,
    error: message,
    pending: false,
  }))
);

export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;
