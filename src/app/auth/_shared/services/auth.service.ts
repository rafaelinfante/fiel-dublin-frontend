import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../../../environments/environment";
import {LoginData} from "../interfaces/auth.interfaces";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authUrl = environment.authUrl;
  constructor(private http: HttpClient) {}

  public login(data: LoginData): Observable<any> {
    return this.http.post<any>(`${this.authUrl}login`, data, { observe: 'response' });
  }

  public isAuthenticated(): boolean {
    //const token = localStorage.getItem('authToken');
    //const helper = new JwtHelperService();
    //const isExpired = helper.isTokenExpired(token);
    //return !isExpired;
    return true;
  }
}
