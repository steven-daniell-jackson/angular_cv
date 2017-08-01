import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageWorkExperienceComponent } from './homepage-work-experience.component';

describe('HomepageWorkExperienceComponent', () => {
  let component: HomepageWorkExperienceComponent;
  let fixture: ComponentFixture<HomepageWorkExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageWorkExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageWorkExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
