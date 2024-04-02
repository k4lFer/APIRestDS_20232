import { Component, ViewChild } from '@angular/core';
import { FormBuilder, NgModel, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { UserService } from '../../../api/user.service';
import { NgbDate, NgbDateParserFormatter, NgbDatepickerConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { response } from 'express';
import { AlertsComponent } from '../alerts/alerts.component';
import { NgbDatepickerModule,  } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { CustomDateParserFormatterService } from '../../../services/custom-date-parser-formatter.service';


@Component({
  selector: 'user-insert',
  templateUrl: './insert.component.html',
  styleUrl: './insert.component.css',
  providers: [
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatterService },
 ],
})
export class UserInsertComponent {
  @ViewChild(AlertsComponent) alertComponent!: AlertsComponent;

  //userForm : FormGroup
  userForm : UntypedFormGroup

 constructor(
  private userService : UserService,
  private modalService : NgbModal,
  private formBuilder: UntypedFormBuilder,
  private datepickerConfig: NgbDatepickerConfig
 ){
  
  this.userForm = this.formBuilder.group({
    userName: ["", Validators.required],
    firstName: ["", Validators.required],
    surName: ["", Validators.required],
    dni: ["", [Validators.required, Validators.pattern('^[0-9]{8}$')]],
    password : ["",Validators.required],
    birthDate: ["", Validators.required],
    gender : ['',Validators.requiredTrue],
     
   });
 }
 
 ngOnInit() {
  this.datepickerConfig.minDate = { year: 1900, month: 1, day: 1 };
  this.datepickerConfig.maxDate = { year: 2024, month: 12, day: 31 };
 }
 
 //Formatear fecha DatePicker a String
 formatBirthDate(birthDate: NgbDate): string {
  if (birthDate) {
     const day = birthDate.day < 10 ? '0' + birthDate.day : birthDate.day;
     const month = birthDate.month < 10 ? '0' + birthDate.month : birthDate.month;
     return `${day}/${month}/${birthDate.year}`;
  }
  return '';
 }


  onSubmit():void{
    const formattedBirthDate = this.formatBirthDate(this.userForm.value.birthDate!);
    const formData = new FormData()   
    formData.append('dtoUser.userName', this.userForm.value.userName!)
    formData.append('dtoUser.firstName', this.userForm.value.firstName!);
    formData.append('dtoUser.surName', this.userForm.value.surName!);
    formData.append('dtoUser.dni', this.userForm.value.dni!);
    formData.append('dtoUser.password', this.userForm.value.password);
    //formData.append('dtoUser.birthDate', this.userForm.value.birthDate);
    formData.append('dtoUser.birthDate', formattedBirthDate!);
    formData.append('dtoUser.gender', this.userForm.value.gender!);

    this.userService.createUser(formData).subscribe({
        next:response =>{
          console.log(response.mo)
          const messages = response.mo.listMessage;
          const messageType = response.mo.type;
            this.alertComponent.clearMessages();

        if (typeof messageType === 'string') {
          messages.forEach((message: any) => {
            this.alertComponent.addErrorMessage(message, messageType);
          });
        }
        else if (Array.isArray(messageType)) {
          messageType.forEach(type => {
            const filteredMessages = messages.filter((message: string | any[]) => message.includes(type));
            filteredMessages.forEach((message: any) => {
              this.alertComponent.addErrorMessage(message, type);
            });
          });
        }

        },
        error: error=>{
          console.error(error)
        }
    })
  
  }
}
