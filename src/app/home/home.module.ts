import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {FalcoCommonModule} from '../falco-common/falco-common.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MainComponent} from './main/main.component';
import {LoadableModule, matcher} from 'ngx-loadable';
import {RouterModule} from '@angular/router';
import {HomeRouting} from './home-routing.module';
import {LoadingSpinnerComponent} from '../falco-common/loading-spinner/loading-spinner.component';


@NgModule({
  declarations: [
    HomeComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    HomeRouting,
    FalcoCommonModule,
    FlexLayoutModule,
    MatButtonModule,
    LoadableModule,
    RouterModule
  ],
  bootstrap: [
    HomeComponent
  ]
})
export class HomeModule {
}
