import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.css'
})
export class AlertsComponent {
  //@Input() messages: string = '';
 // @Input() messageType: 'success' | 'error' | 'info' = 'info';
 
// En tu AlertsComponent

  messages: { message: string; type: string }[] = [];
 
  // Método para agregar un mensaje de error
  addErrorMessage(message: string, type: string) {
     this.messages.push({ message, type });
  }
 
  // Método para limpiar los mensajes de error
  clearMessages() {
     this.messages = [];
  }
 
 
}
