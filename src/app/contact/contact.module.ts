import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ContactRoutingModule} from './contact-routing.module';
import {ContactComponent} from './contact.component';
import {MatIconModule} from '@angular/material/icon';
import {AgmCoreModule} from '@agm/core';
import {FalcoCommonModule} from '../falco-common/falco-common.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    MatIconModule,
    AgmCoreModule,
    FalcoCommonModule,
    FlexLayoutModule,
    MatDividerModule
  ]
})
export class ContactModule {
}
