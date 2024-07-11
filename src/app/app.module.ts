import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { VaultComponent } from './vault/vault.component';
import { PlannerComponent } from './planner/planner.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HomeComponent,
    TodoComponent,
    VaultComponent,
    PlannerComponent, // Importa il componente standalone
  ],
  providers: [],
})
export class AppModule { }
