import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component'; 
import { AuthGuard } from './guards/auth.guard';



export const AppRoutes: Routes = [
 
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: '', pathMatch: 'full', redirectTo: '/login'},

  {  path: 'dashboard',  redirectTo: 'dashboard',canActivate: [AuthGuard] },
  {path: '',component: AdminLayoutComponent,
  children: [
        { path: '',loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'}]},
 

  { path: '**',  pathMatch: 'full', redirectTo: '/login'}
]
