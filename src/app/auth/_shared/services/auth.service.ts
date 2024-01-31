import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { LoginData } from '../interfaces/auth.interfaces';
import { Observable } from 'rxjs';
import { StorageService } from '../../../_shared/service/storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authUrl = environment.authUrl;

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  public login(data: LoginData): Observable<any> {
    return this.http.post<any>(`${this.authUrl}login`, data, { observe: 'response' });
  }

  public oauth2(): Observable<any> {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    });
    return this.http.get<any>(`http://localhost:8080/oauth2/authorization/google`, { headers, observe: 'response' });
  }

  public isAuthenticated(): boolean {
    //const token = localStorage.getItem('authToken');
    //const helper = new JwtHelperService();
    //const isExpired = helper.isTokenExpired(token);
    //return !isExpired;

    const storedValue: string | null = this.storageService.getItem('is-loggedIn');

    return storedValue !== null ? storedValue === 'true' : false;
  }
}
