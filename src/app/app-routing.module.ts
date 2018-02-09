import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'notFound', component: NotFoundComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: '**', redirectTo: '/notFound', pathMatch: 'full'}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
