import { AbstractControl } from "@angular/forms";

export class CustomValidators {
    static numeric(control: AbstractControl) {
        if (!control.value.toString().match(/^[0-9]+(\.?[0-9]+)?$/)) {
            return { invalidNumber: true }
        }else{
            return null;
        }
    }
}