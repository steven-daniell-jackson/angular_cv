import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageExperienceSliderComponent } from './homepage-experience-slider.component';

describe('HomepageExperienceSliderComponent', () => {
  let component: HomepageExperienceSliderComponent;
  let fixture: ComponentFixture<HomepageExperienceSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageExperienceSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageExperienceSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
