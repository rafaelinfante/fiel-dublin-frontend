import { Component, OnInit } from '@angular/core';
import { LoginData, RestErrorResponse, SignInProviders } from '../../_shared/interfaces/auth.interfaces';
import { SIGNIN_PROVIDERS } from '../../_shared/configs/signin-buttons.config';
import { TranslateModule } from '@ngx-translate/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LanguageComponent } from '../../../_shared/components/language/language.component';
import { AuthService } from '../../_shared/services/auth.service';
import { StorageService } from '../../../_shared/service/storage.service';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { HttpHeaderResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [TranslateModule, LanguageComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  public signInProviders: SignInProviders[] = SIGNIN_PROVIDERS;
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.loginForm = this.formBuilder.group({
      username: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }

  login() {
    this.submitted = true;

    /*    if (this.loginForm.invalid) {
      return;
    }*/

    this.error = '';
    this.loading = true;

    const loginData: LoginData = {
      username: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value,
    };

    this.authService
      .login(loginData)
      .pipe(first())
      .subscribe({
        next: (response: HttpHeaderResponse) => {
          console.log('next');
          console.log(response);
          console.log(response.headers.get('Authorization'));

          this.storageService.setItem('jwt-token', response.headers.get('Authorization') as string);
          this.router.navigateByUrl('/backoffice/home');
        },
        error: (errorResponse: RestErrorResponse) => {
          console.log('error');
          console.log(errorResponse);
        },
      });
  }
}
