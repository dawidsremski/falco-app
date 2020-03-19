import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CounterComponent} from './counter.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [CounterComponent],
  bootstrap: [CounterComponent],
  imports: [
    CommonModule,
    FlexLayoutModule
  ]
})

export class CounterModule {
}
