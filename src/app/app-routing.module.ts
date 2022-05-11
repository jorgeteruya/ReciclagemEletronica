import { LeadingComment } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscartComponent } from './discart/discart.component';
import { HomeComponent } from './home/home.component';
import { LegislationComponent } from './legislation/legislation.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'legislation', component: LegislationComponent },
  { path: '/discart', component: DiscartComponent },
  { path: '/ReciclagemEletronica/discart', component: DiscartComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to first-component
  { path: '**', component: HomeComponent },  // Wildcard route for a 404 page
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
