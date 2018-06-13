import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { ModificationActiveComponent } from './modification-active/modification-active.component';
import {EditModificationComponent} from './edit-modification/edit-modification.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'about', component: AboutComponent, canActivate: [AuthGuard]},
  {path: '', component: LoginComponent},
  {path: 'modificationActive', component: ModificationActiveComponent, canActivate: [AuthGuard]},
  {path: 'editModification/:id', component: EditModificationComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, AboutComponent, AppComponent, ModificationActiveComponent];
