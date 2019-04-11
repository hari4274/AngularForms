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
  });
}
