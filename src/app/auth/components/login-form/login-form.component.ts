import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Credentials } from 'src/app/auth/models';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  submitted = false;
  @Input()
  set pending(isPending: boolean | null) {
    if (isPending) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  @Input() errorMessage!: string | null;

  @Output() submitEvent = new EventEmitter<Credentials>();

  form: FormGroup = new FormGroup({
    username: new FormControl('',
      [Validators.required]
    ),
    password: new FormControl('',
      [Validators.required]
    ),
  });
  constructor() { }
  // convenience getter for easy access to form fields

  get f() { return this.form.controls; }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.submitEvent.emit(this.form.value);
    }
  }
}
