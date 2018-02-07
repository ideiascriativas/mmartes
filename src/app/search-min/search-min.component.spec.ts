import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMinComponent } from './search-min.component';

describe('SearchMinComponent', () => {
  let component: SearchMinComponent;
  let fixture: ComponentFixture<SearchMinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
