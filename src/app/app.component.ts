import { Component } from '@angular/core';
import { passwordValidator } from 'src/helpers/passwordsValidator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  password = '';
  passwordStrength = '';

  onPasswordChange(event: Event) {
    this.password = (event.target as HTMLInputElement).value;

    this.passwordStrength = passwordValidator(this.password);
  }
}
