import { Component, inject, OnInit } from '@angular/core';
import { IUser } from '../../interfaces/user';
import { HttpService } from '../../http.service';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent implements OnInit{
  
  UserList : any[] = [];

  httpService = inject(HttpService);
  displayedColumns: string[] = [
    'idUser',
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
}
