import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {MissingPageComponent} from './pages/missing-page/missing-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tartak', loadChildren: () => import('./sawmill/sawmill.module').then(m => m.SawmillModule)},
  {path: 'praca', loadChildren: () => import('./career/career.module').then(m => m.CareerModule)},
  {path: 'zapytania-ofertowe', loadChildren: () => import('./inquiries/inquiries.module').then(m => m.InquiriesModule)},
  {path: 'kontakt', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)},
  {path: '**', component: MissingPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
