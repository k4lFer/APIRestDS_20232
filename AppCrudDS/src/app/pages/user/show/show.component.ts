import { Component } from '@angular/core';
import { UserService } from '../../../api/user.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs';

@Component({
  selector: 'show-user',
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
// En ShowUserComponent

export class ShowUserComponent {
  listUser: any = {};
  idUser!: string;
 
  constructor(private userService: UserService, public modal: NgbActiveModal) {}
 
  setUserId(idUser: string) {
     this.idUser = idUser;
     this.loadUserData();
  }
 
  loadUserData() {
    this.userService.showUser(this.idUser).subscribe({
       next: (response: any) => {
         console.log(response.dtoUser); 
         this.listUser = response.dtoUser; 
       },
       error: (error: any) => {
         console.log(error);
       }
    });
   }
  /* loadUserData() {
    this.userService.showUser(this.idUser).pipe(
       map((response: any) => {
         // Verifica si response.dtoUser es un array
         if (Array.isArray(response.dtoUser)) {
           // Si es un array, mapea cada usuario
           response.dtoUser = response.dtoUser.map((user: any) => {
   
             user.birthDate = new Date(user.birthDate).toLocaleDateString();
             user.registerDate = new Date(user.registerDate).toLocaleString();
            
   
             return user;
           });
         } else if (response.dtoUser) {
   
           response.dtoUser.birthDate = new Date(response.dtoUser.birthDate).toLocaleDateString();
           response.dtoUser.registerDate = new Date(response.dtoUser.registerDate).toLocaleString();

         }
         return response;
       })
    ).subscribe({
       next: (response: any) => {
         console.log(response.dtoUser); 
         this.listUser = response.dtoUser; 
       },
       error: (error: any) => {
         console.log(error);
       }
    });
   }*/
 }
 