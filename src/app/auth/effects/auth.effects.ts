import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, concatMap, exhaustMap, map, tap } from 'rxjs/operators';
import { AuthActions, AuthApiActions, LoginPageActions } from 'src/app/auth/actions';
import { Credentials } from 'src/app/auth/models';
import { AuthService } from '../services/auth.service';


@Injectable()
export class AuthEffects {

  logoutConfirmation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logoutConfirmation),
      concatMap(() => {
        return EMPTY;
      }),
      map((result) =>
        result ? AuthActions.logout() : AuthActions.logoutConfirmationDismiss()
      )
    )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginPageActions.login),
      map((action) => action.credentials),
      exhaustMap((auth: Credentials) =>
        this.authService.login(auth).pipe(
          map((user) => AuthApiActions.loginSuccess({ user })),
          catchError((error) => of(AuthApiActions.loginFailure({ error })))
        )
      )
    )
  );

  loginRedirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthApiActions.loginRedirect, AuthActions.logout),
        tap((authed) => {
          this.router.navigate(['/login']);
        })
      ),
    { dispatch: false }
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthApiActions.loginSuccess),
        tap(() => this.router.navigate(['/']))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
  ) { }

}
