import { AbstractControl, Validator, ValidatorFn } from "@angular/forms";

/* Hard coded validator key
export function forbiddenNameValidator(control: AbstractControl): {[key: string]: any} | null {
    const forbidden = /admin/.test(control.value)
    return forbidden ? { 'forbiddenName': {value: control.value}}: null;
} */

// pass by form (Factory Function)
export function forbiddenNameValidator(forbiddenName: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
        const forbidden = forbiddenName.test(control.value)
        return forbidden ? { 'forbiddenName': { value: control.value } } : null;
    }
}