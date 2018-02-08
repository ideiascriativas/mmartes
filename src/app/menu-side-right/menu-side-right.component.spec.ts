import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSideRightComponent } from './menu-side-right.component';

describe('MenuSideRightComponent', () => {
  let component: MenuSideRightComponent;
  let fixture: ComponentFixture<MenuSideRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSideRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSideRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
