import {AbstractControl, FormGroup} from '@angular/forms';

export interface FormComponent {
  form: FormGroup;

  getControl(field: string): AbstractControl;
}
