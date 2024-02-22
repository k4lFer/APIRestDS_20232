import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { AppComponent} from './app.component';
import { InsertUserComponent} from './components/insert-user/insert-user.component';
export const routes: Routes = [

    {
        path:"user-list",
        component:UserComponent
    },

    {
        path:"insert-user",
        component:InsertUserComponent
    },
];
