import { Component } from '@angular/core';
import { SignInProviders } from '../../_shared/interfaces/auth.interfaces';
import { SIGNIN_PROVIDERS } from '../../_shared/configs/signin-buttons.config';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { LanguageComponent } from '../../../_shared/components/language/language.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [TranslateModule, LanguageComponent, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  public signInProviders: SignInProviders[] = SIGNIN_PROVIDERS;

  constructor() {}
}
