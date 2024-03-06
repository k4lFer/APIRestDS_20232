import { Component, inject, OnInit } from '@angular/core';
import { IUser, User } from '../../interfaces/user';
import { HttpService } from '../../http.service';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogContainer } from '@angular/material/dialog';
import { UpdateUserComponent } from '../update-user/update-user.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { DeleteUserComponent } from '../delete-user/delete-user.component';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatDialogContainer, MatInputModule, FormsModule, 
            RouterLink, RouterOutlet, CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent implements OnInit{
  
  constructor(public dialog: MatDialog) { }
  UserList : any[] = [];

  httpService = inject(HttpService);
  displayedColumns: string[] = [
   // 'idUser',
    'userName', 
    'firstName', 
    'surName',
    'dni',
    'birthDate',
    'gender', 
    'registerDate', 
    'modificationDate',
    'action'];

  ngOnInit(): void{
    this.httpService.getAllUser().subscribe((result: IUser) => {
      this.UserList = result.allUsers;
      console.log(this.UserList);
    });
    
  }

  
  openUpdateUserDialog(user: User): void {
    const dialogRef = this.dialog.open(UpdateUserComponent, {
      width: '850px',
      data: { idUser: user.idUser, userName: user.userName, 
              surName:user.surName, firstName: user.firstName,
              dni: user.dni, birthDate: user.birthDate,
              gender: user.gender,
      }
    });
  }

  //DELETE
  openDeleteUserDialog(user: any): void {
   // console.log('Valor de idUser antes de abrir el diálogo:', user.idUser);
    const dialogRef = this.dialog.open(DeleteUserComponent, {
      width: '350px',
      data: { idUser: user.idUser, userName: user.userName } // Pasamos la información del usuario al diálogo
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('Valor de idUser después de cerrar el diálogo:', result.idUser);
      if (result) {
        // Si el usuario confirmó la eliminación
        this.httpService.deleteUser(result.idUser).subscribe((response) => {
            console.log('Respuesta del servidor:', response);
            console.log('Usuario eliminado con éxito', result.idUser);
            // Actualizar la lista de usuarios después de la eliminación si es necesario
            
          },
          (error) => {
            console.error('Error al eliminar el usuario', error);
          }
        );
      }
    });
  }

}
