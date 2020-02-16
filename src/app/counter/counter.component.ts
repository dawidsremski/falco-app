import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements AfterViewInit {

  @ViewChild('counter', {static: false}) counter: ElementRef;

  constructor() {
  }

  ngAfterViewInit() {
    if (this.counter.nativeElement.style.flexDirection === 'column') {
      this.counter.nativeElement.style.display = 'block !important';
      console.log('change style!');
    }
  }
}
