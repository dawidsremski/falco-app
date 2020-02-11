import {AfterViewInit, Component} from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit {

  constructor() {
  }

  ngAfterViewInit() {
    AOS.init();
    window.dispatchEvent(new Event('resize'));
  }

}
