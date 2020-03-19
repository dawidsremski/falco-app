import {AfterViewInit, Component, ComponentRef, ElementRef, HostListener, ViewChild} from '@angular/core';
import * as AOS from 'aos';
import {MapComponent} from '../map/map.component';
import {IntersectionStatus} from '../falco-common/intersection-observer/from-intersection-observer';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements AfterViewInit {

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
      latitude: 53.596115,
      longitude: 20.831776,
      zoom: 10,
      minZoom: 8,
      maxZoom: 19
    };

    mapComponent.markers = [
      {
        latitude: 53.526871,
        longitude: 20.717799,
        description: 'ZPHU Falco Henryk Słowikowski\nul. Olsztyńska 11F\n12-122 Jedwabno\nPolska'
      },
      {
        latitude: 53.625720,
        longitude: 20.954515,
        description: 'Tartak\nTrelkówko 13\n12-100 Szczytno\nPolska'
      }
    ];

    mapComponent.height = '100%';
  }

  onVisibilityChange(index: string, status: IntersectionStatus) {
    this.visibilityStatus[index] = status;
  }
}
