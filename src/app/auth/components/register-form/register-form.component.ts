import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterForm } from '../../models';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

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

  @Output() submitEvent = new EventEmitter<RegisterForm>();

  form: FormGroup = new FormGroup({
    username: new FormControl('',
      [Validators.required,
      Validators.minLength(4),
      Validators.maxLength(10)
      ]
    ),
    email: new FormControl('',
      [Validators.required,
      Validators.email
      ]
    ),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
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
