import { FormControl, ValidationErrors } from '@angular/forms';

export class EShopValidators {
  static notOnlyWhiteSpace(control: FormControl): ValidationErrors {
    if (control.value != null && control.value.trim().length <= 1) {
      return { notOnlyWhiteSpace: true };
    } else {
      return null;
    }
  }
}
