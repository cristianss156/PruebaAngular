import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IvaComponent } from './iva/iva.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IvaDetailComponent } from './iva-detail/iva-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'iva', component: IvaComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: IvaDetailComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
