import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { VaultComponent } from './vault/vault.component';
import { PlannerComponent } from './planner/planner.component';

const routeConfig: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'vault', component: VaultComponent },
  { path: 'planner', component: PlannerComponent },

];


export default routeConfig;
