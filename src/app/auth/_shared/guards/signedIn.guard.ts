import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class SignedInGuard {
  constructor(
    private authService: AuthService,
    private location: Location
  ) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      this.location.back();
      return false;
    } else {
      return true;
    }
  }
}
