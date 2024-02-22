import { Component, OnInit, inject } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { HttpService } from '../../http.service';
import { IUser, insertUser } from '../../interfaces/user'; 
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { MatOption } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInput } from '@angular/material/input';


@Component({
  selector: 'app-insert-user',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule,  MatOption, MatSelectModule],
  templateUrl: './insert-user.component.html',
  styleUrl: './insert-user.component.css'
  
})


export class InsertUserComponent{  
  formBuilder = inject(FormBuilder);
  httpService = inject(HttpService);
    userForm = this.formBuilder.group({
      userName: ['', Validators.required],
      firstName: ['', Validators.required],
      surName: ['', Validators.required],
      dni: ["",Validators.required],
      password : ["",Validators.required],
      birthDate: [null, Validators.required],
      gender : ["",Validators.required],
}
)  
  //insertUser: any[] = [];
 
  onSubmit(): void {
    console.log(this.userForm.value);
    const formData = new FormData()      
      /*userName: this.userForm.value.userName!,
      firstName: this.userForm.value.firstName!,
      surName: this.userForm.value.surName!,
      dni: this.userForm.value.dni!,
      password: this.userForm.value.password!,
      birthDate: this.userForm.value.birthDate ? new Date(this.userForm.value.birthDate) : null,
      gender: Boolean(this.userForm.value.gender),*/
      formData.append('userName', this.userForm.value.userName!)
      formData.append('firstName', this.userForm.value.firstName!);
      formData.append('surName', this.userForm.value.surName!);
      formData.append('dni', this.userForm.value.dni!);
      formData.append('password', this.userForm.value.password!);
      formData.append('birthDate', this.userForm.value.birthDate ? new Date(this.userForm.value.birthDate).toISOString() : '');
      formData.append('gender', this.userForm.value.gender!);
   
    this.httpService.createUser(formData).subscribe(
      () => {
        console.log("Éxito");
      },
      (error) => {
        console.error("Error al enviar la solicitud:", error);
      }
    );
   
}
}