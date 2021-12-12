import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidator {
    static checkPartyID(control: AbstractControl): ValidationErrors | null {
        const value = control.value;
        const regex = /\d{6,6}/;

        if (!regex.test(value)) {
            return { invalidID: true };
        }
        return null;
    }

}