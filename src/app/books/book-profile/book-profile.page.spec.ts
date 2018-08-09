import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookProfilePage } from './book-profile.page';

describe('BookProfilePage', () => {
  let component: BookProfilePage;
  let fixture: ComponentFixture<BookProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
