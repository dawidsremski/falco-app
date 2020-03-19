import {AfterViewInit, Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements AfterViewInit {

  counters;
  duration = 3000;
  steps = 15;

  constructor(private elementRef: ElementRef) {
  }

  animateCount() {
    this.counters.forEach(counter => {
      this.counterFunc(counter.textContent, this.duration, counter);
    });
  }

  counterFunc(endValue, durationMs, element) {

    const stepCount = Math.abs(durationMs / this.steps);
    const valueIncrement = (endValue - 0) / stepCount;
    const sinValueIncrement = Math.PI / stepCount;

    let currentValue = 0;
    let currentSinValue = 0;

    function step() {
      currentSinValue += sinValueIncrement;
      currentValue += valueIncrement * Math.sin(currentSinValue) ** 2 * 2;

      element.textContent = Math.abs(Math.floor(currentValue));

      if (currentSinValue < Math.PI) {
        window.requestAnimationFrame(step);
      }
    }

    step();
  }

  ngAfterViewInit() {
    this.counters = this.elementRef.nativeElement.querySelectorAll('.counter');
    this.animateCount();
  }
}
