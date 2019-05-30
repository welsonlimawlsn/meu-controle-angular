import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {FormComponent} from '../shared/form.component';

@Component({
  selector: 'mc-login',
  templateUrl: './login.component.html'
})
export class LoginComponent extends FormComponent implements OnInit {

  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.form = this.fb.group({
      usuario: this.fb.control('', [Validators.required]),
      senha: this.fb.control('', [Validators.required])
    });
  }
}
