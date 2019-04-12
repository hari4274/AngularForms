import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { forbiddenNameValidator } from './shared/user-name.validator';
import { PasswordValidator } from './shared/password.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'reactive-forms';

  get userName() {
    return this.registrationForm.get('userName');
  }

  constructor (private fb: FormBuilder) {}

    registrationForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/password/)]],
      password: [''],
      confirmPassword: [''],
      address: this.fb.group({
        city : [''],
        state : [''],
        postalCode : ['']
      }),
    }, { validator: PasswordValidator });
  // registrationForm = new FormGroup({
  //   userName: new FormControl('Hari'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address : new FormGroup({
  //     city : new FormControl(''),
  //     state : new FormControl(''),
  //     postalCode : new FormControl('')
  //   })
  // });

  loadApiData() {
    this.registrationForm.patchValue({
      userName: 'Prasath',
      password: 'test',
      confirmPassword: 'test'
    });
  }
}
