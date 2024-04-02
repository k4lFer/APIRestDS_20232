import { Component, Input, ViewChild } from '@angular/core';
import { UserService } from '../../../api/user.service';
import { NgbActiveModal, NgbDate, NgbDateParserFormatter, NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { AlertsComponent } from '../alerts/alerts.component';
import { CustomDateParserFormatterService } from '../../../services/custom-date-parser-formatter.service';

@Component({
  selector: 'edit-user',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
  providers: [
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatterService },
 ],
})
export class EditUserComponent {
  @Input() user: any; 
  userForm: FormGroup;
  @ViewChild(AlertsComponent) alertComponent!: AlertsComponent;
 
  constructor(public modal: NgbActiveModal, 
    private userService: UserService, 
    private formBuilder: UntypedFormBuilder,
    private datepickerConfig: NgbDatepickerConfig) {
     this.userForm = new FormGroup({
       userName: new FormControl(''),
       firstName: new FormControl(''),
       surName: new FormControl(''),
       dni: new FormControl(''),
       //password: new FormControl(''),
       birthDate: new FormControl(''),
       gender: new FormControl(false)
     });

     this.userForm = this.formBuilder.group({
      userName: ["", Validators.required],
      firstName: ["", Validators.required],
      surName: ["", Validators.required],
      dni: ["", Validators.required],
      //password : ["",Validators.required],
      birthDate: ["", Validators.required],
      gender : ['',Validators.required],
       
     });
  }

  formatBirthDate(birthDate: NgbDate): string {
    if (birthDate) {
       const day = birthDate.day < 10 ? '0' + birthDate.day : birthDate.day;
       const month = birthDate.month < 10 ? '0' + birthDate.month : birthDate.month;
       return `${day}/${month}/${birthDate.year}`;
    }
    return '';
   }

  convertStringToNgbDate(dateString: string): NgbDate {
    const [day, month, year] = dateString.split('/');
    return new NgbDate(parseInt(year, 10), parseInt(month, 10), parseInt(day, 10));
  }

  ngOnInit() {
    this.datepickerConfig.minDate = { year: 1960, month: 1, day: 1 };
    this.datepickerConfig.maxDate = { year: 2024, month: 12, day: 31 };
    
     if (this.user) {
      const genderBool = this.user.gender === "Masculino";
       this.userForm.setValue({
        //idUser: this.user.idUser,
         userName: this.user.userName,
         firstName: this.user.firstName,
         surName: this.user.surName,
         dni: this.user.dni,
         //password: this.user.password,
         //birthDate: this.user.birthDate,
        // birthDate: this.formatDateToDayMonthYear(this.user.birthDate),
        birthDate: this.convertStringToNgbDate(this.user.birthDate),
         //gender: this.user.gender
         gender: genderBool
       });
       
     }
     //console.log(this.user)
  }

   

 onSubmit(){ 
  const formattedBirthDate = this.formatBirthDate(this.userForm.value.birthDate!);
  const formData = new FormData()
  formData.append('dtoUser.idUser', this.user.idUser)   
  formData.append('dtoUser.userName', this.userForm.value.userName!)
  formData.append('dtoUser.firstName', this.userForm.value.firstName!);
  formData.append('dtoUser.surName', this.userForm.value.surName!);
  formData.append('dtoUser.dni', this.userForm.value.dni!);
  //formData.append('dtoUser.password', this.userForm.value.password);
  //formData.append('dtoUser.birthDate', this.userForm.value.birthDate);
  formData.append('dtoUser.birthDate', formattedBirthDate!);
  formData.append('dtoUser.gender', this.userForm.value.gender!);

  this.userService.updateUser(formData).subscribe({
    
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
