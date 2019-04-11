import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'tdf';
  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;

  userModel = new User('Rob', 'a@gmail.com', 9666641233, 'default', 'morning', true);
  
  validateTopic(value) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }
}
