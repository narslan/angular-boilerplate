import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from 'src/app/auth/reducers';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LogoutConfirmationComponent } from './components/logout-confirmation/logout-confirmation.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LoginPageComponent } from './containers/login-page.component';
import { RegisterComponent } from './containers/register.component';
import { AuthEffects } from './effects/auth.effects';

export const COMPONENTS = [
  LoginPageComponent,
  LoginFormComponent,
  LogoutConfirmationComponent,
  RegisterComponent,
  RegisterFormComponent
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    StoreModule.forFeature(
        fromAuth.authFeatureKey,
        fromAuth.reducers
      ),
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class AuthModule { }
