import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'buy-sell',
    component: DashboardComponent,
  },
  {
    path: 'transactions',
    component: DashboardComponent,
  },
  {
    path: 'exchange',
    component: DashboardComponent,
  },
  {
    path: 'tools',
    component: DashboardComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
