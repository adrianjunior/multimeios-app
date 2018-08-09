import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsProfilePage } from './news-profile.page';

describe('NewsProfilePage', () => {
  let component: NewsProfilePage;
  let fixture: ComponentFixture<NewsProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
