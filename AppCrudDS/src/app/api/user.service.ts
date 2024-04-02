import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOption: any = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }

  constructor(
    private httpClient : HttpClient,
  ) { }

  private apiURL = "http://localhost:5289/User";

 /* public getAll() : Observable<any>{
    return this.httpClient.get<any>(this.apiURL+"/GetAll",this.httpOption).pipe(
      map((response: any)=>{
        if (response && response.allUsers) {
          response.allUsers = response.allUsers.map((user: { 
            gender: string; 
            birthDate: string | Date; 
            registerDate: string | Date;
            modificationDate: string | Date}) => {
            user.gender = user.gender ? 'Femenino' : 'Masculino';
            user.birthDate = new Date(user.birthDate).toLocaleDateString();  
  
          return user;
          });
        }
        return response;
      })

    );
  }*/


/*public getAll(): Observable<any> {
  return this.httpClient.get<any>(this.apiURL + "/GetAll", this.httpOption).pipe(
      map((response: any) => {
        if (response && response.allUsers) {
          response.allUsers = response.allUsers.map((user: {
            genderDescription?: string;
            gender: boolean;
            birthDate: string | Date;
            registerDate: string | Date;
            modificationDate: string | Date;
          }) => {
            // Crea una nueva propiedad para almacenar la representación de cadena de 'gender'
            user.genderDescription = user.gender ? 'Masculino' : 'Femenino';
            // Transforma la fecha de nacimiento a una cadena localizada
            user.birthDate = new Date(user.birthDate).toLocaleDateString();
  
            return user;
          });
        }
        return response;
      })
  );
 }*/

 public getAll(): Observable<any> {
  return this.httpClient.get<any>(this.apiURL + "/GetAll", this.httpOption).pipe(
     map((response: any) => {
       if (response && response.allUsers) {
         response.allUsers = response.allUsers.map((user: any) => {
           if (typeof user.gender === 'boolean') {
             user.gender = user.gender ? "Masculino" : "Femenino";
           }
 
           user.birthDate = new Date(user.birthDate).toLocaleDateString();
           user.registerDate = new Date(user.registerDate).toLocaleString();
           user.modificationDate = new Date(user.modificationDate).toLocaleString();
 
           return user;
         });
       }
       return response;
     })
  );
 }
 

  public deleteUser(idUser: string) : Observable<any>{
    return this.httpClient.delete(this.apiURL+"/deleteuser/", { params: { idUser: idUser } });
  }
  public createUser(user:FormData): Observable<any>{
    return this.httpClient.post<FormData>(this.apiURL+"/InsertUser", user)
  }

  /*public showUser(idUser: string) : Observable<any>{
    return this.httpClient.get(this.apiURL+"/getbyid/", { params: { idUser: idUser } });
  }*/
  public showUser(idUser: string): Observable<any> {
    return this.httpClient.get(this.apiURL + "/getbyid/", { params: { idUser: idUser } }).pipe(
       map((response: any) => {
         if (response && response.dtoUser) {
           if (Array.isArray(response.dtoUser)) {
             response.dtoUser = response.dtoUser.map((user: any) => {
               if (typeof user.gender === 'boolean') {
                 user.gender = user.gender ? "Masculino" : "Femenino";
               }
               user.birthDate = new Date(user.birthDate).toLocaleDateString();
               user.registerDate = new Date(user.registerDate).toLocaleString();
               return user;
             });
           } else if (response.dtoUser) {
             response.dtoUser.birthDate = new Date(response.dtoUser.birthDate).toLocaleDateString();
             response.dtoUser.registerDate = new Date(response.dtoUser.registerDate).toLocaleString();
           }
         }
         return response;
       })
    );
   }
  
  public updateUser(user:FormData): Observable<any>{
    return this.httpClient.put<FormData>(this.apiURL+"/UpdateUser", user)
  }
}
