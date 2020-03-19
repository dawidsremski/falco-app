import {AfterViewInit, Component, ComponentRef, ViewEncapsulation} from '@angular/core';
import * as AOS from 'aos';
import {MapComponent} from '../../map/map.component';
import {IntersectionStatus} from '../../falco-common/intersection-observer/from-intersection-observer';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements AfterViewInit {

  visibilityStatus: { [key: string]: IntersectionStatus } = {};
  intersectionStatus = IntersectionStatus;

  constructor() {
  }

  ngAfterViewInit() {
    AOS.init();
    window.dispatchEvent(new Event('resize'));
  }

  lazyInit({instance: mapComponent}: ComponentRef<MapComponent>) {
    mapComponent.config = {
      latitude: 53.526871,
      longitude: 20.717799,
      zoom: 15,
      minZoom: 8,
      maxZoom: 19
    };

    mapComponent.markers = [
      {
        latitude: 53.526871,
        longitude: 20.717799,
        description: 'ZPHU Falco Henryk Słowikowski\nul. Olsztyńska 11F\n12-122 Jedwabno\nPolska'
      }
    ];

    mapComponent.height = '600px';
  }

  onVisibilityChange(index: string, status: IntersectionStatus) {
    this.visibilityStatus[index] = status;
  }
}
