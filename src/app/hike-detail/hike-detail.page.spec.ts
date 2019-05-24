import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HikeDetailPage } from './hike-detail.page';

describe('HikeDetailPage', () => {
  let component: HikeDetailPage;
  let fixture: ComponentFixture<HikeDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HikeDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HikeDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
