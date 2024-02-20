import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IUser} from './interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiURL = "http://localhost:5289";
  http = inject(HttpClient);
  constructor() { }

  getAllUser(): Observable<IUser>{
    return this.http.get<IUser>(this.apiURL+"/User/GetAll")
  }
  insertUser(user:IUser): Observable<any>{
    return this.http.post(this.apiURL+"/User/InsertUser", user)
  }
}
