import { Routes } from '@angular/router';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [{
    path: "",
    component:MainDashboardComponent,
    children:[{
        path:"login",
        component:LoginComponent
    },{
        path:"register",
        component:RegisterComponent
    },{
        path:"order",
        component:RegisterComponent
    }]
}];
