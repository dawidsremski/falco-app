import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InquiriesRoutingModule } from './inquiries-routing.module';
import { InquiriesComponent } from './inquiries.component';
import {FalcoCommonModule} from '../falco-common/falco-common.module';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [InquiriesComponent],
  imports: [
    CommonModule,
    InquiriesRoutingModule,
    FalcoCommonModule,
    FlexLayoutModule
  ]
})
export class InquiriesModule { }
