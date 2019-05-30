import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {FormComponent} from '../shared/form.component';

@Component({
  selector: 'mc-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html'
})
export class CadastroUsuarioComponent extends FormComponent implements OnInit {

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.form = this.fb.group({
      nome: this.fb.control('', [Validators.required]),
      sobrenome: this.fb.control('', [Validators.required]),
      usuario: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      senha: this.fb.control('', Validators.required)
    });
  }
}
