import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from 'src/app/auth/reducers';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LogoutConfirmationComponent } from './components/logout-confirmation/logout-confirmation.component';
import { LoginPageComponent } from './containers/login-page.component';
import { AuthEffects } from './effects/auth.effects';

export const COMPONENTS = [
  LoginPageComponent,
  LoginFormComponent,
  LogoutConfirmationComponent,
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    AuthRoutingModule,
    StoreModule.forFeature(
        fromAuth.authFeatureKey,
        fromAuth.reducers
      ),
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class AuthModule { }
