import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserGetAllComponent } from './pages/user/get-all/get-all.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditUserComponent } from './pages/user/edit/edit.component';
import { UserInsertComponent } from './pages/user/insert/insert.component';
import { AlertsComponent } from './pages/user/alerts/alerts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowUserComponent } from './pages/user/show/show.component';


@NgModule({
  declarations: [
    AppComponent,
    UserGetAllComponent,
    EditUserComponent,
    UserInsertComponent,
    AlertsComponent,

    EditUserComponent,
    ShowUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),  

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
