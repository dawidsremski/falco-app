import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {MissingPageComponent} from './pages/missing-page/missing-page.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '**', component: MissingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
