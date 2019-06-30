import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { HikeRunningPage } from './hike-running.page';

describe('HikeRunningPage', () => {
  let component: HikeRunningPage;
  let fixture: ComponentFixture<HikeRunningPage>;
  let hikeRunningPage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HikeRunningPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(async () => {
    fixture = await TestBed.createComponent(HikeRunningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
      hikeRunningPage = fixture.nativeElement;
      const items = hikeRunningPage.querySelectorAll('ion-item');
      expect(items.length).toEqual(10);
  });

});
