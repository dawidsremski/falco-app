import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FalcoCommonModule} from './falco-common/falco-common.module';
import {LoadableModule, matcher} from 'ngx-loadable';
import {LoadingSpinnerComponent} from './falco-common/loading-spinner/loading-spinner.component';
import {HomeModule} from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    HomeModule,
    FalcoCommonModule,
    LoadableModule.forRoot({
      moduleConfigs: [
        {
          name: 'map', loadChildren: () => import('./map/map.module').then(m => m.MapModule),
          loadingComponent: LoadingSpinnerComponent,
          matcher
        },
        {
          name: 'counter', loadChildren: () => import('./home/counter/counter.module').then(m => m.CounterModule),
          loadingComponent: LoadingSpinnerComponent,
          matcher
        }
      ]
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
