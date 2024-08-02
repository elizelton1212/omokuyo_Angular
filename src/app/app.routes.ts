import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { EsqueletoComponent } from './esqueleto/esqueleto.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { AgenciaComponent } from './components/agencia/agencia/agencia.component';

export const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'agencia',component:AgenciaComponent}


];
