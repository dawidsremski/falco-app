import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MissingPageComponent} from './missing-page.component';
import {FalcoCommonModule} from '../falco-common/falco-common.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MissingPageRouting} from './missing-page-routing.module';

@NgModule({
  declarations: [
    MissingPageComponent
  ],
  imports: [
    CommonModule,
    MissingPageRouting,
    FalcoCommonModule,
    FlexLayoutModule
  ],
  bootstrap: [
    MissingPageComponent
  ]
})
export class MissingPageModule {
}
