import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(body: User): Observable<User> {
    return this.httpClient.post<User>(`${environment.api_url}/users/login`, body);
  }
}
