import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];
