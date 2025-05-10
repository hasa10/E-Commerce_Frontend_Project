import { Routes } from '@angular/router';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PostCategoryComponent } from './admin/component/post-category/post-category.component';

export const routes: Routes = [{
    path:"",
    component:MainDashboardComponent,
    children:[{
        path:"login",
        component:LoginComponent
    },
    {
        path:"signup",
        component:RegisterComponent
    },
    {
        path:"order",
        component:RegisterComponent
    }]
},
{
    path: '',
    component: MainDashboardComponent, 
    children: [
      {
        path: "admin/dashboard",
        loadComponent: () =>
          import('./admin/component/admin-dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent),
      },{
        path: "customer/dashboard",
        loadComponent: () =>
          import('./customer/component/customer-dashboard/customer-dashboard.component').then(m => m.CustomerDashboardComponent),
      }]
    },
    {
      path:"admin/category",
      component:PostCategoryComponent
    }

];