import { Component, inject } from '@angular/core';
import { dirname } from 'node:path';
import { UserService } from '../../../api/user.service';
import { response } from 'express';
import { map } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditUserComponent } from '../edit/edit.component';
import Swal from 'sweetalert2';
import { ShowUserComponent } from '../show/show.component';

@Component({
  selector: 'user-get-all',
  templateUrl: './get-all.component.html',
  styleUrl: './get-all.component.css'
})
export class UserGetAllComponent {
  listUser:any[] = [];

  constructor(
    private userService : UserService,
    private modalService : NgbModal,
  ){}


  ngOnInit(){
    this.userService.getAll().subscribe({
      next: (response: any)=>{
        console.log(response.allUsers)
        this.listUser = response.allUsers
      },
      error: (error:any) =>{
        console.log(error);
      }
    });
   
  }

 /* deleteUser(idUser: string): void {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });

    this.userService.deleteUser(idUser).subscribe({
      next: (response: any) => {
         console.log(response.mo);
         this.listUser = this.listUser.filter(x => x.idUser !== idUser)

      },
      error: (error: any) => {
         console.error('Error al eliminar el usuario', error);
      }
     });
 }
*/
deleteUser(idUser: string): void {
  Swal.fire({
     title: "Are you sure?",
     text: "You won't be able to revert this!",
     icon: "warning",
     showCancelButton: true,
     confirmButtonColor: "#3085d6",
     cancelButtonColor: "#d33",
     confirmButtonText: "Yes, delete it!"
  }).then((result) => {
     if (result.isConfirmed) {
       // Llamada al servicio para eliminar el usuario solo después de confirmación
       this.userService.deleteUser(idUser).subscribe({
         next: (response: any) => {
           console.log(response.mo);
           this.listUser = this.listUser.filter(x => x.idUser !== idUser);
           // Mostrar un mensaje de éxito después de la eliminación
           Swal.fire({
             title: "Deleted!",
             text: "Your file has been deleted.",
             icon: "success"
           });
         },
         error: (error: any) => {
           console.error('Error al eliminar el usuario', error);
           // Mostrar un mensaje de error si la eliminación falla
           Swal.fire({
             title: "Error!",
             text: "Failed to delete the user.",
             icon: "error"
           });
         }
       });
     }
  });
 }
  

editUser(value: any):void {
  const modalRef = this.modalService.open(EditUserComponent);
  modalRef.componentInstance.user = value;
}

showUser(idUser: string){
 const modalRef = this.modalService.open(ShowUserComponent);
 modalRef.componentInstance.setUserId(idUser);
}

}
 