import { Component, Inject, inject } from '@angular/core';
import {
  MatDialogContainer,
  MatDialogModule,
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  } from '@angular/material/dialog';

import {MatButtonModule} from '@angular/material/button';
import {FormBuilder, FormsModule, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { insertUser } from '../../interfaces/user';
import { HttpService } from '../../http.service';
import { MatOption } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { Type } from '@angular/core/index';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatDialogClose, 
    MatOption, MatSelectModule, MatDatepickerModule, MatDialogContent, MatDialogActions, MatDialogContainer],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent {
  formBuilder = inject(FormBuilder);
  httpService = inject(HttpService);
    updateForm = this.formBuilder.group({
      userName: ['', Validators.required],
      firstName: ['', Validators.required],
      surName: ['', Validators.required],
      dni: ["",Validators.required],
      password : ["",Validators.required],
      birthDate: [null, Validators.required],
      gender : ["",Validators.required],
}
)  
  
  constructor(public dialogRef: MatDialogRef<UpdateUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  updateUser(): void {
    const formData = new FormData();
  
    // Agrega los campos que necesitas actualizar al FormData
    formData.append('userName', this.updateForm.get('userName')?.value || '');
    formData.append('firstName', this.updateForm.get('firstName')?.value || '');
    formData.append('surName', this.updateForm.get('surName')?.value || '');
    formData.append('dni', this.updateForm.get('dni')?.value || '');
    formData.append('birthDate', this.updateForm.get('birthDate')?.value || '');
    formData.append('gender', this.updateForm.get('gender')?.value || '');
  
    // Llama al servicio de actualización con FormData
    this.httpService.updateUser(this.data.idUser, formData).subscribe(() => {

    });
  }

  
}


