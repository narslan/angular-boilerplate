import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/auth/models';

export const loginSuccess = createAction(
  '[Auth/API] Login Success',
  props<{ user: User }>()
);

export const loginFailure = createAction(
  '[Auth/API] Login Failure',
  props<{ message: string }>()
);

export const registerSuccess = createAction(
  '[Auth/API] Register Success',
);

export const registerFailure = createAction(
  '[Auth/API] Register Failure',
  props<{ message: string }>()
);

export const loginRedirect = createAction('[Auth/API] Login Redirect');
