import {AbstractControl, FormGroup} from '@angular/forms';

export class FormComponent {
  form: FormGroup;

  getControl(field: string): AbstractControl {
    return this.form.get(field);
  }
}
