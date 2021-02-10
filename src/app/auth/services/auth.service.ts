import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Credentials, RegisterForm, User } from './../models';
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
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json',
    //   })
    // };
    const url = `${environment.authUrl}/login`
    return this.http.post<User>(url, {username, password})
   
  }

  register({ username, email, password }: RegisterForm): Observable<string> {
    /**
     * Simulate a failed login to display the error
     * message for the login form.
     */
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json',
    //   })
    // };
    const url = `${environment.authUrl}/register`
    return this.http.post<string>(url, {username, password})
   
  }


  logout() {
    return of(true);
  }
}
