import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HompageCarouselComponent } from './hompage-carousel.component';

describe('HompageCarouselComponent', () => {
  let component: HompageCarouselComponent;
  let fixture: ComponentFixture<HompageCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HompageCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HompageCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
