import {
  Action,
  combineReducers, createFeatureSelector, createSelector
} from '@ngrx/store';
import * as fromAuth from 'src/app/auth/reducers/auth.reducer';
import * as fromLoginPage from 'src/app/auth/reducers/login-page.reducer';
import * as fromRoot from 'src/app/store';

export const authFeatureKey = 'auth';

export interface AuthState {
  [fromAuth.statusFeatureKey]: fromAuth.State;
  [fromLoginPage.loginPageFeatureKey]: fromLoginPage.State;
}

export interface State extends fromRoot.State {
  [authFeatureKey]: AuthState;
}

export function reducers(state: AuthState | undefined, action: Action) {
  return combineReducers({
    [fromAuth.statusFeatureKey]: fromAuth.reducer,
    [fromLoginPage.loginPageFeatureKey]: fromLoginPage.reducer,
  })(state, action);
}

export const selectAuthState = createFeatureSelector<State, AuthState>(
  authFeatureKey
);

export const selectAuthStatusState = createSelector(
  selectAuthState,
  (state) => state.status
);
export const selectUser = createSelector(
  selectAuthStatusState,
  fromAuth.getUser
);
export const selectLoggedIn = createSelector(selectUser, (user) => !!user);

export const selectLoginPageState = createSelector(
  selectAuthState,
  (state) => state.loginPage
);
export const selectLoginPageError = createSelector(
  selectLoginPageState,
  fromLoginPage.getError
);
export const selectLoginPagePending = createSelector(
  selectLoginPageState,
  fromLoginPage.getPending
);
