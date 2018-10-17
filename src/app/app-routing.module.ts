import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {RegisterationComponent} from './auth/registeration/registeration.component';
import {ProfileComponent} from './profile/profile.component';
import {MainComponent} from './main/main.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'registeration', component: RegisterationComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'main', component: MainComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
