import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SawmillRoutingModule} from './sawmill-routing.module';
import {SawmillComponent} from './sawmill.component';
import {FalcoCommonModule} from '../falco-common/falco-common.module';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [SawmillComponent],
  imports: [
    CommonModule,
    SawmillRoutingModule,
    FalcoCommonModule,
    FlexLayoutModule
  ]
})
export class SawmillModule {
}
