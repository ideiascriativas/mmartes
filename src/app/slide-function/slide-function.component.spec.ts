import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideFunctionComponent } from './slide-function.component';

describe('SlideFunctionComponent', () => {
  let component: SlideFunctionComponent;
  let fixture: ComponentFixture<SlideFunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideFunctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
