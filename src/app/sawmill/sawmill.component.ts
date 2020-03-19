import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-sawmill',
  templateUrl: './sawmill.component.html',
  styleUrls: ['./sawmill.component.scss']
})
export class SawmillComponent implements AfterViewInit {

  constructor() {
  }

  ngAfterViewInit() {
    AOS.init();
    window.dispatchEvent(new Event('resize'));
  }
}
