import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SawmillComponent } from './sawmill.component';

describe('SawmillComponent', () => {
  let component: SawmillComponent;
  let fixture: ComponentFixture<SawmillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SawmillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SawmillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
