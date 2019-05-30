import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormComponent} from '../shared/form.component';

@Component({
  selector: 'mc-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit, FormComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      usuario: this.fb.control('', [Validators.required]),
      senha: this.fb.control('', [Validators.required])
    });
  }

  getControl(field: string): AbstractControl {
    return this.form.get(field);
  }
}
