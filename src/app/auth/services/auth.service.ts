import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Credentials, User } from './../models';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login({ username, password }: Credentials): Observable<User> {
    /**
     * Simulate a failed login to display the error
     * message for the login form.
     */
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    const url = `${environment.authUrl}/user/login`
    return this.http.put<User>(url, {username, password}, httpOptions )
   
  }

  logout() {
    return of(true);
  }
}
