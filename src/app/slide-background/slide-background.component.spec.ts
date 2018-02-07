import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideBackgroundComponent } from './slide-background.component';

describe('SlideBackgroundComponent', () => {
  let component: SlideBackgroundComponent;
  let fixture: ComponentFixture<SlideBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
