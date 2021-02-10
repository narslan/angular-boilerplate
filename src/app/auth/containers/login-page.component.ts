import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginActions } from 'src/app/auth/actions';
import { Credentials } from 'src/app/auth/models';
import * as fromAuth from 'src/app/auth/reducers';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  
})
export class LoginPageComponent implements OnInit {
  pending$ = this.store.select(fromAuth.selectLoginPagePending);
  error$ = this.store.select(fromAuth.selectLoginPageError);
  constructor(private store: Store<fromAuth.State>) {   }

  ngOnInit(): void {
  }
  onSubmit(credentials: Credentials) {
    this.store.dispatch(LoginActions.login({ credentials }));
  }
}
