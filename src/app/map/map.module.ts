import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MapComponent} from './map.component';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  declarations: [MapComponent],
  bootstrap: [MapComponent],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAFC9h0XBTsS4xsYJA4dy05YeiK9OqA80Q'
    })
  ]
})

export class MapModule {
}
