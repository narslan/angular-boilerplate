import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAuth from 'src/app/auth/reducers';
import { RegisterActions } from '../actions';
import { RegisterForm } from '../models';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  pending$ = this.store.select(fromAuth.selectRegisterPagePending);
  error$ = this.store.select(fromAuth.selectRegisterPageError);

  constructor(private store: Store<fromAuth.State>) { }

  ngOnInit(): void {
  }

  onSubmit(rf: RegisterForm) {
    this.store.dispatch(RegisterActions.register({ rf }));
  }
}
