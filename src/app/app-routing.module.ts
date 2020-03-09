import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {MissingPageComponent} from './pages/missing-page/missing-page.component';
import {ContactComponent} from './pages/contact/contact.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'kontakt', component: ContactComponent},
  {path: '**', component: MissingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
