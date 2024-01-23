import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  public isAuthenticated(): boolean {
    //const token = localStorage.getItem('authToken');
    //const helper = new JwtHelperService();
    //const isExpired = helper.isTokenExpired(token);
    //return !isExpired;
    return true;
  }
}
