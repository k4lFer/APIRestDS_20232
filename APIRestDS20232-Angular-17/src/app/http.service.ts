import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IUser, insertUser, User} from './interfaces/user';
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

  createUser(user:insertUser|FormData): Observable<insertUser>{
    return this.http.post<insertUser>(this.apiURL+"/User/InsertUser", user)
  }

 /* updateUser(idUser: string, formData: FormData): Observable<any>{
    return this.http.put<any>(this.apiURL+"/User/UpdateUser",{ params: { idUser: idUser }, formData },  )
  }*/
  updateUser(idUser: string, formData: FormData): Observable<any> {
    const url = `${this.apiURL}/User/UpdateUser`;
    return this.http.put<any>(url, formData, { params: { idUser:idUser } });
  }

  deleteUser(idUser: string): Observable<any>{
    console.log(this.apiURL+"/User/DeleteUser", { params: { id: idUser } });
    return this.http.delete(this.apiURL+"/User/DeleteUser", { params: { id: idUser } });
   // return this.http.delete(this.apiURL+"/User/DeleteUser/"+idUser)
   // return this.http.delete(`${this.apiURL}/User/DeleteUser/${idUser}`);
   //return this.http.delete(`${this.apiURL}/User/DeleteUser?id=`, { params: { id } });
   

  }

}
