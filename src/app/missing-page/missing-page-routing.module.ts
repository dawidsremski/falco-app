import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MissingPageComponent} from './missing-page.component';

const routes: Routes = [{path: '', component: MissingPageComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MissingPageRouting {
}
