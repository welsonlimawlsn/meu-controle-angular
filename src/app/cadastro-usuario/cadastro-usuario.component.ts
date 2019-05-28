import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'mc-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html'
})
export class CadastroUsuarioComponent implements OnInit {

  cadastroForm: FormGroup;

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.cadastroForm = this.fb.group({
      nome: this.fb.control('', [Validators.required]),
      sobrenome: this.fb.control('', [Validators.required]),
      usuario: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      senha: this.fb.control('', Validators.required)
    });
  }

  isInvalid(fieldName: string) {
    const field = this.cadastroForm.get(fieldName);
    return field.invalid && (field.dirty || field.touched);
  }
}
