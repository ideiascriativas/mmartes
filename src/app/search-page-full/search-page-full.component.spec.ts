import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPageFullComponent } from './search-page-full.component';

describe('SearchPageFullComponent', () => {
  let component: SearchPageFullComponent;
  let fixture: ComponentFixture<SearchPageFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPageFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPageFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
