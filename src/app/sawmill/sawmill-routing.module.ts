import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SawmillComponent } from './sawmill.component';

const routes: Routes = [{ path: '', component: SawmillComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SawmillRoutingModule { }
