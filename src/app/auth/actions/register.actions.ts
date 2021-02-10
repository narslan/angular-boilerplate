import { createAction, props } from '@ngrx/store';
import { RegisterForm } from 'src/app/auth/models';

export const register = createAction(
    '[Register Page] Register',
    props<{ rf: RegisterForm }>()
);