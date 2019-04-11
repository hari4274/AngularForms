import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'reactive-forms';
  registrationForm = new FormGroup({
    userName: new FormControl('Hari'),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address : new FormGroup({
      city : new FormControl(''),
      state : new FormControl(''),
      postalCode : new FormControl('')
    })
  });

  loadApiData() {
    this.registrationForm.patchValue({
      userName: 'Prasath',
      password: 'test',
      confirmPassword: 'test'
    });
  }
}
